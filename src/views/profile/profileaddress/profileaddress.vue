<template>
  <div>
  <div @click="$router.back()"><img src="../../../assets/img/左手指.jpg" alt=""></div>
   <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
/>
  </div>
</template>

<script>
import { Toast } from 'vant';
import areaList from '../../../assets/js/area'
export default {
data() {
  return {
     areaList,
     searchResult: []
  }
  },
  methods: {
     onSave() {
      Toast('开了挂吧这么强');
    },
    onDelete() {
      Toast('含泪删除');
    },

  },
}
</script>

<style scoped>
img{
  width: 50px;
  height: 30px;
}
</style>