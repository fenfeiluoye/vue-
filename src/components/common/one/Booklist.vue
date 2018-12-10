<template>
    <div class="feed">

                <!-- 限时秒杀 -->
                <section >
                    <dl  class="column columnss ">
                        <dd  class="column4">
                            <div  class="title">
                                <label class="tltle_1">即刻秒杀</label>
                                <a class="more">更多 ></a>
                            </div>  
                            <!-- 列表滑动 -->
                            <div class="swiper-container" id="swiper-container">
                                <div class="swiper-wrapper" >
                                    <a v-for="item of book_list " :key="item.productId" class="swiper-slide">
                                        <p class="pic">
                                            <img :src="item.productImageUrl">
                                        </p>
                                        <p class="name-wrap line-ellipsis">
                                            {{ item.productName}}
                                        </p>
                                        <p class="swiper-price">
                                            <span class="num">
                                                ￥{{ item.salePrice }}    
                                            </span>  
                                            <del class="discount">
                                                ￥{{ item.originPrice }}   
                                            </del>            
                                        </p>
                                    </a>
                                </div>  
                            </div> 
                        </dd>
                    </dl>
                </section>
            </div>
</template>




<style lang="stylus" scoped>

@import '~styles/ellipsis.styl'
    .line-ellipsis
        ellipsis()
.feed
    section
        width  100%
        flex 1
        .column
            height 2.34rem
            margin-top .15rem
            width 100%
            background url(http://z.dangdang.com/static/img/9.9-background.d4afbba.png) no-repeat

            .column4
                height 100%
                width 100%
                .title
                    position relative 
                    text-align center
                    line-height .34rem
                    padding .04rem  0  .1rem
                    display flex
                    .tltle_1
                        flex 1
                        font-size .16rem
                        font-weight 900
                        background-image: linear-gradient(133deg,#f296bd,#ee3b31);
                    .more
                        margin-right .1rem
                        height auto 
                        color red
                    
                .swiper-container
                    margin: 0 auto
                    position: relative
                    height 1.86rem
                    overflow: hidden
                    list-style: none
                    padding: 0 0 .12rem 0
                    z-index: 1
                    width 100%
                    .swiper-wrapper
                        position relative;
                        height 100%
                        width max-content
                        z-index 1
                        display flex 
                        .swiper-slide
                            width 1rem
                            height 1.72rem
                            margin-right .1rem
                            font-size .12rem
                            background #fff
                            border-radius .05rem
                            color #000
                            .pic
                                width 100%
                                img 
                                    width 1rem
                                    height 1.04rem
                                .name-wrap
                                        color: #323232
                                        margin-top: .05rem
                                        margin-left: .4rem
                                        margin-right: .125rem
                                        overflow hidden
                                        width 100%

                .swiper-price
                        padding  .08rem 0 0 
                        .num
                            display: block
                            font-weight: 500
                            font-size: .16rem
                            color: red
                            text-align: center
                        
                        .discount
                            display: block;
                            text-align: center;
                            font-size: .11rem;
                            text-decoration line-through
                        
</style>


<script>

import http from 'utils/http'
import { scroll} from 'utils/scroll'

export default {

    data(){
        return{
             book_list :[]
        }
    },

    async beforeCreate(){

        let book_data = ( await http({
            method :'get',
            url: '/api/touch/optimization/feed?page=0&udid=904daa6b9bf4ecd91db627046b198faf&permanent_id=20181108091900101810847345010958798&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541764542159&tc=abd6be5b462a3397360299f6060fa653'
        }))

        this.book_list = book_data.result.columns[0].infos
        console.log(this.book_list)

        // this.$nextTick(()=>{
        //     new BScroll('#swiper-container',{
        //      probeType: 1, 
        //      scrollX: true,
        //     click: true
        //     }) 
        // })
        this.$nextTick(()=>{
            scroll({
                el: '#swiper-container',
                horizontal: true,
                })
        })
        
    }
    
}
</script>
