<template>
	<div class="main-most">
		<header class="_header" id="search" >				
				<div class="header-category">
					<span href="##">我的当当</span>
				</div>
		</header>

        <section class="content">
            <!-- 登陆注册 -->
            <header class="user-infos">
                <div class="table">
                    <div class="cell">
                        <a href="##" @click="goto">登录/注册</a>
                    </div>
                </div>
            </header>
            <div class="user-stat clearFix">
                <a >收藏的商品</a>
                <a >关注的店铺</a>
                <a >我的足迹</a>
            </div>

            <div class="f-section order-section">
                <a class="slide-link" >
                     <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png">
            我的订单            <em>查看全部购买商品 ></em>
                </a>
            </div>
                
        <div class="f-section">
                
            <a class="slide-link">
            <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png">
            会员中心       <em>></em> </a>
        </div>

        <section class="f-section">
                
        <a class="slide-link" >
            <img src="http://img62.ddimg.cn/upload_img/00487/11111/wd-012-02.png">
            我的礼券        </a>
                
        <a class="slide-link">
            <img src="http://img60.ddimg.cn/upload_img/00487/11111/wd-012-03.png">
            积分抵现        </a>
                
        <a class="slide-link" >
            <img src="http://img62.ddimg.cn/upload_img/00528/1234/111.png">
            我的电子书        </a>
                
        <a class="slide-link" >
            <img src="http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png">
            我的礼品卡        </a>
                
        <a class="slide-link">
            <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png">
            收货地址        </a>
            </section>

            <section class="f-section">
                
                
        <a class="slide-link" >
            <img src="http://img61.ddimg.cn/upload_img/00705/yhj/wzl-qiang-4.11.jpg">
            精选图书，每满150减50        </a>
                
        <a class="slide-link" >
            <img src="http://img61.ddimg.cn/upload_img/00705/yhj/wzl-qiang-4.11.jpg">
            家居整理收纳季，全29元起        </a>
            </section>


        </section>

        

        <TabBar></TabBar>
	</div>
</template>

<style lang="stylus" scoped>
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
.content
    display flex
    flex 1
    flex-direction column
    color #000
.user-infos
    height 1rem
    width 100%
    display flex
    align-items:center
    justify-content center
    color #000
    background: url(http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg) no-repeat center center;
    .cell
        dispaly flex
        background #fff
        border-radius .05rem
        padding .1rem
        >a
            color #000

.user-stat
    background-color: #ffffff
    color: #000000 
    width 100%  
    display flex
    height  .54rem
    align-items:center
    justify-content center
    margin-bottom  .05rem
    >a
        display flex
        flex 1
        align-items:center
        justify-content center
        color #000

.f-section
    margin-bottom .05rem

    .slide-link
        position: relative;
        display: block;
        height .46rem
        background #fff
        line-height: .46rem;
        font-size: .14rem;
        color: #4d525d !important;
        >img 
            height .3rem
            width  .3rem
        >em
            float right
            margin-right .2rem



 






</style>

<script>

import TabBar from 'components/layout/TabBar'
export default {
    data(){
        return{

        }
    },
    components: {
        TabBar,
    },
    methods:{
        goto(){
             this.$router.push("/login")
        }
    }
}
</script>


