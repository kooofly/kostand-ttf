

var _ = require('./util')
var _subscriptions = {}
var eventSplitter = /\s+/
function getMethod( host, methodName ) {
    var method = host[methodName];
    if ( !method ) {
        throw 'Invalid method name: ' + methodName
    }
    return method
}
function sliceArgs(args, startIndex) {
    return [].slice.call( args, startIndex || 0 )
}
function wrap( methodName, context ) {
    var old = this[methodName]
    var trigger = event.emit
    this[methodName] = function() {
        var args = sliceArgs( arguments )
        var beforeArgs = ['before:' + methodName].concat( args )

        // prevent if trigger return false
        if ( trigger.apply(this, beforeArgs) === false ) return

        var ret = old.apply(this, arguments)
        var afterArgs = ['after:' + methodName, args].concat( ret )
        trigger.apply( this, afterArgs )

        return ret
    };

    this[methodName].__isAspected = true
}
function weave(when, methodName, context, callback, priority) {
    var names = methodName.split(eventSplitter)
    var name, method
    var on = event.on
    while ( name = names.shift() ) {
        method = getMethod( context || this, name )
        if ( !method.__isAspected ) {
            wrap.call( context || this, name, context )
        }
        on.call( this, when + ':' + name, context, callback, priority )
    }

    return this
}
var event = {
    /**
     * 观察者 on
     * @method on
     * @param   {String}        topic   发布内容的id
     * @param   {Object}        [v]     发布的参数内容，可以多个
     * @returns {boolean}
     */
    emit: function (topic) {
        if (!_.isString(topic)) {
            throw 'on topic not string.'
        }
        var args = [].slice.call(arguments, 1)
        var topicSubscriptions
        var subscription
        var ret
        var s = _subscriptions
        if (!s[topic]) {
            return true
        }
        topicSubscriptions = s[topic].slice()
        for (var i = 0, length = topicSubscriptions.length; i < length; i++) {
            subscription = topicSubscriptions[i]
            ret = subscription.callback.apply(subscription.context || this, args)
            if (ret === false) {
                break
            }
        }
        return ret !== false
    },
    /**
     * 观察者 on 订阅事件
     * @method on
     * @param {String}                  topic           订阅内容的id
     * @param {Object|Function}         [context]       函数上下文作用域，如果参数为function 则此参数为callback参数
     * @param {Function|Number}         callback        回调函数，包含publish所发布的参数 如果参数为number 则此参数为priority
     * @param {Number}                  [priority]      执行优先级，默认为5，数值越大，越优先执行
     * @returns {*}
     */
    on: function (topic, context, callback, priority) {
        var maybeUnlock = true, //是否解锁
            defaultPri = 5
        if ( !_.isString( topic ) ) {
            throw 'on topic not string.'
        }

        //subscribe(topic, callback)
        if ( _.isUndefined( callback ) && _.isUndefined( priority ) ) {
            callback = context
            context = null
            priority = defaultPri
        }

        else if ( _.isUndefined( priority ) ) {
            //subscribe(topic, callback, priority)
            _.isNumber( callback ) && ( priority = callback, callback = context, context = null )
            //subscribe(topic, callback, isLock)
            _.isBoolean( callback ) && ( maybeUnlock = callback, callback = context, context = null, priority = defaultPri )
        }

        //subscribe(topic, context, callback, isLock)
        else if( _.isBoolean( priority ) ) {
            maybeUnlock = priority //if(true) 就解锁，无视锁定添加
            priority = defaultPri
        }

        if( !maybeUnlock && _subscriptions[topic + '[locked]'] ) {
            return
        }

        var topicIndex = 0,
            topics = topic.split( /\s/ ),
            topicLength = topics.length,
            added
        for ( ; topicIndex < topicLength; topicIndex++ ) {
            topic = topics[ topicIndex ]
            added = false
            if ( !_subscriptions[ topic ] ) {
                _subscriptions[ topic ] = []
            }

            if( !maybeUnlock ) {
                _subscriptions[topic + '[locked]'] = true
            }

            var i = _subscriptions[ topic ].length - 1,
                subscriptionInfo = {
                    callback: callback,
                    context: context,
                    priority: priority || defaultPri
                }

            for ( ; i >= 0; i-- ) {
                if ( _subscriptions[ topic ][ i ].priority <= priority ) {
                    _subscriptions[ topic ].splice( i + 1, 0, subscriptionInfo )
                    added = true
                    break
                }
            }

            if ( !added ) {
                _subscriptions[ topic ].unshift( subscriptionInfo )
            }
        }

        return callback
    },
    /**
     * 观察者 off 解除订阅事件
     * @method off
     * @param {String}                  topic
     * @param {Object|Function}         [context]       函数上下文作用域，如果参数为function 则此参数为callback参数
     * @param {Function}                callback        回调函数
     */
    off: function (topic, context, callback) {
        if ( !_.isString(topic) ) {
            throw 'off topic not string.'
        }

        if ( arguments.length === 2 ) {
            callback = context
            context = null
        }

        if ( !_subscriptions[ topic ] ) {
            return
        }

        var length = _subscriptions[ topic ].length,
            i = 0

        for ( ; i < length; i++ ) {
            if ( _.isDefined(callback) ) {
                if( _subscriptions[ topic ][ i ].callback === callback ) {
                    if ( !context || _subscriptions[ topic ][ i ].context === context ) {
                        _subscriptions[ topic ].splice( i, 1 )

                        // Adjust counter and length for removed item
                        i--
                        length--
                    }
                }
            } else {
                if ( !context || _subscriptions[ topic ][ i ].context === context ) {
                    _subscriptions[ topic ].splice( i, 1 )

                    // Adjust counter and length for removed item
                    i--
                    length--
                }
            }
        }
    },
    /**
     * 在调用方法之前执行的方法
     * @method before
     * @param  {String}   methodName  方法名称
     * @param  {Function}   callback    在方法之前执行的方法，返回false 则不执行方法
     * @param  {Object}   [context]   函数上下文
     * @param  {Number}   [priority]  优先级
     * @chainable
     */
    before: function (methodName, callback, context, priority) {
        return weave.call( this, 'before', methodName, context, callback, priority )
    },
    /**
     * 在调用方法之后执行的方法
     * @method after
     * @param  {String}   methodName  arg* 方法名称
     * @param  {Function}   callback    arg 在方法之后执行的方法，方法的参数和返回值会作为参数传入callback
     * @param  {Object}   [context]   函数上下文
     * @param  {Number}   [priority]  优先级
     * @chainable
     */
    after: function (methodName, callback, context, priority) {
        return weave.call( this, 'after', methodName, context, callback, priority )
    }
}

module.exports = event
