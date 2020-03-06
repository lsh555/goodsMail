<template>
  <div id="detail">
 <Navbar class="navbar" @titleclick="titleclick"></Navbar>
 <Detailswiper :topImages="topImages" id="page0" :class="{dim:istrue}"></Detailswiper>
 <Detailinfo :goods="goods"></Detailinfo>
 <Detailshop :shop ="shop"></Detailshop>
 <Detailgoodsinfo :goodsinfo="goodsinfo"></Detailgoodsinfo>
 <Detailparam :paramInfo="paramInfo" id="page1"></Detailparam>
 <backtop></backtop>
 <detailcomment :commentInfo="commentInfo" id="page2"></detailcomment>
 <goodslist :goods="recommends" id="page3"></goodslist>
 <detailbottombar></detailbottombar>
 <detailparameter :skuInfo="skuInfo" v-if="isShow" @addCart="addToCart"></detailparameter>
  </div>
</template>

<script>
import Navbar from './navbar/navbar'
import Detailswiper from './detailswiper/detailswiper'
import Detailinfo from './detailinfo/detailinfo'
import Detailshop from './detailshop/detailshop'
import Detailgoodsinfo from './detailgoodsinfo/detailgoodsinfo'
import Detailparam from './detailparam/detailparam'
import backtop from '../../components/content/backTop/backtop'
import detailcomment from './detailcomment/detailcomment'
import detailbottombar from './detailbottombar/detailbottombar'
import detailparameter from './detailparameter/detailparameter'
import goodslist from '../../components/content/goods/Goods'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
export default {
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      goodsinfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      skuInfo:{},
      isShow:false,
      istrue:false
    }
  },
  components:{
Navbar,Detailswiper,Detailinfo,Detailshop,Detailgoodsinfo,Detailparam,backtop,detailcomment,
detailbottombar,detailparameter,goodslist


  },
created() {
  this.iid =this.$route.params.iid
  getDetail(this.iid).then(res=>{

    this.topImages =res.result.itemInfo.topImages

    this.goods =new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
    
    this.skuInfo = res.result.skuInfo
    
    this.shop =new Shop(res.result.shopInfo)

    this.goodsinfo =res.result.detailInfo
    
    this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
     
    if(res.result.rate.cRate !==0){  // 页面报错的话是因为有的没有评论
      this.commentInfo =res.result.rate.list[0]
    }

    getRecommend().then(res =>{
     this.recommends = res.data.list
    })
  })
},
methods: {
  addToCart(isShow){
    //  获取购物车需要展示的信息
    const product ={}
    product.image = this.topImages[0];
    product.title = this.goods.title
    product.desc = this.goods.desc
    product.price = this.goods.realPrice
    product.sizeKey = this.skuInfo.sizeKey
    product.size = this.skuInfo.skus[isShow].size
    product.style = this.skuInfo.skus[isShow].style
    product.iid = this.iid;
    // 添加购物车
    // dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('action方法名',值)
    // commit：同步操作，写法：this.$store.commit('mutations方法名',值)
    this.$store.dispatch('addCart',product).then(res=>{
      this.$toast.show('您已成功添加至购物车',1000)
    
    })
  },
  titleclick(index){
  var PageId = document.querySelector('#page' + index)
  window.scrollTo({
  'top': PageId.offsetTop,
  'behavior': 'smooth'
  })
},
}

}
</script>

<style scoped>
.navbar{
  position: sticky;
  top:0;
  z-index: 10;
  background: #fff
}
.dim{
  opacity:.5; 
}

</style>