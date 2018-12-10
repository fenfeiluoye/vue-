<template>
    <div class="main-most">
		<header class="_header" id="search" >				
				<div class="header-category">
					<span href="##">为你推荐</span>
				</div>
		</header>
        <main>
            <ul class="rec-prds-new">
                <li class="ios" v-for="(item,index) of list_rank " :key="index">
                    <a >
                        <aside>
                            <img :src="item.image_url" alt="">
                        </aside>
                        <span class="name line-ellipsis">{{item.name}}</span>
                        <p class="labels">
                            <span class="label_common">{{item.productTags[0]? item.productTags[0].name :'当当自营' }}</span>

                        </p>

                        <em class="money">
							<i class="left">{{item.price ?'￥'+item.price :''}}</i>
						</em>
                    </a>
                </li>
            </ul>
        </main>
        <TabBar></TabBar>
	</div>
</template>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.line-ellipsis
    ellipsis()
    width 1.5rem

.main-most
    height 100%
    display flex
    flex-direction column    
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
    main
        display flex
        flex 1
        flex-direction column
        color #000
        overflow: hidden;
        .rec-prds-new           
            text-align: left;
            .ios
                background #ffffff
                margin .01rem;
                float: left;
                width: 49%;
                height 2.7rem
                >a
                    height 2.7rem
                    background-color: white
                    aside>img
                        width 100%
                        height 1.85rem
                    .name
                        display block
                        height .3rem
                        padding 0 .05rem
                        margin-bottom  .05rem
                        font-size .14rem
                        color #000
                        overflow hidden
                        line-height 1
                    .labels
                        overflow: hidden;
                        height: 0.16rem;
                        padding: 0 0.05rem; 
                        color  red
                    .money
                        font-size: .15rem;
                        margin-left: .05rem;
                        margin-top .05rem
                        float: left;
                        color #000

                        .label_common
                            border: 1px solid #f2303c;
                            padding: 0 .02rem;
                            padding-top: 1px;
                            box-sizing: border-box;
                            margin-right: 0.125rem;
                            font-size: 0.416rem;
                            color: #f2303c;
                            line-height: 0.6rem;

</style>


<script>
import { scroll} from 'utils/scroll'
import TabBar from 'components/layout/TabBar'
import http from 'utils/http1'
export default {
    data(){
        return{
         list_rank:[]
        }
    },
    components: {
        TabBar
    },

    async beforeCreate(){

        var params = new URLSearchParams();
        params.append('action', 'home'); 

        let book_data = ( await http({
            method :'post',
            url: '/h5ajax.php',
            // headers:{
            //     'Content-Type':'application/x-www-form-urlencoded'
            // },
            data: params,
            
            
        }))

        this.list_rank = book_data.reco_list
       


        this.$nextTick(()=>{
            scroll({
                el: 'main',

                })
        })
    },
   
    
}
</script>

