/* bootstrap */
// 解决 IE8 HTMLElement 未定义问题
window.HTMLElement = window.HTMLElement || window.Element

 require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js')
/*require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js')
 require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js')
 require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js')
 require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js')

 require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js')

 */
/*require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js')
require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js')
require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js')*/
require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js')
require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js')
require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js')




require('./node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js')

/*window.Handlebars = require('./node_modules/handlebars/dist/handlebars.js')
require("./assets/handlebars.extend.js")*/

/*require("./node_modules/jquery-validation/dist/jquery.validate.js")
require("./src/script/validate.extend.js")*/
/*
$.plugs = {}
window.bootbox = require("bootbox")
bootbox.addLocale('zh_CN', {
    OK      : "确定",
    CANCEL  : "取消",
    CONFIRM : "确认"
})
bootbox.setDefaults('locale','zh_CN')

require("./assets/modals")
require("./assets/util")

require("./assets/app")
require("./assets/layout")

require("./assets/form")
require("./assets/search")
require("./assets/searchSystem")
require("./assets/status")
require("./assets/pagination")
require("./assets/linkage")
require("./assets/zclip")
require("./assets/dialogselector")*/

require("./src/script/checkall")
var Page = require('./src/script/page')
var Form = require('./src/script/form')

window.Page = Page
window.Form = Form
/*window.layer = require('./src/modules/layer/layer')*/
/*require('./src/modules/select2-4.0.3/js/select2')*/

require('./src/css/theme.scss')

