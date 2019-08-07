import Vue from "vue";
const product={
  state:{
    //附近商家信息
    pInfor:[],
  //商品标题
    title:"",
  //  商品所有信息
    productDetailInfor:{},

  //  存储搜索食品的值
    saveFoodName:[],
  //存储用户信息
    userInfor:JSON.parse(localStorage["userInfor"])||{},
  },
  mutations:{
    getShopsInfor(state,res){
      state.pInfor=res;
    },
    saveTitle(state,payload){
      state.title=payload;
      // console.log(state.title)
    },
    productDetails(state,payload){
      state.productDetailInfor=payload;
      console.log(state.productDetailInfor)
    },
    //存储搜索信息
    saveValue(state,payload){
      state.saveFoodName.push(payload)
    },
  //  删除某一个信息
    deleteOnes(state,payload){
      state.saveFoodName.splice(payload)
    },

  //  存储用户信息
    saveInfor(state,payload){
        state.userInfor=payload
    }
  },
  actions:{
    //获取附近商家的信息
    getShopsInfor(context){
      Vue.axios({
        url:"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
      }).then((result)=>{
        context.commit('getShopsInfor',result.data)
      })
    }
  }
};
export default product
