<template>
	<div>
		<header class="search_header" id="search" dd_name="首页搜索区">
				<div class="dd-logo">
					<a class="iconfont" @click="goto" dd_name="logo跳转">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44" enable-background="new 0 0 44 44" xml:space="preserve">  <image id="image0" width="44" height="44" x="0" y="0"
								xlink:href="data:image/png;base64,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
							TkSuQmCC" />
							</svg>

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
            console.log(result)
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


