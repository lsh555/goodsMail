import Vue from 'vue'
import Router from 'vue-router'

const Home =() =>import('../views/home/Home')
const Profile =() =>import('../views/profile/Profile')
const Category =() =>import('../views/category/Category')
const Cart =() =>import('../views/cart/Cart')
const Detail =() =>import('../views/detail/detail')
const Profiletop =() =>import('../views/profile/profiletop/profiletop')
const Profileaddress = () =>import('../views/profile/profileaddress/profileaddress')
const Profiletel =() =>import('../views/profile/profiletel/profiletel')
const Preferential =() =>import('../views/profile/preferential/preferential')
Vue.use(Router)


 const routes=[
    {
      path: '',
      redirect:'/home',
    },
    {
      path : '/home',
      component:Home,
    },
    {
      path : '/cart',
      component:Cart,
    },
    {
      path : '/category',
      component : Category,
    },
    {
      path : '/profile',
      component :Profile,
    },
    {
      path : '/detail/:iid',
      component :Detail
    },
    {
      path: '/profiletop',
      component:Profiletop
    },
    {
      path:'/profileaddress',
      component:Profileaddress
    },
    {
      path:'/profiletel',
      component:Profiletel
    },
    {
      path:'/preferential',
      component:Preferential
    }
  ]

  const router =new Router({
    routes
  })

  export default router

