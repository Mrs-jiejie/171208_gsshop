<template>
    <div class="profile">
        <div class="profile_header">
            <Header-top title="我的">
                <!-- <p>我的</p> -->
            </Header-top>
            <div class="profile_login">
                 <hr>
                <img src="./images/person.jpg">
                <div class="profile_zhuce" @click="goLogin()">
                    <br><br>
                    <strong class="iconfont icon-wodedingdan">登录/注册</strong><br><br>
                    <span class="iconfont icon-dianhua">暂无绑定手机号</span>
                    <i class="iconfont icon-arrow-right-bold"></i>
                </div>
            </div>
        </div>
        <div class="profile_section">
            <div class="profile_section_item">
                <span><strong>0.00</strong>元</span>
                <span>我的余额</span>
            </div>
            <div  class="profile_section_item">
                <span><strong>0</strong>个</span>
                <span>我的优惠</span>
            </div>
            <div  class="profile_section_item">
                <span><strong>0</strong>分</span>
                <span>我的积分</span>
            </div>
        </div>
        <hr>
        <div class="profile_list">
            <div class="profile_list_item">
                <i class="iconfont icon-wodedingdan"></i>
                <span>我的订单</span>
                <a class="iconfont icon-arrow-right-bold"></a>
            </div>
            <div class="profile_list_item">
                <i class="iconfont icon-jifenshangcheng"></i>
                <span>积分商城</span>
                <a class="iconfont icon-arrow-right-bold"></a>
            </div>
            <div class="profile_list_item">
                <i class="iconfont icon-huiyuanqia"></i>
                <span>硅谷外卖会员卡</span>
                <a class="iconfont icon-arrow-right-bold"></a>
            </div>
            <div class="profile_list_item">
                <i class="iconfont icon-fuwuzixun"></i>
                <span>服务中心</span>
                <a class="iconfont icon-arrow-right-bold"></a>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
    components: {
        HeaderTop
    },
    methods: {
        goLogin(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .profile
        width 100%
        .profile_header
            color #ffffffeb
            background-color #02a774
            height 200px
            // p
                // text-align center
                // font-size 22px
                // padding 10px
            hr 
                position relative
                left 0px
                top -2px   
            .profile_login
                img  
                    width 80px
                    height 80px
                    border-radius 50%
                    position relative
                    left 15px
                    top 24px
                .profile_zhuce
                    width 250px
                    height 150px
                    // background-color pink 
                    position relative
                    left 109px
                    top -90px
                    i 
                        position absolute
                        right 10px
                        top 63px

        .profile_section
            width 100%
            height 85px
            display flex
            flex-direction row
            align-items: center
            color #777272
            hr
                color #d6d6d6
            .profile_section_item
                text-align center
                display flex
                flex-direction column
                flex 1
                border-right 1px solid #d6d6d6
                strong
                    font-size 22px
                    color #fda01a
        .profile_list_item
            width 100%
            height 45px
            line-height  45px
            border-bottom 1px solid #d6d6d673
            span 
                position absolute
                left 35px
            i 
                color #fa774b
            a
                position relative
                left 314px
                top 0px
                color #777272
           
</style>