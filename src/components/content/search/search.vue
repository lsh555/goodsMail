<template>
  <div>
   <van-search
  v-model="message"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键(数字,例如1,2,3,4,5...)"
/>
  <ul>
    <li v-for="(item,index) in goodsList.list" :key="index" class="lis" @click="itemClick(index)">
      <div>
    <img :src="item.show.img" alt="">
    </div>
    <span class="titles">{{item.title}}</span>
    </li>
  </ul>


  </div>
</template>

<script>

import {getHomeMuitidata,getHomeGoods} from 'network/home'
export default {
  methods: {
    itemClick(index){
      this.indexs = index
       this.$router.push('/detail/'+this.thelist[this.indexs].iid)
    }
  },
  components:{
 
  },
data() {
  return {
    message:'',
    goodsList:{},
    thelist:[],
    indexs:0
    // idds:{}
  }
},
watch: {
   message(newVal){
    this.axios.get('http://123.207.32.32:8000/api/hy/home/data?type=sell&page='+newVal ).then((res)=>{
    this.goodsList = res.data.data
    this.thelist =res.data.data.list
    // let that = this
    // for(let i =0;i<this.thelist.length;i++){
    //    that.idds = that.thelist[i]
    // }
  
    })
    
   } 
}

 }


</script>

<style scoped>
.titles{
  overflow: hidden;
  white-space: nowrap;
}
.lis img{
  width: 50px;
  height: 50px;
  flex: 1;
}
.lis{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>