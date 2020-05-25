<template>
    <div id="main" v-bind:style="'height:' + (fullHeight-fullHeight*0.22) + 'px'">
        <div id="left">
            <img  id="imgBox" v-bind:src="linkerImg.src"/>
        </div>
        <div id="right">
            <h1 id="title">即时聊天系统</h1>
            <div id="from">
                <span>用户名：</span>
                <input type="text" id="userName" placeholder="请输入用户名" style="margin-bottom: 15px"/>
                <span> </span>
                <span>密码：</span>
                <input type="password" id="userPassword" placeholder="请输入密码"/>
                <p>
                    <input type="checkbox"/><span>Remember Me</span>
                </p>
            </div>

            <button class="button button-glow button-rounded button-primary">登录</button>

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
        padding: 1%;
    }
    #from input{
        width: 500px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline-style: none;
        padding: 5px 2px;
        font-size: 24px;
    }
    #from p input{
        width: 14px;
        height: 14px;
    }
    #from p{
        height: 40px;
        margin-bottom: 10px;
    }
    #from p span{
        display: inline;
        line-height: 30px;
        align-items:center;
        font-size: 16px;
    }
    #left {
        float:left;
        width: 50%;
        height:  100%;
    }
    #right {
        padding: 0;
        margin-top: 5.5%;
        margin-left: 50%;
        width: 50%;
        height: 100%;
        text-align: left;
    }
    #imgBox{
        margin-left: -25%;
        text-align: -webkit-center;
        width: 950px;
        height: 550px;
        background-size: cover;
    }
    #title{
        font-family: Tahoma, Geneva, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.6pt;
        word-spacing: 6.2pt;
    }
    span{
        display:block;
        margin:10px 0;
    }
    button{
        width: 120px;
        font-size: 20px;
    }
</style>