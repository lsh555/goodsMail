<template>
  <div v-if="Object.keys(goodsinfo).length !==0" class="goods_info">
  <div class="info_desc clear_fix">
    <div class="start">
    </div>
    <div class="desc">{{goodsinfo.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="info_key">{{goodsinfo.detailImage[0].key}}</div>
  <div class="info_list">
    <img :src="item" alt="" v-for="(item,index) in goodsinfo.detailImage[0].list" :key="index">
  </div>
  </div>
</template>

<script>
export default {
  props:{
  goodsinfo:{
    type:Object,
    default(){
      return {}
    }
  }
  }
}
</script>

<style scoped>
.info_list img{
  width: 100%;

}
.info_key{
  padding: 10px 0;
  color: #ff5777
}
.desc{
   color: #ff5777
}
</style>