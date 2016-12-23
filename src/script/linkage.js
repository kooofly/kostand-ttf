var _ = require('./util')
var Page = require('./page')
/*[
 {
 element: '#a',
 url: 'xx',
 firstOption: '',
 textKey: 'text',
 valueKey: 'value',
 pIdKey: 'pId',
 defaults: ''
 },
 {
 element: '#b',
 url: 'example.json?a={a}',
 firstOption: '',
 idKey: ''
 }
 ]*/
function Linkage(option) {
    this.init(option)
}
Linkage.prototype = {
    init: function (option) {
        this.option = option
        var self = this
        _.forEach(option, function (v, i) {
            self.ready(v)
        })
        _.forEach(option, function (v, i) {
            self.render(v, i)
        })

    },
    render: function (opt, i) {
        if (i === 0) {
            if (opt.url) {
                this.renderAjaxData(opt, i)
            } else if (opt.data) {
                this.renderData(opt, i, opt.data)
            }
        }
        this.bindEvent(opt.element, i)
    },
    filterData: function (data, key, pId) {
        var result
        if (!pId) {
            result = []
        } else {
            result = []
            _.forEach(data, function (v, i) {
                v[key] == pId && result.push(v)
            })
        }
        return result
    },
    renderData: function (opt, index, data) {
        var html = this.defaultVal(opt.firstOption)
        var textKey = opt.textKey || 'text'
        var valueKey = opt.valueKey || 'value'
        var id
        var defaults = opt.defaults || $(opt.element).data('default')
        if (defaults) {
            _.forEach(data, function (v, i) {
                var text = v[textKey]
                var value = v[valueKey]
                id = v[opt.idKey]
                if (value == defaults) {
                    html += '<option value="' + value + '" data-id="' + (id || '') + '" selected>' + text + '</option>'
                } else {
                    html += '<option value="' + value + '" data-id="' + (id || '') + '">' + text + '</option>'
                }
            })
        } else {
            _.forEach(data, function (v, i) {
                id = v[opt.idKey]
                var text = v[textKey]
                var value = v[valueKey]
                html += '<option value="' + value + '" data-id="' + (id || '') + '">' + text + '</option>'
            })
        }
        $(opt.element)
            .html(html)
            .trigger('ready', [opt, index])
    },
    renderAjaxData: function (opt, index) {
        if (!opt) return
        var self = this
        var data = this.linkParser(opt.url)
        var url = this.getPathName(opt.url)
        Page.ajax({
            url: url,
            data: this.dataParser(data),
            type: 'get'
        }).done(function (res) {
            self.renderData(opt, index, res)
        })

    },
    ready: function (opt) {
        var self = this
        var pIdKey = opt.pIdKey || 'pId'
        $(opt.element).on('ready', function (e, currentOpt, index) {
            var defaults = currentOpt.defaults || $(currentOpt.element).data('default')
            if (defaults) {
                if (self.option[index + 1]) {
                    if (self.option[index + 1].url) {
                        self.renderAjaxData(self.option[index + 1], index + 1)
                    } else if (self.option[index + 1].data) {
                        self.renderData(
                            self.option[index + 1],
                            index + 1,
                            self.filterData(self.option[index + 1].data, pIdKey, $(this).val())
                        )
                    }
                }
            }
        })
    },
    defaultVal: function (firstOption) {
        var html = firstOption ? '<option value="">' + firstOption + '</option>' : ''
        return html
    },
    renderEmpty: function (opt) {
        var html = this.defaultVal(opt.firstOption)
        $(opt.element).html(html)
    },
    getPathName: function (link) {
        return link.split('?')[0]
    },
    linkParser: function (link) {
        var qa = qsArr(link)
        var result = qsToObj(qa)
        function qsArr(link) {
            var index = link.indexOf('?')
            var params = link.substr(index + 1)
            return index == -1 ? [] : params.split('&')
        }

        function qsToObj (qa) {
            var obj = {};
            for (var i = 0; i < qa.length; i++) {
                var arrTemp = qa[i].split("=");
                obj[arrTemp[0]] = arrTemp[1];
            }
            return obj
        }

        return result
    },
    dataParser: function (data) {
        var result = {}
        var id
        for (var k in data) {
            var p = data[k]
            if (/\{*\}/.test(p)) {
                id = p.replace('{', '').replace('}', '')
                var $el = $('#' + id)
                result[k] = $el.children("option:selected").attr('data-id') ? $el.children("option:selected").data('id') : $el.val()
            } else {
                result[k] = data[k]
            }
        }

        return result
    },
    bindEvent: function (element, i) {
        var self = this
        $(element).on('change', function () {
            self.renderNexts($(this), i)
        })
    },
    renderNexts: function ($el, i) {
        var self = this
        var index
        if ($el.val() === '') {
            index = i + 1
        } else {
            var nextOpt = self.option[i + 1]
            if (nextOpt) {
                if (nextOpt.url) {
                    self.renderAjaxData(nextOpt, i)
                } else if (nextOpt.data) {
                    var pIdKey = nextOpt.pIdKey || 'pId'
                    self.renderData(
                        nextOpt,
                        i,
                        self.filterData(nextOpt.data, pIdKey, $el.val())
                    )
                }
            }
            index = i + 2
        }
        for (var m = index, j = self.option.length; m < j; m++) {
            self.renderEmpty(self.option[m])
        }
    }
}

module.exports = Linkage