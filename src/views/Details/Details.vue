<template>
    <div class="home-wrap">
            <!-- <div>
                <List :data="data"></List>
            </div> -->
            <!-- 主体 -->
            <div class="main" id="bigpic">
                <div class="main-most">
                    <div id="cell"  v-for="(item,index) of book_rank" :key="index"  v-show="item.infos[0].productId == id" @click="selectBooks(item)">

                        <!-- 图片 -->
                        <div class="turn" >
                            <img class="img_list" :src="item.infos[0].productImageUrl" alt="">
                        </div>

                        <div class="title_list">
                            <article class="dangdang_icon">{{ item.infos[0].productName}}</article>
                        </div>
                            <!-- 价格 -->
                        <div class="new_style">
                            <div class="new_price_div">
                                <div class="new_left">
                                    <div class="main_price_div">¥
                                        <span class="main_price" id="main_price">{{ item.infos[0].salePrice }}
                                            </span>
                                    </div>
                                </div>
                                <div class="original_price_div" >
                                    <div class="original_price">定价
                                        <span class="line"> {{ item.infos[0].originPrice }}</span>
                                    </div>                                 
                                </div>
                            </div>
                            <!-- <span class="checkTrue">已选择商品</span>                                -->
                        </div>
                        <div data-v-d5786d3c="" class="shoplist">
                            <div data-v-d5786d3c="" class="flex-box">
                                <aside data-v-d5786d3c="">
                                    <h3 data-v-d5786d3c="">评价: {{item.infos[0].average_score}}</h3>
                                    <p data-v-d5786d3c="">
                                        <span data-v-d5786d3c="" class="star">⭐</span>
                                        <span data-v-d5786d3c="" class="star">⭐</span>
                                        <span data-v-d5786d3c="" class="star">⭐</span>
                                        <span data-v-d5786d3c="" class="star">⭐</span>
                                        <span data-v-d5786d3c="" class="star">⭐</span>
                                    </p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
            <!-- <Tab></Tab> -->
            <div class="bottom_button">
                <div class='cart' @click="goToCart">
                    <div class="num">{{totalNum}}</div>
                    <i class="iconfont">&#xe606;</i>
                    <span>购物车</span>
                </div>
                <div class="addCart" @click="addToCart">加入购物车</div>
                <div class="buyNow" @click="goToCart">立即购买</div>
            </div>
        </div>
        
    
</template>



<style lang="stylus" scoped>

@import '~styles/border.styl'

.home-wrap
  height 100%
  display flex
  flex-direction column
  background #fff
  overflow hidden
.main
    flex 1
    display flex
    flex-direction column
    // position relative
    overflow hidden
    .main-most
        flex 1
        height 100%
    #bigpic    
        flex 1
        overflow hidden
        // #cell
        //     flex 1


.turn
    width 100%
    // height 3.75rem
    border  1px 0 1px 0, #ccc
    .slider
        width 100%
        // height 3.75rem
        display block
.img_list 
    width 100%  
    // height 3.75rem
.title_list
    font-family: Helvetica
    text-indent: 0.1rem
    font-size .16rem
    margin: .12rem .25rem .1rem .1rem;

.new_style
    background #fff
    display: block
    overflow: hidden
    margin: 0rem .1rem
    .new_price_div
        display: block;
        overflow: hidden;
        margin-top: .1rem;
        width:80%
        .new_left
            display: block
            float: left
            overflow: hidden
            color: #ff463c
            font-size: .2rem
        .original_price_div
            clear both
            display block
            font-size .12rem
            .line
                text-decoration: line-through
    .checkTrue 
        display hidden 
        float: right
        color green
   
   .bottom_button
      width 100%
      height .49rem
      display flex
      text-align center
      background-color #fff
      position fixed
      z-index 999
      bottom 0
      .cart
         width 30%
         height 100%
         display flex
         flex-direction column
         position relative
         color #888
         .num
            position absolute
            top 0rem
            left 50%
            // width .15rem
            // height .16rem
            padding .01rem .05rem
            background-color #ccc
            border-radius 50%
            line-height .16rem
            color red
         i 
            font-size .22rem
         span 
            position absolute
            top 50%
            left 34%

      .addCart,.buyNow
         width 35%
         height 100%
         line-height .49rem
         color $base-color
         
            
      .addCart
         background-color #FFD5E3
      .buyNow
         background-color green
         color #fff   
</style>

<script>
import http from 'utils/http'

// import { scroll} from 'utils/scroll'

// import Tab from 'components/layout/Tab'

import List from "./List"
import { Indicator } from 'mint-ui'
import { Switch } from 'mint-ui';
import BScroll from 'better-scroll'
import { mapState} from 'vuex'


export default {
    data(){
        return{
            data:{},
            data1:{},
            id:this.$route.query.id,
            book_rank:[],
            book_info:{},
        }
    },
    components: {
        // Tab,
        List
    },

    async beforeCreate(){
      Indicator.open({
         text: '正在加载中...',
         spinnerType: 'fading-circle'
      })
        let book_data = ( await http({
            method :'get',
            url: '/api/touch/optimization/feed?page=0&udid=904daa6b9bf4ecd91db627046b198faf&permanent_id=20181108091900101810847345010958798&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541764542159&tc=abd6be5b462a3397360299f6060fa653'
        }))

        this.book_rank = book_data.result.columns.slice(1,20)

        console.log(this.book_rank)
        // this.data = data;
        Indicator.close();

        this.$nextTick(()=>{
            scroll({
                el: '.main-most',
                horizontal: true,
                })
        })
    },
    computed:{
      ...mapState(["totalNum"])
    },
    methods:{
        selectBooks(item){
            this.book_info = item
            console.log(item,111)
        },
        goToCart(){
            this.$router.push("/home/carts")
        },
        addToCart(){
            var obj = {
                id:this.$route.query.id,
                title:this.book_info.infos[0].productName,
                img:this.book_info.infos[0].productImageUrl,
                num:1,
                price:this.book_info.infos[0].salePrice
            }
            this.$store.dispatch('addToCart',obj);
            
        }
    },
}
</script>

