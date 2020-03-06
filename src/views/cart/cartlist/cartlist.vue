<template>
  <div class="cart_list">
 <cartListitem v-for="(item,index) in cartList" :key="index" :itemInfo="item"></cartListitem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartListitem from '../cartlistitem/cartlistitem'
export default {
 computed: {
   ...mapGetters(['cartList'])
 },
 components:{
   cartListitem
 },
}
</script>

<style scoped>

</style>