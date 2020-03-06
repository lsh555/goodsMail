<template>
  <div>
       <navBar>
         <div slot="left" class="left" @click="leftclick">
           <img src='~assets/img/左手指.jpg' alt="">
         </div>
         <div slot="center" class="title">
         <div v-for="(item,index) in titles" 
         :class="{active:index ===currentIndex}"
         @click="titieClick(index)"
         :key="index" class="titles_item">
       {{item}}
         </div>
         </div></navBar>
  </div>
</template>

<script>

import navBar from 'components/common/navbar/navBar'
export default {
  components:{
    navBar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    titieClick(index){
      this.currentIndex =index
      this.$emit('titleclick',index)
    },
    leftclick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 18px
}
.titles_item{
  flex: 1
}
.active{
  color: #ff5777
}
.left img{
  width: 40px;
  height: 20px;
}
</style>