import Vue from "vue"
import Vuex from "vuex"

//将vuex注入到所有子组件中，以便子组件可以访问store
Vue.use(Vuex)

if(!localStorage.cartPro){
   localStorage.cartPro = '[]';
   localStorage.totalNum = 0;
}


export default new Vuex.Store({
   state:{
      totalNum:Number(localStorage.totalNum),
      cartPro:JSON.parse(localStorage.cartPro),
      All:false,
      selectNum:0,
      totalPrice:0
   },
   getters: {
      toFixed (state) {
        return state.totalPrice.toFixed(1) 
      }
   },
   mutations:{
      //---来自详情页的操作---
      //改变数量，每次来自详情页的加入购物车操作，都会触发该方法
      addNum(state){
         state.totalNum++;
         localStorage.totalNum = state.totalNum;
      },
      // 添加商品
      addProduct(state,obj){
         var flag = true;
         for(var i=0; i<state.cartPro.length; i++){
            // 如果存在此商品，只改变数量
            if(state.cartPro[i].id == obj.id){
               state.cartPro[i].num +=1; 
               flag = false;
            }
         }
         //如果不存在此商品，则添加进去
         if(flag){
            state.cartPro.push(obj);
         }
         localStorage.cartPro = JSON.stringify(state.cartPro)
      },
      // 第一次添加
      addFirst(state,obj){
         state.cartPro.push(obj);
         localStorage.cartPro = JSON.stringify(state.cartPro)
      },
      //---来自详情页的操作---


      //来自购物车页的操作
      changeAll(state,{flag,fromCartTotalPrice}){
         state.All = flag
         if(!flag){
            state.selectNum = 0;
            state.totalPrice = 0;
         }else{
            state.selectNum = state.totalNum;
            state.totalPrice = fromCartTotalPrice;
         }
      },
      changeNum(state,num){
         state.selectNum +=num;
      },
      changeTotalPrice(state,price){
         state.totalPrice += price
         if(state.totalPrice<=0){
            state.totalPrice = 0;
         }
      },
      changeSingleNum(state,{temp,id}){
         for(var i=0; i<state.cartPro.length; i++){
            if(state.cartPro[i].id == id ){
               //更改总数
               var a = Number(localStorage.totalNum) + temp - state.cartPro[i].num;
               localStorage.totalNum = a;
               state.totalNum = a;
               
               state.cartPro[i].num = temp;
               localStorage.cartPro = JSON.stringify(state.cartPro);
               break; 
            }
         }
      },
      //删除商品
      remove(state,id){
         for(var i=0; i<state.cartPro.length; i++){
            if(state.cartPro[i].id == id ){
               //删除的同时要对总数减去响应的数量
               state.totalNum -= state.cartPro[i].num;
               localStorage.totalNum = state.totalNum;
               state.cartPro.splice(i,1);
               localStorage.cartPro = JSON.stringify(state.cartPro);
               break;
            }
         }
         
      },
      //离开当前购物车路由时，清空选中金额和数量
      totalPriceToo(state){
         state.All = false;
         state.totalPrice = 0;
         state.selectNum = 0;
      }
   },
   actions:{
      // ---来自详情页的操作---
      //添加商品到购物车
      addToCart({commit,state},obj){
         //如果当前有商品
         if(state.cartPro.length !== 0){
            // let item = state.cartPro.find( item => item.id === obj.id )
            commit("addProduct",obj)
         }else{//一个商品也没有时
            commit("addFirst",obj)
         }
         commit("addNum");
      },
      // ---来自详情页的操作---


      //---来自购物车页的操作---
      changeAll({commit},{flag,fromCartTotalPrice}){
         commit("changeAll",{flag,fromCartTotalPrice});
      },
      changeNum({commit},num){
         commit("changeNum",num)
      },
      changeTotalPrice({commit},price){
         commit("changeTotalPrice",price);
      },
      changeSingleNum({commit},{temp,id}){
         commit("changeSingleNum",{temp,id})  
      },
      remove({commit},id){
         commit("remove",id);
      },
      totalPriceToo({commit}){
         commit("totalPriceToo");
      }
      //---来自购物车页的操作---

   }

})
