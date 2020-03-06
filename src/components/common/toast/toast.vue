<template>
  <div class="toast"  v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
props:{
},
data() {
  return {
    message:'',
    isShow:false
  }
},
methods: {
  show(message,duration){
    this.isShow = true;
    this.message = message

    setTimeout(()=>{
   this.isShow = false;
   this.message =''
    },duration)
  }
},
}
</script>

<style scoped>
.toast{
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  font-size: 20px;
  top: 30%;
  left: 50%;
  z-index: 1000;
  color: #ffffff;
  background: rgba(0, 0, 0, .7);
  padding: 10px;
  transform: translate(-50%,-50%)
}
</style>