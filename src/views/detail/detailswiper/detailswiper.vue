<template>
  <div>
 <div class="swiper-container">
			<div class="swiper-wrapper" >
				<div class="swiper-slide picture" v-for="(item,index) in topImages" :key="index">
                    <img :src="item" alt="">
                </div>
			</div>
			<div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../assets/css/swiper.min.css'
export default {
 props:{
     topImages:{
       type:Array,
       default(){
         return []
       }
     }
  },
mounted() {
      new Swiper('.swiper-container', {
    // loop:true,
    observer:true,
		pagination: {
			el: '.swiper-pagination',
    },
		autoplay: {
			delay: 1000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
 
      })
   },
}
</script>

<style scoped>
img{
  width: 100%;
  height: 400px;
}
</style>