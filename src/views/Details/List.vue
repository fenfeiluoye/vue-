<template>
      <div class=detail>
          <div class="topbar">
            <i class="iconfont" @touchstart="goback">&#xe911;</i>
            <p>商品详情</p>
            <span class="iconfont" @touchstart="backHome">&#xe607;</span>
            <p class="tips">数量有限，请尽快结算</p>
         </div>

         <!-- <img :src="data.share_info[1].image_url_set.url['800']" alt="">

         <div class="info">
            <div class="price">
               <span class="group_jumei_price">{{data.group_jumei_price}}</span>
               <div v-if="data.is_check_delivery_address" class="post">包邮</div>
               <span class="group_single_price">{{data.group_single_price}}</span>
               <span class="buyer_number_text">{{data.buyer_number_text}}</span>
            </div>
            <p>{{data.group_market_price}}</p>
            <div class="timedown">
               <span class="time">03:00:00</span>
               <span>逾期未成团自动退款</span>
            </div>
         </div>

         <div class="peopleGroup">
            <div><span>[2人团]</span>{{data.share_info[1].text}}</div>
         </div>

         <div class="playIntroduce">
            <div class="rules">
               <span>拼团玩法</span>
               <span>查看规则<i class="iconfont">&#xe60b;</i></span>
            </div>
            <div class="playIntroduce-info">
               <div>
                  <div>支付</div>
                  开团/参团
                  </div>
               <i class="iconfont">&#xe60b;</i>
               <div>
                 <div>邀请</div> 
                  好友参团
                  </div>
               <i class="iconfont">&#xe60b;</i>
               <div>
                  <div>拼团成功立即发货</div>
                  逾期未成团立即退款
               </div>
            </div>
         </div> -->

         <!-- <div class="bottom_button">
            <div class="backHome" @click="backHome">
               <i class="iconfont">&#xe911;</i>
               <span>首页</span>
            </div>
           <div class="single-buy" v-html="+data.bottom_button.buy_alone_text || data.bottom_button.display_text">
           </div>
           <div class="group-buy">
               <span>
                  {{data.bottom_button.action_text}}
               </span>
           </div>
         </div> -->

        
      </div>
</template>

<script>
export default {
   props:['data'],
   methods:{
      backHome(){
         this.$router.push("/home");
      },
      goback(){
         this.$router.go(-1);
      },
      
   },
  
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
   .topbar
      height .42rem
      // width 100% !important
      width 3.75rem
      line-height .42rem
      background-color #fff
      i 
         margin-left .15rem
      p
         margin-left .2rem
         display inline-block
         width 73%
         text-align center
         font-size .16rem
      span 
         font-size .22rem
         color #888
         margin-left .1rem
      .tips
         height .3rem
         padding-left .1rem
         font-size .12rem
         color #999
         text-align left

   .detail
      width 100%
      img
         width 100%
   .info
      height 1.05rem
      padding .1rem .1rem
      color $black
      background-color #fff
      .price   
         width 100%
         height .4rem
         display flex
         align-items center
         .group_jumei_price
            font-size .24rem
            color $base-color
         .post
            margin-left .05rem
            width .26rem
            height .15rem
            font-size .12rem
            background-color $base-color
            color #fff
            border-radius .05rem
            line-height .15rem
         .group_single_price
            margin-left .1rem
         .buyer_number_text
            // float left
            margin-left .8rem
      p
         text-decoration line-through
      .timedown
         height .4rem
         line-height .4rem
         span:nth-of-type(2)
            float right
   
   
   .peopleGroup
      display flex
      align-items center
      padding-left .1rem
      height 0.64rem
      margin-top .1rem  
      color #333
      background-color #fff
      span  
         color $base-color          
   
   .playIntroduce
      margin-top .1rem
      padding 0 .1rem
      background-color #fff
      .rules
         height 0.4rem
         line-height .4rem
         span:nth-of-type(2)
            float right
            font-size .12rem
            color #666
            i 
               font-size .12rem
      .playIntroduce-info
         height .61rem
         display flex
         align-items center
         font-size .13rem
         color black
         i 
            font-size .24rem
            color #aaa
            margin 0 .1rem
         >div:nth-of-type(1)
            width .75rem
            height .35rem
            color $base-color
            div
               text-align center
         >div:nth-of-type(2),div:nth-of-type(3)
            div
               text-align center

   
        
   // .bottom_button
   //    margin-top .1rem
   //    height .6rem
   //    width 100%
   //    background-color #fff
   //    display flex 
   //    align-items center
   //    .backHome
   //       width .38rem
   //       height .38rem
   //       border 1px solid #aaa
   //       border-radius 50%
   //       display flex
   //       align-items center
   //       position relative
   //       i
   //          font-size .12rem
   //          transform: scale(.7)
   //       span
   //          width .26rem
   //          height .14rem
   //          font-size .12rem
   //          transform: scale(.9)
   //          color $black
   //          position absolute
   //          left .1rem
   //          top .1rem
   //    .single-buy
   //       width .42rem
   //       height .38rem
   //       margin-left .5rem
   //       text-align center
   //    .group-buy
   //       width 1.52rem
   //       height .36rem
   //       background-color $base-color
   //       margin-left .8rem
   //       border-radius .18rem
   //       text-align center
   //       line-height .36rem
   //       span 
   //          color #fff
</style>
