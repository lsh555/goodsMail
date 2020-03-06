<template>
  <div>
     <div class="swiper-container">
			<div class="swiper-wrapper" >
 
				<div class="swiper-slide picture"><img src="../../../assets/img/tb1.jpg"></div>
        	<div class="swiper-slide picture"><img src="../../../assets/img/tb2.jpg"></div>
          	<div class="swiper-slide picture"><img src="../../../assets/img/tb3.jpg"></div>
            	<div class="swiper-slide picture"><img src="../../../assets/img/tb4.jpg"></div>
			</div>
			<div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../assets/css/swiper.min.css'
export default {
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
.picture{
  margin-top: 20px;
  height: 150px;
}
.picture img{
  width: 100%;
  height: 100%;
}
</style>