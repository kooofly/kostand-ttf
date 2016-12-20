jQuery.validator.setDefaults({
    errorPlacement: function(error, element) {
        var helper = element.next('.help-block')
        if(helper.length) {
            helper.data('html', helper.html()).html(error);
        } else {
            helper = $('<div class="help-block" />')
            helper.data('html', '').html(error);
        }
        helper.insertAfter(element);
        element.parent().addClass('has-error');
    },
    success: function(label, element) {
        var helper = label.parent('.help-block');
        helper.html(helper.data('html')).parent('.has-error').removeClass('has-error');
    }
});