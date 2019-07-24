<template>
	<div class="main-most">
         <Header></Header>
        <h1>注册界面</h1>
        <div class="form">
            <div class="form-ctrl">
                    <input type="text" placeholder="请输入用户名"  v-model="username">
                </div>
                <div class="form-ctrl">
                        <input type="password" placeholder="请输入密码"   v-model="password">
                </div>
                <div class="form-ctrl">
                    <input type="password" placeholder="请再次输入密码"   v-model="password1">
                </div>
                <div class="form-ctrl">
                    <input type="text" class="vco" placeholder="请输入验证码"  v-model="voc">
                    <span  class="vcode" @click="changeCode()"><span class="code">{{checkCode}}</span></span>
                </div>   
        </div>
        <span class="btn-submit"  @click="resign()">注册</span>
        <div class="agreement">
            <input type="checkbox" checked="checked">我已阅读并同意
            <a>《注册协议》</a>
            和<a>《隐私条例》</a>
        </div>
        
        <div class="type">
            <a role="login" class="fr" @click="goto()">已有账号，去登录</a>
        </div>  
	</div>
</template>

<script>
import TabBar from 'components/layout/TabBar';
import { Toast } from 'mint-ui'
import Header from 'components/layout/Header'
export default {
    data(){
        return{
            username:'',
            password:'',
            voc:'',
            password1:'',
            checkCode:'',
        }
    },
    components: {
        TabBar,
        Header
    },
    mounted(){
        this.createCode()
    },
    methods:{
        goto(){
             this.$router.push("/login")
        },
        createCode(){
            var code = ''
            var codeLength = 4;//验证码的长度   
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
                        'S','T','U','V','W','X','Y','Z');//随机数   
                for(var i = 0; i < codeLength; i++) {
                    //循环操作   
                    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
                    code += random[index];//根据索引取得随机数加到code上   
                }   
            this.checkCode = code;//把code值赋给验证码  
        },
        changeCode(){
            this.createCode()
        },
        isNone(){
            
        },
        resign(){
      
            // this.isNone()
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
            if (this.password != this.password1) {
                Toast({
                    message: '两次密码不一致，请检查！',
                      duration: 1000
                });
                return 
            }  
            if (this.voc != this.checkCode) {
                Toast({
                    message: '请保证验证码输入正确!',
                      duration: 1000
                });
                return 
            }
            // if(this.status1 = 0) return
            //       alert(1)
                // 定义一个空数组
            let arr = [];
            if (localStorage.user) {
                arr = eval(localStorage.user);
                for (var e in arr) {
                    // 取出数据判断是否注册过
                    if (this.username.trim() == arr[e].username) {
                        Toast({
                            message: '该账号已被注册',
                            position: 'bottom',
                            duration: 2000
                        });
                        this.username = ''
                        this.password = ''
                        this.password1 = ''
                        this.voc = ''
                        this.createCode()
                        return;
                    }
                }
            }
            const user = {
                'username': this.username,
                'password': this.password
            };
            // 添加数据
            arr.push(user);
            localStorage.user = JSON.stringify(arr);
            Toast({
                message: '注册成功',
                  duration: 1000
            });
            //window.location.href = "login.html";
        }     
        

    },
    





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
    display flex
    flex-direction column
    background: #FFF;
    // display: block;
    // flex 1
    margin: .1rem .2rem 0;
    border: 1px solid #e7ebef;
    // border-radius 10px
    .form-ctrl{
        flex 1
        position: relative;
        margin:.1rem 0;
        // border-bottom: 1px solid #e7ebef;
        // border-radius 10px
        input{
            height:.38rem;
            font-size: .2rem;
            line-height .2rem
            width: 100%;
            background: #fafafa
            outline: none;
            border: none;
            vertical-align: middle;
            border-radius 15px
        }
    }
    .form-ctrl:nth-child(4){
        input{
            display:inline-block;
            width:50%;
        }
        .vcode{
            display:inline-flex;       
            width:50%;
            height:.38rem;
            font-size: .16rem;
            // border-radius 0px !important
            // border none !important
            // background  #ccc
            .code{
                margin-left 25%
                text-align center
            }
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
    margin: .1rem .2rem
    border-radius: 0.03rem;
    -webkit-background-clip: padding-box !important;
    background-clip: padding-box !important;
    cursor: pointer;
}

.type
  color #000
  flex 0.5
  a 
    color #000
    margin-right .2rem
.fr
    float right
    color #000
    margin-top .2rem
</style>

