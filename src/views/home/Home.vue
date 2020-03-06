<template>
  <div id="home">
    <city class="city" v-if="isShow"></city>
    <navBar class="home-nav">
    <div slot="left" @click="shows">{{$store.state.city.nm}}</div>
    <div slot="center">整条该最靓的gai</div>
    <div slot="right" @click="trues">🔍</div>
    </navBar>
    <search class="search" v-if="isTrue"></search>
      <swiper :banners="banners"></swiper>
    <recommend :recommend="recommend"></recommend>
    <img src="../../assets/img/timg.jpg" alt="" id="pic">
    <tabcontrol :titles="['流行','新款','精选']"
    @tabclick="tabclick" class="tab_con"></tabcontrol>
    <goods :goods="showgoods"></goods>
   <backtop></backtop>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import city from 'components/content/city/city'
import search from 'components/content/search/search'
import MainTabBar from 'components/content/Maintabbar/Maintabbar'
import navBar from 'components/common/navbar/navBar'
import {getHomeMuitidata,getHomeGoods} from 'network/home'
import swiper from 'components/common/swiper/swiper'
import recommend from './recommend/recommend'
import tabcontrol from 'components/content/Tabcontrol/tabcontrol'
import goods from 'components/content/goods/Goods'
import backtop from 'components/content/backTop/backtop'
export default {
components:{
  navBar,swiper,recommend,tabcontrol,goods,backtop,MainTabBar,city,search
},
data() {
  return {
    banners:[],
    recommend:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    },
    isScroll:true,
    currentType:'pop',
    isShow:false,
    isTrue:false
  
  }
},
created() {
  //请求多个数据
  this.getHomeMuitidatas()
  //请求商品数据
  this.getHomeGoodss('pop')
  this.getHomeGoodss('new')
  this.getHomeGoodss('sell')
},
 mounted() {
     window.addEventListener('scroll', this.menu)
  },
methods: {
  trues(){
    this.isTrue =!this.isTrue
  },
   shows(){
    this.isShow =true
  },
   menu() {
           if(this.isScroll){
                    let scroll =
                    this.getScrollTop() + this.getWindowHeight() - this.getScrollHeight();
                    if (scroll > -600) {    //600：距离底部多少像素开始触发
                        this.getHomeGoodss(this.currentType)                   
                    }
                }
                },
                //滚动条在Y轴上的滚动距离
                getScrollTop() {
                    var documentScrollTop = 0;
                    documentScrollTop = document.documentElement.scrollTop;
                    return documentScrollTop;
                },
                //文档的总高度
                getScrollHeight() {
                    var documentScrollHeight = 0;
                    documentScrollHeight = document.documentElement.scrollHeight;
                    return documentScrollHeight;
                },
                //浏览器视口的高度
                getWindowHeight() {
                    var windowHeight = 0;
                    windowHeight = document.documentElement.clientHeight;
                    return windowHeight;
                },
  tabclick(index){
  switch(index){ 
      case 0:
      this.currentType ='pop'
      break
      case 1:
      this.currentType ='new'
      break
      case 2:
      this.currentType ='sell'
      break
  }
  },
  getHomeMuitidatas(){
  getHomeMuitidata().then(res =>{
   this.banners =res.data.banner.list
    this.recommend =res.data.recommend.list
  })
  },
  getHomeGoodss(type){
    const page = this.goods[type].page +1
   getHomeGoods(type,page).then(res =>{
    this.goods[type].list.push(...res.data.list)
    this.goods[type].page +=1
  })
  },
},
computed: {
  showgoods(){
    return this.goods[this.currentType].list
  }
},
}
</script>

<style>
.home-nav{
  background-color: #ff5777;
  color: white;
}
#pic{
  width: 100%;
  height: 250px;
}
.tab_con{
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff
}
.content{
  height: 300px;
}
#big{
  width: 100px;
  height: 100px;
}
.right{
  font-size: 20px;
  padding-top: 3px;
}
.search{
  width: 100%;
  z-index: 1000;
  position: absolute;
  height: auto;
  background: #fff;
}
</style>