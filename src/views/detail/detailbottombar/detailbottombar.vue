<template>
  <div class="bottom_bar">
<div class="bar_item bar_left">
<div>

<span class="text">客服</span>
  </div>
<div>

  <span class="text">店铺</span>
</div>
<div>

  <span class="text">收藏</span>
</div>
  </div>
  <div class="bar_item bar_right">
    <div class="cart" @click="shows">加入购物车</div>
     
    <div class="buy">购买</div>
  </div>
  </div>
</template>

<script>
export default {
 methods: {
 
  shows(){
   this.$parent.isShow =true;
   this.$parent.istrue = true;
  }
 },


}
</script>

<style scoped>
.bottom_bar{
  height: 49px;
  background: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
.bar_right .buy{
  background-color: #f69
}
.bar_right .cart{
  background: #ffe817;
  color: #333
}
.bar_right{
  font-size: 17px;
  color: #fff;
  line-height: 58px;
}
.bar_left {
  background-position: 0 -98px;
}
.bar_left {
  background-position: 0 -54px;
}
.bar_left{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
}
.bar_left .text{
  font-size: 18px;
  line-height: 49px;
  color: #f69
}
.bar_item>div{
  flex: 1
}
.bar_item{
  flex: 1;
  display: flex
}

</style>