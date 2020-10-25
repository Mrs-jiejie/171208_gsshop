<template>
     <div class="login_content">
        <input type="text" placeholder="  手机号/邮箱/用户名" class="ipt1">
        <el-input placeholder="请输入密码" v-model="input" show-password class="ipt2"></el-input>
        <input type="text" placeholder="  验证码" class="ipt4">
        <input type="submit" value="登录" class="ipt3">
        <p style="color:#777272e8">关于我们</p>
    </div>
</template>
<script>
export default {
    name: 'passwordLogin',
    data(){
        return {
            input: ''
        }
    }
}
</script>
<style lang="stylus" scoped>
    .ipt4 
        margin 16px
        width 300px
        height 40px
        border-radius 5px
    .ipt2
        width 300px
        height 40px
        border-radius 5px
        border: 1px solid #525354
</style>