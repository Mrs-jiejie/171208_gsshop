<template>
    <div class="footer_guide">
        <a href="javascript:;" class="guide_item" 
        :class="{on:'/msite' === $route.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item "
        :class="{on:'/search' === $route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item "
        :class="{on:'/order' === $route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item "
        :class="{on:'/profile' === $route.path}" @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-user"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" scoped>
// @import "../../common/stylus/mixins";
    .footer_guide
        // top-border-1px(#e4e4e4)
        box-shadow 0px -1px 0px rgba(100,100,100,.2)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            aligin-item center
            margin 5px
            color #999999
            &.on
                color #02a774
            span 
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    fontsize 22px

</style>