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
    userInfor:JSON.parse(localStorage["userInfor"] || "{}"),
  //  商品属性的信息数据
    saveProNature:[],

  //购物车页面商品数量及一些信息
    addProductCount:JSON.parse(localStorage["addProductInfor"] || "[]"),

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
      // console.log(state.productDetailInfor)
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
    },
  //存储商品属性信息
    saveProductNature(state,payload){
      state.saveProNature.push(payload)
    },
    //加购的商品数量
    addProduct(state,payload){
      let ix;
     let ifExic = state.addProductCount.find((value,index)=> {
       if(value.item_id==payload.item_id)ix=index;
       return  value.item_id==payload.item_id
     });
      if(ifExic){
        // console.log("数量加1");
        state.addProductCount[ix].count=payload.count
      }else {
        // console.log("直接添加信息");
        state.addProductCount.push(payload)
      }
      localStorage["addProductInfor"]=JSON.stringify(state.addProductCount);
      console.log(state.addProductCount)
    },


  //删除商品，减少其数量
    cutProduct(state,payload){
      let index;
      let isExist=state.addProductCount.find((v,i)=> {
        if (v.item_id == payload.item_id)index = i;
        return v.item_id == payload.item_id;
      })
        if(isExist){
          if(state.addProductCount[index].count>1){
            state.addProductCount[index].count--
          }else{
            state.addProductCount.splice(index)
          }
        }
      localStorage["addProductInfor"]=JSON.stringify(state.addProductCount);
        // console.log(state.addProductCount)
    },
  //清空购物车
    emptyShopCart(state){
      state.addProductCount=[];
    },
  // 修改用户名
    changeUserName(state,payload){
      state.userInfor.username=payload;
    },
  //  删除用户信息
    deleteUsername(state){
      state.userInfor={};
      console.log( state.userInfor)
      // localStorage["userInfor"]=JSON.stringify(state.userInfor)
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
    },

  //加购的商品数量
    addProduct(context,payload){
      context.commit("addProduct",payload)
    }
  }
};
export default product
