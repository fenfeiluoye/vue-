<template>
   <div class="content">
     <ul class="list">
        <li v-for="(item,index) in cartPro" :key=item.id class="list-item">
            <div class="select-single">
               <span @touchstart="selected(index)" class="iconfont" :class="(select[index])?'active':''">&#xe671;</span>
            </div>
            <img :src="item.img" alt="">
            <div class="des">
               <p class="line-ellipsis"><span>[急速免税]</span>{{ item.title}}</p>
               <div class="num"><span>X{{item.num}}</span> </div>
               <div>
                  <span>{{item.price}}</span>
                  <span @touchstart="toEdit(index,item.num)">编辑</span>
                  <div class="edit" :class="isShow && index == Dindex?'show':'hide'">
                     <div id="opera">
                        <span class="iconfont sub" @touchstart="sub">&#xe637;</span>
                        <span>{{tempNum}}</span>
                        <span class="iconfont add" @touchstart="add">&#xe604;</span>
                     </div>
                     <div id="del_ok">
                        <span>{{item.price}}</span>
                        <div>
                           <span  @touchstart="remove(index,item.id,item.num)">删除</span>
                           <span  @touchstart="finish(index,item.num,item.id)">完成</span>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
        </li>
     </ul>
   </div>
</template>

<script>
import {mapState} from "vuex"
import Vue from  "vue"
import { MessageBox } from 'mint-ui'

export default {
   props:["cancelAll"],
   data(){
      return {
         flag:true,
         Dindex:-1,
         select:[],
         isShow:false,
         Dindex:-1,
         tempNum:0
      }
   },
   mounted(){
      //相当于初始化了子按钮数组select的长度
      Vue.set(this.select,this.cartPro.length,false);
   },
   computed:{
      ...mapState(["cartPro","All"])
   },
   watch:{
      //监听父组件传过来的值
      All(){
         Vue.set(this.select,this.cartPro.length,this.All);
         for(var i=0; i<this.select.length; i++){
            Vue.set(this.select,i,this.All)
         }
      },
      select(){
          //反选操作，每当子按钮被点击时，就会被监听
         this.flag = true;//控制全选按钮样式
         for(var i=0; i<this.select.length-1; i++){
            //如果单选按钮数组里有一个为false，就让全选按钮为false
            if(!this.select[i]){
               this.flag = false;
            }
         }
         //全部的子元素都选中时，触发store中的，改变All的状态
         if(this.flag){
            let fromCartTotalPrice = 0;
            for(var i = 0; i<this.cartPro.length; i++){
               //计算总价
               fromCartTotalPrice += Number(this.cartPro[i].price)*this.cartPro[i].num;
            }
            this.$store.dispatch("changeAll",{flag:this.flag,fromCartTotalPrice});
         }
         //将全选状态传给父组件Cart
         this.$emit("cancelAll",this.flag)
      }
   },
   methods:{
      selected(index){
         //点击子按钮时
         var price = Number(this.cartPro[index].price.slice(1));
         if(!!this.select[index]){//选中状态下需要减去相应价格
            Vue.set(this.select,index,false);
            this.$store.dispatch("changeNum",-this.cartPro[index].num);
            this.$store.dispatch("changeTotalPrice",-this.cartPro[index].num*price)
         }else{//未选中状态下需要减去相应价格
            Vue.set(this.select,index,true);
            this.$store.dispatch("changeNum",this.cartPro[index].num);
            this.$store.dispatch("changeTotalPrice",this.cartPro[index].num*price)
         }
      },
      //点击进入编辑(需要判断点击的是哪一个)界面
      toEdit(index,num){
         this.isShow = !this.isShow;
         this.Dindex = index;
         this.tempNum = num;//保存一个临时值，填入编辑中的数量
      },
      //点击完成按钮
      finish(index,num,id){
         this.isShow = !this.isShow;
         var price = Number(this.cartPro[index].price.slice(1))
         var temp = this.tempNum;
       
         // 如果改变了值执行的操作
         if(num != temp){
            this.$store.dispatch("changeSingleNum",{temp,id});
            //如果选中状态下，才触发改变总价
            if(this.select[index]){
               this.$store.dispatch("changeTotalPrice",(temp-num)*price);
               this.$store.dispatch("changeNum",temp-num);
            }
         }
      },
      // 点击减号按钮
      sub(){
         if(this.tempNum==1){
            this.tempNum==1
         }else{
            this.tempNum --;
         }
      },
      // 点击加号按钮
      add(){
         this.tempNum ++;
      },
      // 删除按钮
      remove(index,id,num){
         MessageBox.confirm('确定删除此商品?').then(action => {
            // Vue.set(this.select,index,false)
          
            if(this.select[index]){
               var price = Number(this.cartPro[index].price.slice(1))
               this.$store.dispatch("changeTotalPrice",-(num)*price)
               this.$store.dispatch("changeNum",-num);
            }
            //
            if(this.select[index+1]){
               Vue.set(this.select,index,true)
            }else{
               Vue.set(this.select,index,false)
            }
            this.$store.dispatch("remove",id)
            //删除后取消选中状态
            this.isShow = false;
         });
         
        
      }
   }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/ellipsis.styl'
    .line-ellipsis
        ellipsis()
.content
   margin-top .1rem
   .list-item  
      height 1.04rem
      width 100%
      background-color #fff
      border-bottom 1px solid #ccc
      padding-top .1rem
      position relative
      img 
         width .84rem
         margin-left .1rem
         float left
         vertical-align middle
         // margin-top .1rem
      .select-single
         line-height 0.94rem
         height 100%
         margin-left .1rem
         float left
         span:nth-of-type(1)
            width .2rem
            height .2rem
            border 1px solid #aaa
            border-radius 50%
            text-align center
            line-height .2rem
            color #fff
            &.active
               background-color $base-color
               border 1px solid $base-color

         
      .des
         float left
         width 2.33rem
         margin-left .1rem
         p
            font-size .13rem
            color #333
            span 
               color $base-color
         .num
            width 100%
            height .16rem
            span 
               float right
               color #aaa
         >div:nth-of-type(2)
            line-height .16rem
            width 100%
            display flex
            justify-content space-between
            span:nth-of-type(1)
               color $base-color
               font-size .16rem
            span:nth-of-type(2)
               font-size .12rem
   .edit
      width 2.43rem
      height .53rem
      background-color #fff
      position absolute
      top .5rem
      right 0
      #opera
         width 100%
         height .23rem
         >span 
            display block
            float left 
            width .22rem
            height .23rem
            border-radius 50%
            border 1px solid #eee
            background-color #fff
            line-height .23rem
            text-align center
            color black
            font-weight 500
         span:nth-of-type(2){
            border none
            margin 0 .07rem
         }
      #del_ok
         height .25rem
         line-height .25rem
         >span 
            float left
         >div
            float right
            margin-right .1rem
            span 
               // padding 0.05rem
            margig-right .05rem
            span:nth-of-type(1)
               border-right 1px solid #aaa
               color black
               font-size .12rem
               padding-right .05rem
            span:nth-of-type(2)
               margin-left .05rem

   .hide
      display none
   .show
      display show
</style>


