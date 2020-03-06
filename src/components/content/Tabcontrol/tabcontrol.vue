<template>
  <div class="tabcontrol">
<div v-for="(item,index) in titles" :key="index" class="tabcontrol_item"
:class="{active:index ===currentIndex}" @click="itemclick(index)">
  <span>{{item}}</span>
</div>
  </div>
</template>

<script>
export default {
 props:{
   titles:{
     type:Array,
     default(){
       return []
     }
   }
 },
 data() {
   return {
     currentIndex:0
   }
 },
methods: {
  itemclick(index){
  this.currentIndex =index;
  this.$emit('tabclick',index)
  }
},
}
</script>

<style>
.tabcontrol{
  display: flex;
  text-align: center
}
.tabcontrol_item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabcontrol_item span{
  font-size: 18px;
  padding: 5px;
}
.active{
  color: #ff5777;
  
}
.active span{
border-bottom: 3px solid #ff5777;
}
</style>