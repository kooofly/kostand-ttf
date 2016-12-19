/*
 options
    element
    url
    type
    key
    controls
    isValid
 Events
    request
    response
    valid
    submit
    AOP
        before
            submit
            valid
        after
            submit
 */
var event = require('./event')
var Page = require('./page')
function Form (options) {
    this.options = $.extend({
        url: options.url,
        key: 'name',
        type: 'post',
        element: options.element
    }, options)
    this.init()
}
Form.prototype = $.extend({}, event, {
    init: function () {
        this._initElement()
        this._initControls()
        this._bindEvent()
    },
    // 设置js控件
    _initControls: function () {
        this.controls = {}
        if (_.isFunction(this.options.controls)) {
            var controls = this.options.controls()
            $.extend(this.controls, _.isObject(controls) ? controls : {})
        }
    },
    // 设置元素
    _initElement: function () {
        var $el = $(this.options.element)
        if ($el.is('form')) {
            this.$form = $el
            this.$action = this.options.action ? $(this.options.action) : this.$form.find('[data-role=submit]')
        } else {
            this.$form = $el.parents('form')
            this.$action = $el
        }

    },
    // 绑定提交事件
    _bindEvent: function () {
        this.$action.on('click', this, $.proxy(this, 'submit'))
    },
    response: function () {
        return this.responseData
    },
    // 设置或者获取request数据
    request: function (key, value) {
        if (key && typeof value === 'undefined') {
            if (typeof key === 'object') {
                var o = key
                for (var k in o) {
                    this.setRequest(k, o[k])
                }
            } else {
                return this.getRequest(key)
            }

        } else if (key && value) {
            this.setRequest(key, value)
            return this
        } else if(!key) {
            return this.getAllData()
        }
    },
    _getType: function ($item) {
        var result
        var type = $item.attr('type')
        if (type) {
            result = type
        } else {
            type = $item[0].type
            if (type === 'select-one') {
                result = 'select'
            } else {
                result = type
            }
        }
        return result
    },
    // 设置提交参数
    setRequest: function () {
        var self = this
        var modelKey = this.options.key
        var elements = {}
        var type
        this.$form.find('[' + modelKey + '=' + name + ']').each(function (i, v) {
            var $item = $(v)
            if (self._getType($item) === 'radio') {
                // radio
                if($item.val() == value) {
                    $item.prop('checked', true)
                }
            } else if (self._getType($item) === 'checkbox') {
                type = 'checkbox'
                // checkbox
                var checkVal = $item.val()
                $item.prop('checked', false)
                elements[checkVal] = $item
            } else if (self._getType($item) === 'select') {
                $item.children('option').each(function (i ,v) {
                    if(v.value == value) {
                        v.selected = true
                    }
                })
            } else if (self._getType($item) === 'textarea') {
                $item.html(value)
            } else {
                // text select
                $item.val(value)
            }
        })

        if (type === 'checkbox') {
            if (_.isArray(value)) {
                for (var m = 0, l = value.length; m < l; m++) {
                    elements [ value[m] ] && elements [ value[m] ].prop('checked', true)
                }
            } else {
                elements [ value ] && elements[value].prop('checked', true)
            }
        }
    },
    // 获取提交参数
    getRequest: function (key) {
        var modelKey = this.options.key
        var $target = this.$form.find('[' + modelKey +'=' + key +']')
        return this.getSingleData($target)
    },
    // 获取所有数据
    getAllData: function () {
        var self = this
        var modelKey = this.options.key
        var result = {}

        var $form = this.$form
        this.$form.find('[' + modelKey + ']').each(function (i ,v) {
            var nameSpace
            var $item = $(v)
            var name = $item.attr(modelKey)
            var val = $.trim($item.val())
            var tempObj = {}
            if (name === '') {
                return
            }
            // radio
            if (self._getType($item) === 'radio') {
                val = '';
                $form.find('input[' + modelKey + '=' + name + ']').each(function(i, v) {
                    if($(v).is(':checked')) {
                        val = $(v).val()
                    }
                })
            }
            // checkbox
            if (self._getType($item) === 'checkbox') {
                val = []
                $form.find('input[' + modelKey + '=' + name + ']:checked').each(function(i, v) {
                    if ($(this).data('single')) {
                        val = $(v).val()
                    } else {
                        val.push($(v).val());
                    }
                })
                // val = typeof val === 'string' ? val : JSON.stringify(val)
            }
            // 构建参数
            if (name.match(/\./)) {
                tempArr = name.split('.');
                nameSpace = tempArr[0];
                tempObj[ tempArr[1] ] = val;
                if (!result[ nameSpace ]) {
                    result[ nameSpace ] = tempObj;
                } else {
                    result[ nameSpace ] = $.extend({}, result[ nameSpace ], tempObj);
                }
            } else {
                result[name] = val;
            }
        })
        _.forIn(this.controls, function (v, k) {
            result[k] = v.val()
        })
        return result
    },
    // 获取单个数据
    getSingleData: function ($item) {
        var modelKey = this.options.key
        var name = $item.attr(modelKey)
        var val = $.trim($item.val())

        if (name === '') {
            return
        }
        // radio
        if (this._getType($item) === 'radio') {
            val = '';
            $item.each(function(i, v) {
                if($(v).is(':checked')) {
                    val = $(v).val()
                }
            })
        }
        // checkbox
        if (this._getType($item) === 'checkbox') {
            val = []
            $item.each(function(i, v) {
                if($(v).is(':checked')) {
                    val.push($(v).val());
                }
            })
            // val = val.join(',')
        }
        // textarea
        if (this._getType($item) === 'textarea') {
            val = $item.html()
        }
        return val
    },
    // 验证 基于 jquery.validate
    valid: function () {
        var options = {
            onkeyup: false,
            onfocusin: false,
            /*onsubmit: true,
             onfocusout: false,
             onfocusin: false,
             onkeyup: false,*/
            ignore: '.ignore',

        };

        var def = $.Deferred();
        var $form = this.$form;
        if ($form.length) {
            $form.validate(options);
            $form.valid() ? def.resolve($form) : def.reject($form);
        } else {
            def.resolve('no form')
        }
        return def;
    },
    // 提交
    submit: function (options) {
        var self
        var e
        if (options && options.target) {
            e = options
            e.preventDefault()
            self = e.data
        } else {
            self = this
        }
        if (this.options.type === 'form') {
            self.formSubmit()
        } else {
            return self.ajax({
                url: self.$action.data('action') || self.options.url || self.$form.attr('action'),
                type: self.options.type,
                data: self.request()
            })
        }
    },
    // form提交
    formSubmit: function () {
        if (this.options.isValid) {
            return this.valid().then(function () {
                return this.$form[0].submit()
            })
        } else {
            return this.$form[0].submit()
        }
    },
    // 异步提交
    ajax: function (ajaxOptions) {
        var self = this
        if (self.options.isValid) {
            return this.valid().then(function () {
                return Page.ajax(ajaxOptions)
            }).then(function (res) {
                self.emit('submit', res)
                return res
            })
        } else {
            return Page.ajax(ajaxOptions).then(function (res) {
                self.responseData =  res
                self.emit('submit', res)
                return res
            })
        }

    }
})

module.exports = Form