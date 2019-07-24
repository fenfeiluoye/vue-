<template>
    <div  class="home-wrap">
        <Header></Header>
        <main id="main">
            <div class="main-most">
                <section v-for="(item,index) of list" :key="index" >                   
                    <dl  class="list">
                        <dd >
                            <!-- <div  class="bang_remind">畅销榜第{{item.infos[0].num}}名</div>  -->
                            <!-- <a  href="" class="btn_more">更多
                                <svg t="1542026884788" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="552" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs></defs><path d="M798.38 538.03l-575.1-346.2 0.04-68.75 575.04 345.6 0.02 69.35z" p-id="553" fill="#a1a1a1"></path><path d="M798.38 538.03L223.3 894.99v-69.52l575.06-356.79 0.02 69.35z" p-id="554" fill="#a1a1a1"></path></svg>
                            </a> -->
                            <a  class="box">
                                <img  :src="item.image_url" lazy="loaded"> 
                                
                                <div >
                                    <h2  class="wrap  line-ellipsis">{{ item.name}}</h2> 
                                        <div  class="label">
                                            <span  hidden="hidden" class="pro_label">电子书加价购</span>
                                            <span  hidden="hidden" class="pro_label">限购</span>
                                        </div> <!----> 


                                    <h4 ><label >¥ {{ item.price }}</label> <del >¥ {{item.original_price}}</del> <!----></h4>
                                    <h3 ><b ></b> 
                                        <!-- <em  class="fr">
                                            <i  class="iconfont icon-pinglun">
                                                <svg t="1542109898619" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3073" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M825.088 90.432H209.28A137.216 137.216 0 0 0 72.448 227.264v398.464c0 75.456 61.504 136.832 136.832 136.832h78.656l58.176 150.656c6.848 13.632 17.152 20.48 30.784 20.48 13.632 0 27.328-6.848 30.784-20.48l58.176-150.656h352.256c75.328 0 136.96-61.376 136.96-136.832V227.2c6.784-75.2-54.72-136.768-129.984-136.768z m68.352 535.232a68.48 68.48 0 0 1-68.352 68.416H448.704c-13.632 0-27.328 6.976-30.72 20.48l-37.696 92.48-37.568-92.416c-6.848-13.504-17.088-20.48-30.784-20.48H209.28a68.544 68.544 0 0 1-68.416-68.416V227.2c0-37.568 30.848-68.416 68.416-68.416h615.808c37.568 0 68.352 30.848 68.352 68.416v398.464zM261.312 432a48 48 0 1 0 96 0 48 48 0 1 0-96 0z m201.344 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z m202.688 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" p-id="3074" fill="#8a8a8a"></path></svg>
                                            </i>
                                            <span>{{ item.infos[0].commentCount}}</span>
                                        </em>  -->
                                        <!-- <em  class="fr">
                                            <i  class="iconfont icon-jinqiahuiyuan">
                                                <svg t="1542029908776" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1561" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs></defs><path d="M958.733019 411.348626 659.258367 353.59527 511.998465 85.535095 364.741633 353.59527 65.265958 411.348626 273.72878 634.744555 235.88794 938.463881 511.998465 808.479435 788.091594 938.463881 750.250754 634.744555Z" p-id="1562"></path></svg>    
                                            </i>{{ item.infos[0].averageScore}}
                                        </em> 
                                            <i  dd_name="点击加入购物车"   class="icon iconfont icon-shouye-gouwuche   j_add_cart">
                                                <svg t="1542030045534" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M819.2 240H256l-8-48c-8-46.4-48-80-94.4-80H96c-17.6 0-32 14.4-32 32s14.4 32 32 32h57.6c16 0 28.8 11.2 32 27.2l75.2 432v3.2c6.4 28.8 32 49.6 62.4 49.6h440c30.4 0 57.6-22.4 62.4-52.8l57.6-320c0-3.2 1.6-8 1.6-11.2-1.6-35.2-30.4-64-65.6-64z m-56 384h-440l-54.4-320h552l-57.6 320zM304 720c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z m0 128c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m464-128c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z m0 128c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" p-id="2378" fill="#d81e06"></path></svg>
                                            </i> -->
                                    </h3>
                                </div>
                                                
                            </a>
                        </dd>
                    </dl>
                </section>
            </div>    
        </main>
    </div> 
</template>

<script>
  import http from 'utils/http'
  import Header from 'components/layout/Header'
  import { scroll} from 'utils/scroll'
  import { Indicator } from 'mint-ui'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        // keyword:this.$route.query.key,
        list:[]
      }
    },
    components: {
        Header,
    
    },
    async beforeCreate(){
      Indicator.open({
         text: '正在加载中...',
         spinnerType: 'fading-circle'
      })

        let book_data = ( await http({
            method :'get',
            url: '/search_ajax.php?act=get_product_flow_search&&keyword='+this.$route.query.keyword,
        }))
        console.log(this.$route.query.keyword)
        this.list = book_data.products
        // this.input = book_data.word.
        console.log(this.list)
        Indicator.close();

        this.$nextTick(()=>{
            scroll({
                el: '#main',
                // horizontal: true,
                })
               
        })
    },
    mounted(){
        
    }
  }
</script>

<style lang="stylus" scoped>

@import '~styles/ellipsis.styl'
    .line-ellipsis
        ellipsis()
.home-wrap
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    display flex
    flex-direction column
    overflow hidden
    .main-most
        flex 1
        
    section
        flex 1 
        .list
            height 1.58rem
            margin-top .07rem
            // padding .07rem 0
            dd
                background #fff
                width 100%
                height 1.58rem
                .bang_remind
                    background-image: linear-gradient(133deg,#f296bd,#ee3b31);
                    display: inline-block
                    color: #fff
                    padding: .02rem .1rem
                    border-radius: 0 0 .1rem 0
                    margin-bottom: .07rem
                .btn_more
                    float: right
                    margin-right: .03rem
                    color: #a1a1a1
                    font-size: .12rem
                    padding: 0 .1rem
                
                .box
                    display flex
                    width 100%
                    padding .09rem .06rem
                    >img 
                        // width 1.1rem
                        flex 11
                        height 1.1rem
                    >div
                        flex 28
                        margin-left .1rem
                        overflow hidden
                        .wrap
                            color: #383838;
                            margin-top: .05rem;
                            height: .2rem;
                            // width: 2.8rem;
                            width 100%
                            overflow: hidden;
                            font-size: .14rem
                            color: #333
                            margin-bottom: .05rem
                            line-height: 1
                        .label
                            height .18rem

                        
                        h4
                            font-weight: 400
                            font-size: inherit
                            line-height: normal
                            color: #383838
                            >label 
                                color: #f23440
                                margin-top .05rem
                            >del 
                                padding: 0 .1rem 0 .12rem
                                font-size: .1rem
                                color: #777
                                text-decoration: line-through

                        h3 
                            margin-top .1rem
                            // font-size .1rem
                            height .17rem
                            display flex
                            align-item center
                            >b
                                flex 0.5
                            >em 
                                font-style normal 
                                float left
                                margin-left .1rem
                                color #98a6aa
                                flex 1
                                .icon-shouye-gouwuche
                                    color: #f22b2b;
                                    font-size: .18rem;
                                    margin-left: .2rem;
                                    
                                    flex 1
                                    >svg 
                                        flex 1
                                        margin-top: .02rem
                                span 
                                    padding-bottom  .02rem

</style>
