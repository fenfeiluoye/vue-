<template>

	<div class="main-most">
        <Header></Header>
        <h1>登录界面</h1>
        <form action="" class="form">
            <div class="form-ctrl">
                <input type="text" placeholder="用户名"  autocomplete="name" v-model="username" >
            </div>
            <div class="form-ctrl">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
        </form>

        <span class="btn-submit"  @click="login()">登录</span> 
        <div class="type" id="type">
            <a role="reg" class="fr" @click="goto()">立即注册</a>
        </div> 
	</div>
</template>

<script>
import TabBar from 'components/layout/TabBar';
import Header from 'components/layout/Header'
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    components: {
        TabBar,
        Header

    },
    methods:{
        goto(){
             this.$router.push("/resign")
        },
        login(){
            if (this.username == "") {
                Toast({
                    message: '用户名不能为空',
                      duration: 1000    
                });
                return 
            } 
            if (this.password == "") {
                Toast({
                    message: '密码不能为空',
                      duration: 1000
                });
                return 
            } 

            if (localStorage.user) {
                // 从localStorage取出键为user的数据模型
                var arr = eval(localStorage.user);
                let k = 0;
                // 循环取出，可用其他方法代理，数据量多的情况下，不建议使用for循环
                for (var e in arr) {
                    // 判断用户名，密码是否和localStorage中的数据一致，兼容性写法必须添加trim(),不需要兼容可以不写
                    if (this.username.trim() == arr[e].username) {
                        if (this.password.trim() == arr[e].password) {
                            Toast({
                                message: '登陆成功',
                                duration: 2000
                            });
                            localStorage.islogin = true
                            // 成功后清除用户名和密码
                            this.username = ''
                            this.password = ''
                            k = 0;
                             this.$router.push("/home")
                            // 成功之后对整个登录页面ID为web的部分重新换为成功的标识（也可以选择跳转到成功页面）
                            //$("#web").html("<span style='color: blue;'>登录成功【success】</span>");
                            // window.location.href = "index.html";
                            return;
                        } else {
                            Toast({
                                message: '密码错误',
                                duration: 2000
                            });
                            // 失败后清除用户名和密码
                            this.password = ''
                            this.username = ''
                            k = 0;
                            return;
                        }
                    } else {
                        k = 1;
                    }
                }
                if (k == 1) {
                    Toast({
                        message: '用户名不存在',
                        duration: 2000
                    });
                    this.password = ''
                    this.username = ''
                }
            } else {
                    Toast({
                        message: '用户名不存在，请注册！',
                        duration: 2000
                    });
                    this.password = ''
                    this.username = ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'

.main-most
    height 100%
    display flex
    flex-direction column
    background #fff

h1{
  height .44rem
  text-align center
  line-height .44rem
  font-size 20px
}
.form
    background: #FFF;
    // display: block;
    // flex 1
    padding: .1rem .2rem 0;
    border: 1px solid #e7ebef;
    // border-radius 10px
    .form-ctrl{
        position: relative;
        padding:.1rem 0;
        // border-bottom: 1px solid #e7ebef;
        border-radius 10px
        input{
            height:.4rem;
            font-size: .16rem;
            width: 100%;
            background: #fafafa;
            outline: none;
            border: none;
            vertical-align: middle;
            border-radius 15px
        }
    
   
    }  
.btn-submit{
    padding: .08rem 0;
    height: .4rem;
    display: block;
    // width: 100%;
    background: #fd7f24;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    outline: none;
    border: none;
    margin: .1rem .2rem;
    border-radius: 0.03rem;
    -webkit-background-clip: padding-box !important;
    background-clip: padding-box !important;
    cursor: pointer;
}
.fr
    float right
    color #000
    margin-top .2rem
</style>

