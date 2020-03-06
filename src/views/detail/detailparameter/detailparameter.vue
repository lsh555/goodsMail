<template>
  <div id="parameter">
    <div class="remove" @click="remove">X</div>
       <div class="type">类型:</div>
       <div v-for="(item,index) in skuInfo.skus" :key="index"
        @click="itemclick(index)"
       > 
        <div class="top" v-show="isShow ==index"><img :src="item.img" alt=""></div>
       <div class="center" :class="{active:index ===currIndex}">{{item.size}}  {{item.style}}</div>
       </div>      
         <button @click="addToCart">确定</button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
     isShow:0,
     currIndex:0
    }
  },
props:{
  skuInfo:{
    type:Object,
    default:{}
  }
},
methods: {
  itemclick(index){
    this.currIndex =index
  let that =this;
  if(that.isShow ===index){
    that.isShow =-1
  }else{
    that.isShow =index
  }
},
remove(){
  this.$parent.isShow = false
  this.$parent.istrue = false
},
   addToCart(isShow){
      this.$emit("addCart",this.isShow)
   }
}

}
</script>

<style scoped>
#parameter{
  color: black;
  text-align: center;
  width: 100%;
  background-color:#ffffff;
  height: auto;;
  position: fixed;
  bottom: 0;
  z-index: 10001;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  float: left;
}
.remove{
  font-size: 20px;
  text-align: right;
  margin-right: 10px;
}
img{
  width: 100px;
  height: 100px;
}
.top{
 
  position: absolute;
  top: 10px;
  left: 35%;
}
.center{

 padding-top: 10px;
 width: 25%;
 float: left;
}
.type{
   margin: 100px 0 20px 15px;
  text-align: left;
}
.active{
  border-radius: 10px;
  color: red;
  background: #e5e5e5;
}
button{
  color: #ffffff;
  margin: 0 auto;
  width: 100%;
  border-radius: 15px;
  font-size: 25px;
  margin-bottom: 20px;
  background: red;
  margin-top: 50px;
}
</style>