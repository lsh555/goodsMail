<template>
  <div class="bottom_bar">
    <div class="checkcon">
    <CheckButton class="checkbtn" :isChecked="isSelectall" @click.native="checkclick"></CheckButton>
    <span>全选</span>
    </div>
    <div class="price">
      合计:&ensp;{{totalPrice.toFixed(2)}}
    </div>
    <div class="computed" @click="calcClick">
       去付款:&ensp;{{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/checkButton'
export default {
 components:{
   CheckButton
 },
 computed: {
   totalPrice(){
     return this.$store.state.cartList.filter(item =>{
       return item.checked
     }).reduce((pre,item)=>{
       return item.price * item.count +pre
     },0)
   },
   checkLength(){
     return this.$store.state.cartList.filter(item=>item.checked).length
   },
   isSelectall(){
     if(this.$store.state.cartList.length ===0) return false
     return !this.$store.state.cartList.find(item =>!item.checked)
   }
 },
 methods: {
   checkclick(){
     if(this.isSelectall){
       this.$store.state.cartList.forEach(item=>item.checked =false)
     }else{
       this.$store.state.cartList.forEach(item=>item.checked =true)
     }
   },
 calcClick(){
   if(!this.isSelectall){
     this.$toast.show('请选择购买的商品',1000)
   }else{
     this.$toast.show('自己多穷没点B数?',1000)
   }
 }
}
 }
</script>

<style scoped>
.bottom_bar{
  height: 50px;
  position: relative;
  background: #eee;
  line-height: 40px;
  display: flex;
  top: 60px;
  justify-content: space-between;
}
.checkcon{
display: flex;
align-items: center;
margin-left: 15px;
}
.checkbtn{
  width: 20px;
  height: 20px;
  line-height: 15px;
  margin-right: 5px;
}
.price{
  margin-top: 5px;
  width: 110px;
  height: 100%;
  font-size: 18px;
  color: crimson;
}
.computed{
  line-height: 50px;
  width: 80px;
  height: 100%;;
  background: red;
  color: #ffffff;
  font-size: 18px;
}
</style>