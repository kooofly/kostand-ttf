(function () {

    var Page = require('./page')
    /*[
        {
            element: '#a',
            url: 'xx',
            firstOption: '',
            textKey: 'text',
            valueKey: 'value',
            default: ''
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
            option.forEach(function (v, i) {
                self.render(v, i)
                self.ready(v)
            })
        },
        render: function (opt, i) {
            if (i === 0) {
                this.renderAjaxData(opt, i)
            }
            this.bindEvent(opt.element, i)
        },

        renderAjaxData: function (opt, index) {
            if (!opt) return
            var data = this.linkParser(opt.url)
            var url = this.getPathName(opt.url)
            var html = this.defaultVal(opt.firstOption)

            Page.ajax({
                url: url,
                data: this.dataParser(data),
                type: 'get'
            }).done(function (res) {
                var data = res.result
                var textKey = opt.textKey || 'text'
                var valueKey = opt.valueKey || 'value'
                var id
                var defaults = opt.default || $(opt.element).data('default')
                if (defaults) {
                    data.forEach(function (v, i) {
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

                    data.forEach(function (v, i) {
                        id = v[opt.idKey]
                        var text = v[textKey]
                        var value = v[valueKey]
                        html += '<option value="' + value + '" data-id="' + (id || '') + '">' + text + '</option>'
                    })
                }
                $(opt.element)
                    .html(html)
                    .trigger('ready', [opt, index])
            })

        },
        ready: function (opt) {
            var self = this
            $(opt.element).on('ready', function (e, currentOpt, index) {
                var defaults = currentOpt.default || $(currentOpt.element).data('default')
                if (defaults) {
                    self.renderAjaxData(self.option[index + 1], index + 1)
                }
            })
        },
        defaultVal: function (firstOption) {
            var html = firstOption ? '<option value="">' + firstOption + '</option>' : '<option value="">请选择</option>'
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
                    self.renderAjaxData(nextOpt, i)
                }
                index = i + 2
            }
            for (var m = index, j = self.option.length; m < j; m++) {
                self.renderEmpty(self.option[m])
            }
        }
    }

    $.plugs.Linkage = Linkage
})()