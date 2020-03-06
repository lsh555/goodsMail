<template>
  <div class="check_button" :class="{check:isChecked}">
  <img src="~assets/img/选中.jpg" alt="">
  </div>
</template>

<script>
export default {
 props:{
   isChecked:{
     type:Boolean,
     default:false

     
   }
 }
}
</script>

<style scoped>
.check_button{
  border-radius: 50%;
  border: 2px solid #aaa
}
.check{
  border-color: red;
 color: red;
}
.check_button img{
  width: 20px;
  height: 20px;
}
</style>