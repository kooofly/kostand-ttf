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