<template>
  <div class="tabcontent">
   <div v-for="(item,index) in subData" :key="index" class="list">
     <a :href="item.link">
       <img v-lazy="item.image" alt="">
       <div class="title">{{item.title}}</div>
     </a>
   </div>
  </div>
</template>

<script>
export default {
   props:{
     subData:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data() {
     return {
        getSubcategories:[]
     }
   },
}
</script>

<style scoped>
.tabcontent{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: flex-start;
}
.list{
  width: 20%;
  padding: 10px 5px;
}
.list img{
  width: 50px;
  height: 50px;
}
.title{
  margin-top: 6px;
}
a{
  text-decoration: none;
  color: black;
}
</style>