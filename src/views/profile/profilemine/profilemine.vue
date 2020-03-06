<template>
  <div class="verb">
    <span>给我的项目打个分吧😄</span>
    <br>
    <br>
    <van-rate
  v-model="value"
  :size="25"
  allow-half
  color="#ee0a24"
  void-icon="star"
  void-color="#eee"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5
    }
  },
methods: {
   onChange(value) {
      Toast('当前值：'+ value);
    }
},
}
</script>

<style scoped>
.verb{
  text-align: center;
  padding-top: 20px;
}
.verb span{
  font-size: 20px;
  color: brown;
}
</style>