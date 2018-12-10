<template>
    <div  class="home-wrap">
        <Header></Header>

        <main>
            <div id="j_search_list" class="search_list" style="display: block;">
                <ul>
                    <li v-for="(item,index) of list" :key='index'>
                        <a class="aa">
                            <span class="value">{{ item.key}}</span>
                            <span class="num">约{{ item.count}}个结果</span>
                        </a>
                    </li>
                </ul>
            </div>      
        </main>
    </div>
</template>

<script>
import Header from 'components/layout/Header'
import http from 'utils/http'
export default {
    data(){
        return{
         result:this.$route.query.result,
         list:[],
         list1:[]
        }
    },
    components: {
        Header,
    
    },
    async beforeCreate(){

        let book_data = ( await http({
            method :'get',
            url: '/h5ajax.php?action=suggest&key='+this.$route.query.result,
        }))
        
        this.list = book_data.word

        console.log(this.list)

        // let book_data11 = ( await http({
        //     method :'get',
        //     url: '/search_ajax.php?keyword='+this.$route.query.result+'&act=get_product_flow_search',
        // }))
        // this.list1= book_data11.products
        // console.log(book_data11)
    },

    mounted(){
        console.log(this.result)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
main
    display flex
    flex 1
.search_list
    height: .44rem
    
    width 100%
.aa
    display: block;
    height: .44rem;
    line-height: .43rem;
    border-bottom: 1px solid #e5e5e5;
    color: #323232;
    font-size: .16rem
    background #fff

.value
    float left 
    margin-left .1rem

.num
    float right 
    margin-right .1rem


</style>



