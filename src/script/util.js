var toString = Object.prototype.toString
var slice = [].slice
var hasOwn = Object.prototype.hasOwnProperty
/**
 * Detect the JScript [[DontEnum]] bug:
 * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
 * made non-enumerable as well.
 * https://github.com/bestiejs/lodash/blob/7520066fc916e205ef84cb97fbfe630d7c154158/lodash.js#L134-L144
 */
/** Detect if own properties are iterated after inherited properties (IE < 9) */
var iteratesOwnLast
(function() {
    var props = []
    function Ctor() { this.x = 1 }
    Ctor.prototype = { 'valueOf': 1, 'y': 1 }
    for ( var prop in new Ctor() ) { props.push( prop ) }
    iteratesOwnLast = props[0] !== 'x'
}());

module.exports = {
    toString: toString,
    slice: slice,
    isUndefined: function(value) { return typeof value === 'undefined' },
    isDefined: function(value) { return typeof value !== 'undefined' },
    isObject: function(value) { return toString.call( value ) === "[object Object]" },
    isString: function(value) { return typeof value === 'string' },
    isNumber: function(value) { return typeof value === 'number' },
    isDate: function(value) { return toString.call(value) === '[object Date]' },
    isArray: function(value) { return toString.call(value) === '[object Array]' },
    isFunction: function(value) { return typeof value === 'function' },
    isBoolean: function(value) { return value === 'boolean' },
    isElement: function(node) {
        return !!( node &&
        ( node.nodeName  // we are a direct element
        || ( node.prop && node.attr && node.find) ) )  // we have an on and find method part of jQuery API
    },
    isWindow: function( o ) { return o != null && o == o.window },
    isPlainObject: function(o) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor
        // property. Make sure that DOM nodes and window objects don't
        // pass through, as well
        if ( !o || toString.call( o ) !== "[object Object]" ||
            o.nodeType || isWindow( o ) ) {
            return false
        }

        try {
            // Not own constructor property must be Object
            if ( o.constructor &&
                !hasOwn.call( o, "constructor" ) &&
                !hasOwn.call( o.constructor.prototype, "isPrototypeOf" ) ) {
                return false
            }
        } catch (e) {
            // IE8,9 Will throw exceptions on certain host objects #9897
            return false
        }

        var key

        // Support: IE<9
        // Handle iteration over inherited properties before own properties.
        // http://bugs.jquery.com/ticket/12199
        if ( iteratesOwnLast ) {
            for ( key in o ) {
                return hasOwn.call( o, key )
            }
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        for ( key in o ) {}

        return key === undefined || hasOwn.call( o, key )
    },
    isEmptyObject: function(o) {
        if ( !o || toString.call( o ) !== "[object Object]" ||
            o.nodeType || this.isWindow( o ) || !o.hasOwnProperty ) {
            return false
        }

        for ( var p in o ) {
            if ( o.hasOwnProperty( p ) ) return false
        }
        return true
    },
    isIncludes: function(array, value) { return this.indexOf( array, value ) != -1 },
    indexOf: function(array, value) {
        if ( array.indexOf ) return array.indexOf( obj )

        for ( var i = 0; i < array.length; i++ ) {
            if ( obj === array[i] ) return i
        }
        return -1
    },
    arrayRemove: function(array, value) {
        var index = indexOf( array, value )
        if (index >=0)
            array.splice(index, 1)
        return value
    },

    mix: function(o) {
        var i = 1,
            l = arguments.length
        for ( ; i < l; i++ ) {
            var arg = arguments[i]
            for ( var k in arg ) {
                if( arg.hasOwnProperty( k ) ){
                    // 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
                    if( k !== 'prototype' ){
                        o[k] = arg[k]
                    }
                }
            }
        }
        return o;
    },

    getMethodName: function() { return method.toString().match( /function\s+(\w+)\s*\(/i )[1] },
    sliceArgs: function(args, startIndex) { return slice.call( args, startIndex || 0 ) },
    arrayLikeToArray: function(arrayLike){
        var ret = []
        for ( var i = 0, j = arrayLike.length; i
        < j; i++ ) {
            ret.push( arrayLike[i] );
        }
        return ret;
    },
    setAttribute: function(node, name, value) {
        value == null ? node.removeAttribute(name) : node.setAttribute( name, value )
    },
    getAttribute: function(node, name){ return node.getAttribute(name) },
    querySelector: function(selector, context) {
        return !context ? document.querySelector(selector) : document.querySelector(context + ' ' + selector)
    },
    querySelectorAll: function(selector, context) {
        return !context ? document.querySelectorAll(selector) :  document.querySelectorAll(context + ' ' + selector)
    },
    forIn: function (o, callback) {
        for (var k in o) {
            callback(o[k], k)
        }
    },
    forEach: function (array, callback) {
        if (typeof Array.prototype.forEach !== "function") {
            var i, len;
            for (i = 0, len = array.length; i < len; ++i) {
                callback(array[i], i);
            }
        } else {
            array.forEach(function (v, i) {
                callback(v, i)
            })
        }
    }
}