function mark (element, markArray) {

    /* TODO 需要展示的属性 */
    var prop = [
        'color', 'background-color', 'border-color',
        'font-size', 'font-weight',
    ]

    var ma = !markArray ? ['width', 'height', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'] : markArray
    var markSize = 20
    var temlateTopOrLeft = '<div class="komark {className}"><span class="mark--text">{value}</span><div class="mark--solid"></div><div class="mark--dotted"></div></div>'
    var temlateBottomOrRight = '<div class="komark {className}"><span class="mark--text">{value}</span><div class="mark--dotted"></div><div class="mark--solid"></div></div>'
    var markMap = {
        width: {
            position: 'top',
            callback: function ($el, value, offset) {
                $el.css({
                    left: offset.left,
                    top: offset.top - markSize,
                    width: value.width
                })
            }
        },
        height: {
            position: 'left',
            callback: function ($el, value, offset) {
                $el.css({
                    left: offset.left - markSize,
                    top: offset.top,
                    height: value.height
                })
            }
        },
        marginLeft: {
            position: 'bottom',
            callback: function ($el, value, offset) {
                var v = formatVal(value.marginLeft)
                $el.css({
                    left: offset.left - v,
                    top: offset.top + value.height,
                    width: v
                })
            }
        },
        marginRight: {
            position: 'bottom',
            callback: function ($el, value, offset) {
                var v = formatVal(value.marginRight)
                $el.css({
                    left: offset.left + value.width,
                    top: offset.top + value.height,
                    width: v
                })
            }
        },
        marginTop: {
            position: 'left',
            callback: function ($el, value, offset) {
                var v = formatVal(value.marginTop)
                $el.css({
                    left: offset.left - markSize,
                    top: offset.top - v,
                    height: v
                })
            }
        },
        marginBottom: {
            position: 'left',
            callback: function ($el, value, offset) {
                var v = formatVal(value.marginTop)
                $el.css({
                    left: offset.left - markSize,
                    top: offset.top + value.height,
                    height: v
                })
            }
        },
        paddingLeft: {
            position: 'bottom',
            callback: function ($el, value, offset) {
                var v = formatVal(value.paddingLeft)
                $el.css({
                    left: offset.left,
                    top: offset.top + value.height,
                    width: v
                })
            }
        },
        paddingRight: {
            position: 'bottom',
            callback: function ($el, value, offset) {
                var v = formatVal(value.paddingRight)
                $el.css({
                    left: offset.left + value.width - v,
                    top: offset.top + value.height,
                    width: v
                })
            }
        },
        paddingTop: {
            position: 'right',
            callback: function ($el, value, offset) {
                var v = formatVal(value.paddingTop)
                $el.css({
                    left: offset.left + value.width,
                    top: offset.top,
                    height: v
                })
            }
        },
        paddingBottom: {
            position: 'right',
            callback: function ($el, value, offset) {
                var v = formatVal(value.paddingBottom)
                $el.css({
                    left: offset.left + value.width,
                    top: offset.top + value.height - v,
                    height: v
                })
            }
        }
    }
    $(element).each(function (v, i) {
        var $this = $(this)
        var offset = $this.offset()
        var style = {
            height: $this.outerHeight(),
            width: $this.outerWidth(),
            marginLeft: $this.css('margin-left'),
            marginRight: $this.css('margin-right'),
            marginTop: $this.css('margin-top'),
            marginBottom: $this.css('margin-bottom'),
            paddingLeft: $this.css('padding-left'),
            paddingRight: $this.css('padding-right'),
            paddingTop: $this.css('padding-top'),
            paddingBottom: $this.css('padding-bottom')
        }
        console.log($(this).offset(), style)
        for (var key in markMap) {
            if (ma.indexOf(key) !== -1) {
                doMark(key, markMap[key].position, style, offset)
            }
        }
    })

    function doMark (markType, markPosition, value, offset) {
        var prex = 'mark-'
        var temp
        switch (markPosition) {
            case 'top':
                temp = template(temlateTopOrLeft, prex + markPosition, value[markType])
                break;
            case 'right':
                temp = template(temlateBottomOrRight, prex + markPosition, value[markType])
                break;
            case 'bottom':
                temp = template(temlateBottomOrRight, prex + markPosition, value[markType])
                break;
            case 'left':
                temp = template(temlateTopOrLeft, prex + markPosition, value[markType])
                break;
        }
        var $mark = $(temp)
        markMap[markType].callback($mark, value, offset)
        $('body').append($mark)
    }

    function template (template, className, value) {
        return template.replace('{className}', className).replace('{value}', formatVal(value) + 'px')
    }

    function formatVal (v) {
        return typeof v === 'string' ? +v.replace('px', '') : v
    }
}
$(function () {

    /*$(document).on('rCopy', function (e, selector) {
        var clip = new ZeroClipboard( $(selector) );
        clip.on('copy', function (e) {
            var selector = $(e.target).data('copy') || e.target
            var html = $(selector)[0].outerHTML
            var $copy = $(html)
            $copy.removeClass('_copy').removeClass('zeroclipboard-is-hover').removeAttr('data-copy')
            $copy.find('.demo-tip').remove()
            var text = $copy[0].outerHTML
            console.log('复制成功', text)
            e.clipboardData.setData("text/plain", text)
        })
    })*/
    // XX
    $('.wrap').each(function () {
        $(this).load($(this).data('url'))
    })

    

    /*{{#each this}}
    1111111111111111111 <br>
    {{detailList.length}}
    {{#each detailList}}

    {{\#if @index}}
    1 <br>
    {{else}}
    0 <br>
    {{/if}}
    {{/each}}
    111111111111111111
    {{/each}}*/
})