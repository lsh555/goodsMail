<template>
  <div class="recommend">
   <div v-for="(item,index) in recommend" :key="index" class="items">
   <a :href="item.link">
     <img :src="item.image" alt="">
     <div class="word">{{item.title}}</div>
   </a>
   </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
    type:Array,
    default(){
      return []
    }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eeeeee
}
.items{
  flex: 1   /* 均等分 */
}
.items img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.word{
  font-size: 15px;
  color: black
}
a{
  text-decoration: none
}
</style>