<template>
<div class="cart">
  <MainTabBar></MainTabBar>
<Navbar class="navbar">
  <div slot="center">购物车({{cartLength}})</div>
</Navbar>
<cartlist></cartlist>
<cartbottombar></cartbottombar>
</div>
</template>

<script>
import Navbar from 'components/common/navbar/navBar'
import MainTabBar from 'components/content/Maintabbar/Maintabbar'
import cartlist from './cartlist/cartlist'
import cartbottombar from './cartbottombar/cartbottonbar'
import { mapGetters } from 'vuex'
export default {
components:{
  Navbar,cartlist,MainTabBar,cartbottombar
},
computed: {
  //  cartLength(){
//    return this.$store.state.cartLength,下面是简写
//  }
   ...mapGetters([  
      'cartLength'
 ])

},
}
</script>

<style scoped>
.navbar{
  background-color: #ff5777;
  color: #fff;
}

</style>