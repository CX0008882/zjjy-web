import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home/Home'
// import Account from '@/views/Account/Account'
// import Mystudy from '@/views/Mystudy'
// import classify from '@/views/Classify'
// import Coursedetails from '@/views/Coursedetails/Coursedetails'
// import Classifydetails from '@/views/Classifydetails'
// import Login from '@/views/Login'
// import search from '@/components/search'
// import NotFound from '@/components/NotFound'
// import setting from '@/views/Account/setting'
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
      // children:[
      //   {
      //     path: '',
      //     redirect: 'recommend'
      //   },
      //   { path: 'recommend', component: recommend, name: 'recommend' },
      //   { path: 'classic', component: classic, name: 'classic' },
      //   { path: 'major', component: major, name: 'major' },
      //   { path: 'expert', component: expert, name: 'expert' },
      // ]
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
      // children:[
      //   {
      //     path: '',
      //     redirect: 'introduce'
      //   },
      //   { path: 'introduce', component: introduce, name: 'introduce' },
      //   { path: 'catalog', component: catalog, name: 'catalog' },
      //   { path: 'comment', component:comment, name: 'comment' },
      // ]
    },
    {
      path: '/classifydetails',
      name: 'Classifydetails',
      component: resolve => require(['@/views/Classifydetails'], resolve),
      children: []
    },
    {
      path: '/home/search',
      name: 'search',
      component: resolve => require(['@/components/search'], resolve),

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
