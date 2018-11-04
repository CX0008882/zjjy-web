import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/Home/Home'], resolve),
      
    },
    {
      path: '/account',
      name: 'Account',
      component: resolve => require(['@/views/Account/Account'], resolve),
    },
    {
      path: '/mystudy',
      name: 'Mystudy',
      component: resolve => require(['@/views/Mystudy'], resolve),
    },
    {
      path: '/classify',
      name: 'Classify',
      component: resolve => require(['@/views/Classify'], resolve),
    },
    {
      path: '/home/coursedetails',
      name: 'Coursedetails',
      component: resolve => require(['@/views/Coursedetails/Coursedetails'], resolve),
    },
    {
      path: '/classifydetails',
      name: 'Classifydetails',
      component: resolve => require(['@/views/Classifydetails'], resolve),
      children: []
    },
    {
      path: '/account/login',
      name: 'login',
      component: resolve => require(['@/views/Login'], resolve),
    },
    {
      path: '/account/setting',
      component: resolve => require(['@/views/Account/setting'], resolve),
    },
    {
      path: '*',
      name: 'notfound',
      component: resolve => require(['@/components/NotFound'], resolve),
    },
    {
      path: '/course/couseInfo',
      name: 'couseInfo',
      component: resolve => require(['@/views/Active/Couserinfro'], resolve),

    },
    {
      path: '/course/couseActive',
      name: 'couseActive',
      component: resolve => require(['@/views/Active/CouseAcive'], resolve),

    },
    {
      path: '/huiben/huibeninfor',
      name: 'huibeninfor',
      component: resolve => require(['@/views/HuiBen/Huibeninfor'], resolve)

    },
    {
      path: '/PicList/picList',
      name: 'piclist',
      component: resolve => require(['@/views/PicList/picinfor'], resolve)

    },
    {
        path: '/OrderList/ordercart',
        name:'carlist',
        component: resolve =>require(['@/views/Order/Cart'],resolve)


    },
    {
        path: '/Store/MyStoreList',
        name:  'Mystore',
        component: resolve => require(['@/views/Store/MyStoreList'],resolve)
    },
    {
        path: '/Course/CourseList',
        name: 'CourseList',
        component: resolve => require(['@/views/Course/CourseList'],resolve)

    },
    {
       path: '/Course/Paike',
       name: 'paike',
       component: resolve => require(['@/views/Course/Paike'],resolve)

    },
    {

      path:'/account/yuanzhang',
      name: 'yuanzhang',
      component: resolve => require (['@/views/Account/yuanzhang'],resolve)

    },
    {
      path:'/Message/MessageList',
      name:'messagelist',
      component: resolve => require (['@/views/Message/MessageList'],resolve)


    },
    {
        
      path:'/Message/suggestions',
      name:'suggestions',
      component: resolve => require (['@/views/Message/Suggestions'],resolve)


    },
    {
       path:'/Teach/AccoutList',
       name:'AccountList',
       component: resolve => require(['@/views/Account/Teache/AccoutList'],resolve)



    }
   
  ]
})
