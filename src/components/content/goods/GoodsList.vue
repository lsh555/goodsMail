<template>
  <div class="goods_item" @click="itemClick">
    <img v-lazy="showImg" alt="">
 <div class="goods_info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div> 
  </div>
</template>

<script>
export default {
 props:{
   goodsitem:{
     type:Object,
     default(){
       return {}
     }
   }
 },

 methods: {
   itemClick(){
   this.$router.push('/detail/'+this.goodsitem.iid)
   },
 },
 computed: {
    showImg(){
      return this.goodsitem.image||this.goodsitem.img||this.goodsitem.show.img
    }
 },
}
</script>

<style scoped>

.goods_item{
  padding-bottom: 20px;
  position: relative;
  width: 48%;
} 
 .goods_item img{
  width: 100%;
  height: 250px;
  border-radius: 5px
} 
 .goods_info{
  padding-top: 10px;
  font-size: 15px;
  overflow: hidden;
  text-align: center
}
.goods_info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px
}
.goods_info .price{
  color: #ff5777;
  margin-right: 20px
}
.goods_info .collect{
  position: relative;
}
.goods_info .collect::before{
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('../../../assets/img/收藏.jpg') 0 0/14px 14px;
}  
</style>