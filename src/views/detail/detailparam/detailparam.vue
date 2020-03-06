<template>
  <div class="param_info" v-if="Object.keys(paramInfo).length !==0">
   <table v-for="(table,index) in paramInfo.sizes" class="info_size" :key="index">
 <tr v-for="(tr,indey) in table" :key="indey">
   <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
 </tr>
   </table>
   <table class="info_param">
  <tr v-for="(info,index) in paramInfo.infos" :key="index">
    <td class="info_param_key">{{info.key}}</td>
    <td class="param_value">{{info.value}}</td>
  </tr>
   </table>
   <div class="info_img" v-if="paramInfo.image.length !==0">
     <img :src="paramInfo.image" alt="">
   </div>
  </div>
</template>

<script>
export default {
props:{
  paramInfo:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
.param_info{
  padding: 20px 15px 10px 15px;
  font-size: 17px;
  border-bottom: 2px solid #f2f5f8
}
.param_info table{
  width: 100%;
  border-collapse: collapse
}
.param_info table tr{
  height: 42px;
}
.param_info table tr td{
  border-bottom: 1px solid rgba(100, 100, 100, .2)
}
.info_param_key{
  /* 当value的数据量比较大时候，会挤到key,所以给一个宽 */
  width: 95px;
}
.info_param{
  border-top: 1px solid rgba(0, 0, 0, .1)
}
.param_value{
  color: #eb4868
}
.info_img img{
  width: 100%
}
</style>