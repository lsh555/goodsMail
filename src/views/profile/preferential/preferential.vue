<template>
  <div>
     <div @click="$router.back()"><img src="../../../assets/img/左手指.jpg" alt=""></div>
    <!-- 优惠券单元格 -->
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1535290984,
  endAt: 11514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}
const coupona = {
  available: 1,
  condition: '无使用门槛\n最多优惠24元',
  reason: '',
  value: 200,
  name: '优惠券名称',
  startAt: 21489104000,
  endAt: 21514592000,
  valueDesc: '2.5',
  unitDesc: '元'
}
const couponb = {
  available: 1,
  condition: '无使用门槛\n最多优惠36元',
  reason: '',
  value: 300,
  name: '优惠券名称',
  startAt: 31489104000,
  endAt: 31514592000,
  valueDesc: '3.5',
  unitDesc: '元'
}
const couponc = {
  available: 1,
  condition: '无使用门槛\n最多优惠48元',
  reason: '',
  value: 400,
  name: '优惠券名称',
  startAt: 41489104000,
  endAt: 41514592000,
  valueDesc: '4.5',
  unitDesc: '元'
}
const coupond = {
  available: 1,
  condition: '无使用门槛\n最多优惠60元',
  reason: '',
  value: 500,
  name: '优惠券名称',
  startAt: 51489104000,
  endAt: 51514592000,
  valueDesc: '5.5',
  unitDesc: '元'
}
export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon,coupona,couponb,couponc,coupond],
      disabledCoupons: [coupon],
      showList:[]
    }
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
</script>

<style scoped>
img{
  width: 50px;
  height: 30px;
}
</style>