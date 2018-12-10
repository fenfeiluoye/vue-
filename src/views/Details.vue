<template>
    <div class="home-wrap">
        <header class="_header" >				
				<div class="header-category">
					<span href="##"> 商品</span>
				</div>
		</header>

        <!-- 主体 -->
        <div class="main" id="bigpic">
            <div id="cell"   v-for="(item,index) of book_rank" :key="index"  v-if="item.infos[0].productId == id" >

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

        
        <Tab></Tab>
    </div>
    
</template>


<style lang="stylus" scoped>

@import '~styles/border.styl'
._header
    height .44rem
    background  #fff
    display flex
    width 100%
    align-items center
    justify-content center
.header-category
    height 100%
    display flex
    align-items center
    justify-content center 


.home-wrap
  height 100%
  display flex
  flex-direction column
  background #fff
.main
    flex 1
    display flex
    flex-direction column
    position relative
    overflow hidden
    #bigpic    
        flex 1
        overflow hidden
        #cell
            flex 1


.turn
    width 100%
    height 3.75rem
    border  1px 0 1px 0, #ccc
    .slider
        width 100%
        height 3.75rem
        display block
.img_list 
    width 3.75rem  
    height 3.75rem
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

     
</style>

<script>
import http from 'utils/http'

import { scroll} from 'utils/scroll'

import Tab from 'components/layout/Tab'

export default {
    data(){
        return{
         id:this.$route.query.id,
         book_rank:[]
        }
    },
    components: {
        Tab
    },

    async beforeCreate(){

        let book_data = ( await http({
            method :'get',
            url: '/api/touch/optimization/feed?page=0&udid=904daa6b9bf4ecd91db627046b198faf&permanent_id=20181108091900101810847345010958798&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541764542159&tc=abd6be5b462a3397360299f6060fa653'
        }))

        this.book_rank = book_data.result.columns.slice(1,5)
        console.log(this.book_rank)


        this.$nextTick(()=>{
            scroll({
                el: '#bigpic',
                horizontal: true,
                })
        })
    },
   
    mounted(){
        console.log(this.id)
    }
   
}
</script>

