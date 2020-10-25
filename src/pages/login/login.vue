<template>
    <div class="login">
       <div class="login_title">
           <i class="iconfont icon-Left" @click="goBack()"></i>
           <h1>硅谷外卖</h1>
        </div>
        <router-link to="/messege" class="login_messege" 
        :class="{changec:'/messege' === $route.path}"
         @click="goTo('/messege')"> 短信登录</router-link>
         
        <router-link to="password" class="login_password" 
        :class="{changec:'/password' === $route.path}"
        @click="goTo('/password')">密码登录</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import messegeLogin from './components/messegeLogin'
import passwordLogin from './components/passwordLogin'
export default {
    name: 'login',
    components: {
        messegeLogin,passwordLogin
    },
    data(){
       return {
            // flag1: true,
            // flag2: false,
            // flag: true
       }
    },
    methods: {
       goBack(){
           this.$router.replace('/profile')
       },
       goTo(path){
           this.router.replace(path)
       }
    //    goSelect(flag){
    //       this.flag1 = !flag
    //       flag = true
    //    }
    }
}
</script>

<style lang="stylus">
    .login
        width 100%
        .login_title
            width 100%
            height 150px
            text-align center
            h1
                position relative 
                top 60px
                color #0f816a
            i 
                position absolute 
                left 10px
        .login_select
                text-align center
        .login_messege
            position relative
            left 83px
            top -17px
            font-size 16px
            text-decoration  none
            color black
        .login_password
            position relative
            left 136px
            top -17px
            font-size 16px
            text-decoration  none 
            color black 
        .changec
            color #0f816a
        .login_content
            width 100%
            height 400px
            text-align center
            position relative
            .right_phone
                color #ccc
            .login_yanzhengma
                border none 
                background-color #ffffff
                position absolute
                top 12px
                right 40px
                disabled true
                color #ccc
                &.right_phone
                    color black 
            .ipt1
                width 300px
                height 40px
                border-radius 5px
                margin-bottom 20px
            .ipt2
                width 300px
                height 40px
                border-radius 5px

            .login_prompt
                max-width 300px
                margin-left 27px
                color #777272e8
                .protocol
                    color #0f816a
            .ipt3
                width 300px
                height 40px
                border-radius 5px
                font-size 20px
                background-color  #41c56d
                color #c4f3d4


</style>