<template>
    <div >
        <mt-swipe :auto='4000'>
            <mt-swipe-item  v-for="item of swi_top" :key = "item.rank">
                <img  id="img1" :src="item.bannerImg" >
            </mt-swipe-item>
        </mt-swipe>
        
        
    </div>
</template>


<style lang="stylus" scoped>
     div
        height 1.1rem
        width 100%
        .mint-swipe
            width 100%
            .mint-swipe-item
                height:100%
                width 100%
                #img1
                    display block
                    width 100% !important
                    height 1.2rem !important
</style>


<script>
import http from 'utils/http'
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    data(){
        return{
            swi_top :[]
        }
        
    },

    components: {
        [Swipe.name] : Swipe,
        [SwipeItem.name]: SwipeItem
    },

    async beforeCreate (){
        let swi_toper = (await http({
            method: 'get',
            url: '/api/mina/decoration/getIndexData?udid=d9c175116300d1760da7222aa41a2773&permanent_id=20181107192101933271374557557486127&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541598312211&tc=41ed454c295024e82e934334f93164c2'
        }))
        this.swi_top = swi_toper.result.bannerData
        console.log(this.swi_top)
    
    }

}

</script>



