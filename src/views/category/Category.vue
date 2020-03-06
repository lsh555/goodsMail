<template>
<div class="category_wrapper">  
<navBar class="nav_bar"><div slot="center">商品类别</div></navBar>
<MainTabBar></MainTabBar>
<div class="menu_container">
<tabMenu :categories="categories"  @menuclick="menuclick" class="menu"></tabMenu>
<tabcontent :subData="getSubcategories" :currentIndex="currentIndex"></tabcontent>
</div>
<div class="control_c">
<Tabcontrol :titles="['综合','新品','销量']" @tabclick="tabclick" class="Tabcontrol"></Tabcontrol>
<goodslist :goods="CategoryGoods"></goodslist>
</div>
<backtop></backtop>
</div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import MainTabBar from 'components/content/Maintabbar/Maintabbar'
import tabMenu from './tabMenu/tabMenu'
import tabcontent from './tabcontent/tabcontent'
import Tabcontrol from '../../components/content/Tabcontrol/tabcontrol'
import goodslist from '../../components/content/goods/Goods'
import backtop from 'components/content/backTop/backtop'
import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
export default {
  components:{
    MainTabBar,navBar,tabMenu,tabcontent,Tabcontrol,goodslist,backtop
  },
  data() {
    return {
      categories: [],
      categoryData:{},
       currentIndex: -1,
        tabIndex:0,
    currentType:"pop",

    }
  },
  created() {
    getCategory().then(res=>{
      //获取分类数据
      this.categories =res.data.category.list
      //初始化每个类别的子数据
     for(let i in this.categories){
        this.categoryData[i] = {
          subcategories: {},
          categoryDetail: {
            'pop': [],
            'new': [],
            'sell': []
          }
        }
      }
      // 3.请求第一个分类数据,也就是正在流行的数据
      this._getSubcategory(0)
      this._getCategoryDetail(0,'pop')
      this._getCategoryDetail(0,'new')
      this._getCategoryDetail(0,'sell')
      
})
},
computed: {
 getSubcategories(){
     if(this.currentIndex === -1) return []
     return this.categoryData[this.currentIndex].subcategories.list
   },
   CategoryGoods(){
     if(this.currentIndex === -1) return []
     return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
   }
},
methods: {
     menuclick(index){
      this._getSubcategory(index)
      this._getCategoryDetail(index,'pop')
      this._getCategoryDetail(index,'new')
      this._getCategoryDetail(index,'sell')
    },
    tabclick(index){
      switch (index) {
        case 0: this.currentType = "pop"
          break;
        case 1: this.currentType = "new"
          break;
        case 2: this.currentType = "sell"
          break;
      }
    },
    _getSubcategory(index){
      this.currentIndex = index;
      let maitKey = this.categories[index].maitKey
      getSubcategory(maitKey).then(res=>{
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
      })
      
    },
    _getCategoryDetail(index,type){
      let miniWallkey = this.categories[index].miniWallkey
      getCategoryDetail(miniWallkey,type).then(res=>{
        this.categoryData[index].categoryDetail[type] = res;
      })
    }
}
}
</script>

<style scoped>
.nav_bar{
  
  background-color: #ff5777;
  color: white;
  z-index: 10;
}
.category_wrapper{
    color: #666;
}
.menu_container{
   display: flex;
   justify-content: flex-start;
}
.Tabcontrol{
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff
}
</style>