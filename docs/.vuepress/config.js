let  navConfig = require('./config/nav')
let  sidebarConfig =  require('./config/sidebar')
var pluginsConfig = require('./config/plugins')
module.exports={
    title:'前端小册',
    description:'记录前端的相关知识',// meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    base: '/blog/',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    head: [
        ['link', 
            { rel: 'icon', href: '/logo.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],

    // 导航栏 Logo
    logo:'/logo.png',
    // 主题设置相关
    themeConfig:{
        nav:navConfig,
        sidebar:sidebarConfig
    },
    markdown: {
        // 代码行号
        lineNumbers: true
      },
      plugins:pluginsConfig
}