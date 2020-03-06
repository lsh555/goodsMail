<template>
  <div class="tab_menu">
   <ul class="ul_item">
   <li v-for="(item,index) in categories" 
   :key="index"
   class="li_item"
   :class="{active:currentIndex===index}"
   @click="menuclick(index)"
   >{{item.title}}</li>
   </ul>
  </div>
</template>

<script>
export default {
props:{
  categories:{
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
  menuclick(index){
    this.currentIndex =index
    this.$emit('menuclick',index)
  }
},
}
</script>

<style scoped>
.ul_item{
  text-align: center;
  color: #333;
  font-size: 18px;
}
.li_item{
  background: #eee;
  height: 60px;
  width: 100px;
  line-height: 60px;
}
.active{
  background: #fff;
  font-weight: 700;
  color: #ff5777;
}
</style>