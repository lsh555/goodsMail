<template>
  <div id="profilebottom">
    <div><van-icon name="chat-o" info="99+" /><p>待付款</p></div>
      <div> <van-icon name="chat-o" info="99+" /><p>待发货</p></div>
      <div> <van-icon name="chat-o" info="99+" /><p>待收货</p></div>
      <div> <van-icon name="chat-o" info="99+" /><p>评价</p></div>
      <div> <van-icon name="chat-o" info="99+" /><p>退款/售后</p></div>
         
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#profilebottom{
  margin-top: 30px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
p{
  padding-top: 5px;
}
</style>