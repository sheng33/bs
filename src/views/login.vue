<template>
    <div id="main" v-bind:style="'height:' + (fullHeight-fullHeight*0.25) + 'px'">
        <div id="left">
            <img  id="imgBox" v-bind:src="linkerImg.src"/>
        </div>
        <div id="right">
            <h1 id="title">标题</h1>
            <div id="from">
                <span>用户名：</span>
                <input type="text" id="userName" placeholder="请输入用户名" style="margin-bottom: 15px"/>
                <span>密码：<a href="#">忘记密码？</a></span>
                <input type="password" id="userPassword" placeholder="请输入密码"/>
                <p>
                    <input type="checkbox"/><span>Remember Me</span>
                    <span id="showPassword">
                        <input type="checkbox">
                        显示密码
                    </span>
                </p>
            </div>
            <p>
                <button class="button button-glow button-rounded button-primary">登录</button>
                <span>没有账户，<a href="#">立即注册</a></span>
            </p>

        </div>
    </div>

</template>

<script>
    export default {
        name: "login",
        data (){
            return {
                fullHeight: document.documentElement.clientHeight,
                linkerImg: {
                    src: require('../static/img/loginImg.png')
                }
            }
        },
        watch: {
            fullHeight(val){
                if(!this.timer){
                    this.fullHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.timer = false
                    },400)
                }
            }
        },
        mounted() {
            this.getBodyHeight()
        },
        methods :{
            getBodyHeight(){
                const that = this
                window.onresize(() => {
                    window.fullHeight = document.documentElement.clientHeight
                    that.fullHeight = window.fullHeight
                })()
            }
        }
    }
</script>
<link src="../static/css/buttons.css"/>
<style scoped>
    #main {
        padding:  1% 0 0 0;
    }
    #from input{
        width: 560px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline-style: none;
        padding: 5px 2px;
        font-size: 24px;
    }
    #from p input{
        width: 18px;
        height: 18px;
    }
    #from p{
        margin-top: 3px;
        height: 40px;
        margin-bottom: 10px;
    }
    #from p span{
        display: inline;
        line-height: 30px;
        align-items:center;
        font-size: 16px;
    }
    #from span a{
        margin-left: 70%;
        font-size: 12px;
    }
    #left {
        float:left;
        width: 50%;
        height:  100%;
    }
    #right {
        padding: 0;
        margin-top: 10%;
        margin-left: 55%;
        width: 45%;
        height: 100%;
        text-align: left;
    }
    #imgBox{
        margin-left: -200px;
        text-align: -webkit-center;
        width: 150%;
        height: 120%;
        background-size: cover;
    }
    #title{
        font-family: Tahoma, Geneva, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.6pt;
        word-spacing: 6.2pt;
    }
    #showPassword{
        /*background-color: #1B9AF7;*/
        border-radius: 2px;
        width: 150px;
        height: 40px;
        margin-top: -100px;
        margin-left: 62%;
    }
    span{
        display:block;
        margin:10px 0 0 0;
    }
    p span{
        display: inline;
        font-size: 12px;
    }
    button{
        width: 120px;
        height: 45px;
        font-size: 20px;
        display: inline;
        margin-right: 20px;
    }
</style>