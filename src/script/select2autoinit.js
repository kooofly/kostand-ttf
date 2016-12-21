$(function () {
    var $els = $('[data-role="select2"]')
    if ($els.length && typeof $els.select2 === 'function') {
        $('[data-role="select2"]').select2({
            minimumResultsForSearch: Infinity,
            templateResult: function (state, i) {
                var $state;
                if (!state.id) { return state.text; }
                if (state.element.index % 2) {
                    $state = $('<span class="even">' + state.text + '</span>');
                } else {
                    $state = $('<span class="odd">' + state.text + '</span>');
                }
                return $state;
            }
        })
    }
})