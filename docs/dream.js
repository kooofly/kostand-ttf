// 区分 布局组件（layout） 和 功能组件
var Project = {
    compile: 'auto || all || pagesName || modulesName',
    options: {
        // mock 数据配置
        // 各种路径 资源路径 dist路径 后端联调mock路径
        // 基础资源配置，第三方资源配置
        // 基础资源是否合并 压缩
        // 合并方式 遵循规范 cmd amd common
        // widget资源是否合并入1个js
        // 统计
        // commit
        // doc
        // 环境配置
        // 发布 部署配置 github gitlab
        // 编码规范配置
        // 测试
        // 按需加载、延迟加载、预加载
        // 单页面应用 前端路由 因地制宜 vue react page等结合
        // 结合 bootstrap
        // AJAX 安全底层配置
        // 数据加密配置
        // TOKEN
        // 待测试备注 改动生成影响页面组件日志，生成JSON文件 通过git hook 方式生成待测试通知
    },
    pages: ['index', 'about', 'list', 'detail', '...'],
    modules: {
        framework: {
            template: 'html.html',
            modules: [
                'header',
                'nav',
                'placeholder',
                'footer'
            ]
        },
        index: {
            template: 'index.html',
            combine: 'framework.placeholder',
            modules: [
                [{widget: 'panel.default._1', grid: 'auto'}, {widget: 'panel.default._2', grid: 'auto'}],
                [{widget: 'panel.danger._3'}]
            ],
            beforeModulesRender: function (modules) {

            },
            afterModulesRender: function (modules) {

            }
        },
        'panel.default': {
            options: {
                theme: 'default'
            },
            modules: []
        },
        'panel._1': {
            options: {
                title: 'xxxx',
                wrapper: '',
                className: '',
            },
            modules: [
                ['table._1', 'table._2'],
                ['link._1', 'button._2']
            ]
        },
        'panel._2': {
            options: {},
            modules: [
                'text._1',
                'text._2',
                ['link._1', 'button._2']
            ]
        },
        'table._1': {
            options: {}
        }
    }
}
