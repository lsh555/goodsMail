import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const state ={
  cartList:[],
  
}
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,  // mutations唯一目的就是修改state中状态,里面每个方法尽可能完成的事件比较单一 
  actions,
  getters,
  
  modules:{
    city
  }
})

export default store
// dispatch:含有异步操作，例如向后台提交数据
// commit:同步操作

// state => 基本数据 
// getters => 从基本数据派生的数据，可以认为是 store 的计算属性
// mutations => 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。提交更改数据的方法，同步！ 
// actions => 像一个装饰器，包裹mutations，使之可以异步。 
// modules => 模块化Vuex