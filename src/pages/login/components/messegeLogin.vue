<template>
     <div class="login_content">
           <input type="text" placeholder="  手机号" class="ipt1" v-model="phone">
           <button class="login_yanzhengma" :disabled="!rightPhone" 
           :class="{right_phone: rightPhone}" @click.prevent="getCode">
           {{computeTime > 0 ? `已发送${computeTime}s` :'获取验证码'}}</button><br>
           <input type="text" placeholder="  验证码" class="ipt2">
           <p class="login_prompt">温馨提示,未注册硅谷外卖账号的手机,登录时将自动注册,且代表已同意<span class="protocol">&laquo;用户协议&raquo;</span></p>
           <input type="submit" value="登录" class="ipt3">
       </div>
</template>
<script>
export default {
    name:'messegeLogin',
    data () {
        return {
            phone: '' ,// 手机号
            computeTime: 0
        }
    },
    computed: {
        rightPhone(){
            return /^1\d{10}$/.test(this.phone)
        }
    },
    methods: {
        getCode () {
            console.log(this.computeTime);
            console.log(!this.computeTime);
            if (!this.computeTime) {  //  if (this.computeTime <= 0) {
                this.computeTime = 30
                const intervalId = setInterval(() => {
                    this.computeTime--
                    // console.log(this.computeTime);
                    if (this.computeTime <= 0) {
                        clearInterval(intervalId)
                        console.log('123');
                    }
                },1000)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>

   
</style>