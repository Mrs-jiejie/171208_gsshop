<template>
    <section class="order">
        <!-- <header class="header">
            <a class="header_title">
                <span class="header_title_text">订单列表</span>
            </a>
        </header> -->
        <Header-top title="订单列表"></Header-top>
        <section class="order_no_login">
            <img src="./images/person.jpg">
            <h3>登录后查看外卖订单</h3>
            <button>立即登录</button>
        </section>
    </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
    components: {
        HeaderTop
    }
}
</script>

<style lang="stylus" scoped>
    .order
        width 100%
        text-align center
    // .header
    //     background-color #02a774
    //     width 100%
    //     height 45px
    //     line-height 45px
    .order_no_login
        background-color #f6f6f6
        height 547px
        img 
            margin-left 16px
            width 90%
            height 233px
        button 
            background-color #02a774
            border-radius 3px
            border none 
            color #ffffffeb
            width 100px
            height 35px
        h3
           color  #afaeaf

</style>