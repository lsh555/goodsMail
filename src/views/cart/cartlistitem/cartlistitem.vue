<template>
  <div id="shop_item">
  <div class="item_selector">
    <CheckButton :isChecked ='itemInfo.checked' @click.native="checkClick"></CheckButton>
  </div>
  <div class="item_img">
    <img :src="itemInfo.image" alt="">
  </div>
  <div class="item_info">
    <div class="item_title">{{itemInfo.title}}</div>
    <div class="item_desc">{{itemInfo.desc}}</div>
    <div class="item_size">{{itemInfo.sizeKey}}:{{itemInfo.size}}</div>
    <div class="item_cloth">衣服:{{itemInfo.style}}<div class="remove" @click="remove(itemInfo.iid)">删除</div></div>
    <div class="info_bottom">
      <div class="item_price left">¥{{itemInfo.price}}</div>
       <div class="add_nadd">
       <button @click="nadd" :disabled ="itemInfo.count<=1">-</button>
       <button @click="add">+</button></div>
      <div class="item_count right">X{{itemInfo.count}}</div>
     
    </div>
  </div>
  </div>
</template>

<script>

import CheckButton from '../../../components/content/checkButton/checkButton'
export default {
props:{
  itemInfo:{
    type:Object,
    default(){
      return {}
    }
  },
},
components:{
  CheckButton
},
methods: {
   add(){
    this.itemInfo.count++
  },
  nadd(){
this.itemInfo.count--
  },
  checkClick(){
    this.itemInfo.checked =!this.itemInfo.checked
  },
remove(iid){
   this.$store.state.cartList.some((item,i)=>{
        if(item.iid ==iid){
          this.$store.state.cartList.splice(i,1)
          return true
        }
       }) 
}
}

}
</script>

<style scoped>
.info_bottom .item_price{
  color: orangered
} 
.item_price{
  padding-top: 5px;
}
.info_bottom{
  display: flex;
}
.item_info .item_desc{
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
.item_info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item_img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item_img{
  padding: 5px
}
.item_title, .item_desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.item_selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center
}
#shop_item{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc
}
.item_size{
  padding-top: 5px;
}
.item_cloth{
  justify-content: space-between;
  display: flex;
  padding-top: 2px;
}
.remove{
  border-radius: 5px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background-color: black;
}
.item_count{
text-align: center;
}
.add_nadd button{
  margin-top: 2px;
  background: red;
  color: #ffffff;
}
.add_nadd{
  display: flex;
  margin-left: 60px;
}
</style>