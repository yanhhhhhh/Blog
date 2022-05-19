module.exports=[
  {
      title:'首页',
      path:'/',
      collapsed:false,

  },
  {
      title:'Vue',
      collapsed:false,
      children:[
        //   {
        //       title:'vue',
        //       path:'/vue/vue',
             
        //   },
        //   {
        //       title:'vue-router',
        //       path:'/vue/vue-router'
        //   },
          {
            title:'源码阅读记录',
            path:'/vue/源码阅读记录'
        }
      ]
  },
  {
    title:'JavaScript',
    collapsed:false,
    children:[
        {
            title:'Object',
            path:'/JavaScript/Object',
           
        },
        {
            title:'变量&作用域&内存',
            path:'/JavaScript/变量&作用域&内存',
           
        },
        {
            title:'小技巧',path:'/JavaScript/Tips'
        },
        
    ]
},
{
    title:'面试',
    collapsed:false,
    children:[
        {
            title:'算法',
            path:'/面试/算法',
           
        },
        {
            title:'手写系列',
            path:'/面试/手写系列', 
        },
        
    ]
}

]