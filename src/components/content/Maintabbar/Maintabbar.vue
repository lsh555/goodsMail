<template>
  <tabBar>
      <tabBaritem path ='/home'> <!---activeColor动态绑定颜色---->
     <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
     <div slot="item-text">首页</div>
      </tabBaritem>
      <tabBaritem path ='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
     <div slot="item-text">分类</div>
      </tabBaritem>
      <tabBaritem path ='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
     <div slot="item-text">购物车</div>
      </tabBaritem>
      <tabBaritem path ='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
     <div slot="item-text">我的</div>
      </tabBaritem>
  </tabBar>
</template>

<script>
import tabBar from '../../common/tabbar/tabBar'
import tabBaritem from '../../common/tabbar/tabBaritem'

export default {
 components:{
   tabBar,
   tabBaritem
 }
}
</script>

<style>
</style>