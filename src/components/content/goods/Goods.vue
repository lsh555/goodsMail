<template>
  <div class="goods">
  <goodsList v-for="(item,index) in goods" :goodsitem ="item" :key="index">
  </goodsList>
  </div>
</template>

<script>
import goodsList from './GoodsList'
export default {
 props:{
   goods:{
     type:Array,
     default(){
       return []
     }
   }
 },
 components:{
   goodsList
 }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>