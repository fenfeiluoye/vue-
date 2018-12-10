<template>
    <div class="main_most" id="booklist">
        <div class="most">
            <swiper></swiper>


            <div class="book-most" >    
                <div   dd_name="值得买,馆" ddt-area="guan" class="guan">
                    <a  v-for="(item,index) of item_date" :key = "index" >
                        <img :src="item.iconImg" >
                    </a>
                </div>
            </div>

            <div class="book-most" >    
                <div   dd_name="值得买,馆" ddt-area="guan" class="guan">
                    <a  v-for="(item,index) of item_date1" :key = "index" >
                        <img :src="item.iconImg" >
                    </a>
                </div>
            </div>
            <book-rank1></book-rank1>

            
            
            
        
        
        </div>
    </div>
    
</template>


<style lang="stylus" scoped>
    .main_most
        flex 1
        height 100%
        .most
            flex 1
            .mint-swipe
                width 100%
                height 1.1rem
                position relative
                .mint-swipe-item
                    height:100%
                    width 100%
                    #img1
                        display block
                        width 100% !important
                        height 1.2rem !important
            .book-most
                height .74rem
                width  100%
                .guan
                    display flex
                    
                    height .74rem
                    justify-content:center
                    align-items:center

                    a
                        width 100%
                        height 100%
                        flex 1
                        img
                            height 100%
            
            







</style>


<script>
import http from 'utils/http'
import {scroll}  from 'utils/scroll'
import Swiper from 'components/common/one/Swiper'
import BookRank1 from  'components/common/one/BookRank1'
import { Swipe, SwipeItem } from 'mint-ui';



export default {
    data(){
        return{
            swi_top :[],
            item_date :[],
            item_date1 :[],
           
        }
        
    },

    components: {
        Swiper,
        BookRank1
    },

    async beforeCreate (){
        let swi_toper = (await http({
            method: 'get',
            url: '/api/mina/decoration/getIndexData?udid=d9c175116300d1760da7222aa41a2773&permanent_id=20181107192101933271374557557486127&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541598312211&tc=41ed454c295024e82e934334f93164c2'
        }))
        this.item_date = swi_toper.result.iconData.slice(0,5)
        this.item_date1 = swi_toper.result.iconData.slice(5,10)
        // let feed_data = (await http({
        //     method : 'get',
        //     url : '/api/touch/optimization/feed?page=0&udid=a0810692b1fcf4dea5d99cd1ce188d0d&permanent_id=20181110191229695359700889278162996&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541848479011&tc=0becb96040ebaffe439bf15f04710bd5'
        // }))



        this.$nextTick(()=>{
            scroll({el:'#booklist'})
             
        })
    
    }
    
  
}

</script>



