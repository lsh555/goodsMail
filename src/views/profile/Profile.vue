<template>
<div>
   <navBar class="profile-nav"><div slot="center">我的资料</div></navBar>
  <MainTabBar></MainTabBar>
  <profiletop></profiletop>
  <profilebottom></profilebottom>
  <profileswiper></profileswiper>
  <profilemine></profilemine>
</div>

</template>

<script>
import MainTabBar from 'components/content/Maintabbar/Maintabbar'
import navBar from 'components/common/navbar/navBar'
import profiletop from './profiletop/profiletop'
import profilebottom from './profilebottom/profilebottom'
import profileswiper from './profileswiper/profileswiper'
import profilemine from './profilemine/profilemine'
export default {
components:{
  MainTabBar,navBar,profiletop,profilebottom,profileswiper,profilemine
},
data() {
  return {
  }
},
methods: {
  
},
}
</script>

<style scoped>
.profile-nav{
  background-color: #ff5777;
  color: white;
}

</style>