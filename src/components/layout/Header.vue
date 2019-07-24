<template>
	<div>
		<header class="search_header" id="search" dd_name="首页搜索区">
				<div class="dd-logo">
					<a class="iconfont" @click="goto" dd_name="logo跳转">
						<img src="../../assets/logo.png" alt="" style="padding-top:8px">			
					</a>
				</div>
				<div class="search">
					<div class="search_box" >
						<input type="text" v-model='input'>
					</div>
				</div>
				
				<div class="header-category">
					<a class="iconfont"  dd_name="跳转分类"  @click="text()">
					    <svg  class="icon" width="30" height="30" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M921.3 874L738.1 690.8c51.3-62.6 82.1-142.5 82.1-229.6 0-200.1-162.8-363-363-363-200.1 0-363 162.8-363 363s162.8 363 363 363c87 0 167-30.8 229.6-82.1L870 925.3c7.1 7.1 16.4 10.6 25.7 10.6s18.6-3.5 25.7-10.6c14.1-14.2 14.1-37.2-0.1-51.3zM166.8 461.2c0-160.1 130.3-290.4 290.4-290.4s290.4 130.3 290.4 290.4-130.3 290.4-290.4 290.4-290.4-130.3-290.4-290.4z" p-id="1226" fill="#8a8a8a"></path></svg>
					</a>
				</div>
		</header>
	</div>
</template>

<style lang="stylus" scoped>
div
	display flex
    header
		height .44rem
		background  #fff
		display flex
		width 100%
		>div
			height 100%
		.dd_logo
			flex 1
			display flex
		.header-category
			flex 1
			display flex
			align-items center
			justify-content center
			padding-top .08rem
		.search
			height: .3rem;
			margin: .07rem auto;
			background: #e8ecf0;
			display: flex
			flex 5
			flex-direction row
			align-items center
			justify-content center
			border-radius: .5rem;
			-webkit-border-radius: .5rem;
			.search_box
				height .3rem
				display flex
				flex 0.8
				flex-direction row
				align-items center
				justify-content center
				>input
					width 100%
					border none
					border-color #e8ecf0;
					outline: none;
					font-size: .12rem;
					padding: .01rem 0;
					color: #b5bec5;
					display: block;
					background-color: #e8ecf0;
					 
		

		

</style>


<script>
export default {
    data(){
        return{
         input :null,
         value:''   
        }
    },
    methods:{
        text(){
            var result = this.input
            this.$router.push({path :'/list',query:{
               result
            }})
        },
        goto(){
            this.$router.push(
                {path :'/'
                }
            )
        }
    },
    
}
</script>


