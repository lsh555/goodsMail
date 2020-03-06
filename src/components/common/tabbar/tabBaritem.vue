<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot> <!----点击改变图片的插槽----></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props :{
    path :String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
    
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} :{}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path!==this.path){
     this.$router.replace(this.path)   //想返回就用push，不想返回就用replace
      }

    }
  },
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>