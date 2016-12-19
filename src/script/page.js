/*
* 暂时不需要的功能，以后可能会需要添加：
* 一系列的特性检测
* 系统、浏览器信息
* 当前可视区域宽度、高度
* 公共数据存储 cookie || localstorage
* */
var _ = require('lodash')
var event = require('./event')
function Page (options) {
    var self  = this
    this.settings = $.extend({}, Page.settings)
    this.modules = {}
    this.info = {}
    $(function () {
        self.init(options)
    })
}
// 页面初始设置选项
Page.settings = {
    getPageInfo: true
}

// 设置页面
Page.sets = function (options) {
    $.extend(this.settings, options)
}
// 获取页面信息的方法集合
Page.infoFn = {
    query: function () {
        return {}
    }
}
Page.prototype = {
    init: function (options) {
        this._initModules(options.modules)
        this._getPageInfo()
    },
    _initModules: function (modules) {
        var self = this
        _.forEach(modules, function (v, i) {
            if (_.isFunction(v)) {
                self.modules[i] = v.call(this)
            } else if (_.isObject(v)){
                _.forIn(function (v, k) {
                    self.modules[k] = v
                })
            }
        })
        Page.modules = self.modules
    },
    _getPageInfo: function () {
        var self = this
        var getPageInfo = this.settings.getPageInfo
        if (_.isBoolean(getPageInfo)) {
            if (!getPageInfo) {
                return
            }
            this._getAllPageInfo()
        } else if (_.isObject(getPageInfo)){
            _.forIn(getPageInfo, function (v, k) {
                if (v) {
                    self.info[k] = Page.infoFn[k](self)
                }
            })
        } else {
            return
        }
    },
    _getAllPageInfo: function () {
        var self = this
        _.forIn(Page.infoFn, function (v, k) {
            self.info[k] = v.call(self)
        })
    }
}
// 启动页面 页面入口方法
Page.start = function (modules) {
    return new Page({
        modules: modules
    })
}

Page.data = {}
Page.get = function (key) {
    return Page.data[key]
}
Page.on = event.on
Page.emit = event.emit
Page.set = function (key, val) {
    Page.data[key] = val
    Page.emit(key + ':change', val)
}


Page.ajax = $.ajax
module.exports = Page