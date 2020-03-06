const state ={
   nm:'随州',
   id:260
};


const mutations={
   CITY_INFO(state,payload){
     state.nm = payload.nm
     state.id = payload.id
   }
};

export default{
  namespaced:true,
  state,
  mutations
}