<template>
    <section class="mesite">
        <!-- 首页头部 -->
       <!-- <header class="mesite_header">
            <span class="mesite_search">
                <i class="iconfont icon-search"></i>
            </span>
            <div class="mesite_title">
                昌平区北七家港湾(337号)
            </div>
            <span class="header_login">
                <span class="header_login_text">登录|注册</span>
            </span>
       </header> -->
       <Header-top :title="address.name">
       <!-- <Header-top :title="address.name"> -->
            <span class="header_search" slot="left">
                 <i class="iconfont icon-search"></i>
            </span>
            <span class="header_login "  slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
       </Header-top>
            
       <!-- 首页导航 -->
       <nav class="mesite_nav">
           <!-- <ul>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <img src="./images/01.jpg">
                        <span>甜品甜点</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/06.jpg">
                        </div>
                        <span>超市便利</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/03.jpg">
                        </div>
                        <span>美团外卖</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/05.jpg">
                        </div>
                        <span>水 果</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/02.jpg">
                        </div>
                        <span>汉堡披萨</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/04.jpg">
                        </div>
                        <span>下午茶</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/07.jpg">
                        </div>
                        <span>跑腿代购</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:" class="link_to_food">
                        <div>
                            <img src="./images/08.jpg">
                        </div>
                        <span>全部分类</span>
                    </a>
               </li>
            </ul> -->
            <myswiper v-if="categorys !== ''"></myswiper>
            <img src="./images/svg.png" style="width:100%;height:220px" v-else>
       </nav>
       <!-- 首页附近商家 -->
       <div class="mesite_shop_list">
           <div class="mesite_tubiao">
               <!-- <hr> -->
               <i class="iconfont icon-liebiao"> </i>
               <span>{{title}}</span>
           </div>
           <!-- <div class="list1">
               <img src="./images/09.jpg">
               <div>
                   <span>品牌 </span>
                   <strong>锄禾日当午,汗滴禾下土</strong>
                   <p>*****  月销100件</p>
                   <p>$20起送 / 配送费$5</p>

               </div>
           </div>
           <div class="list1">
               <img src="./images/09.jpg">
               <div>
                   <span>品牌 </span>
                   <strong>锄禾日当午,汗滴禾下土</strong>
                   <p>*****  月销100件</p>
                   <p>$20起送 / 配送费$5</p>

               </div>
           </div>
           <div class="list1">
               <img src="./images/09.jpg">
               <div>
                   <span>品牌 </span>
                   <strong>锄禾日当午,汗滴禾下土</strong>
                   <p>*****  月销100件</p>
                   <p>$20起送 / 配送费$5</p>

               </div>
           </div>  -->
             
            <Shop-list v-if="shops !== ''"></Shop-list>
            <div v-else>
                <img src="./images/shops.png" v-for="(item,i) in 6" :key="i"
                style="width:100%;height:75px">
            </div>
       </div>
    </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import myswiper from './swiper'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'
import star from '@/components/Star/star'

export default {
    components: {
        HeaderTop,myswiper,ShopList
    },
    data(){
        return {
            title:'附近商家'
        }
    },
    mounted(){
        this.$store.dispatch('getShops'),
        this.$store.dispatch('getCategorys')
    },
    computed:{
        ...mapState(['address','categorys','shops']), // 方法一  
        // ...mapState({currentaddress: "address",currentcgs:"categorys "})  //方法二
    }
    
}
</script>

<style lang="stylus" scoped>
// @import "../../common/stylus/mixins";
    .mesite
        position fixed
        top 0px
        left 0px
        right 0px
        bottom 50px
        height 616px
        width 100%
        // .header
        //     background-color #02a774
        //     // posotion fixed !important 
        //     // left 0px
        //     // top 0px
        //     width 100%
        //     height 45px
        //     .header_search
        //         position absolute 
        //         left 15px
        //         top 4%
        //     .header_title
        //         display inline-block
        //         position absolute 
        //         left 32%
        //         top 4%
        //         max-width 100px
        //         height 20px
        //         text-overflow ellipsis
        //         white-space nowrap 
        //         overflow hidden
        //     .header_login
        //         position absolute 
        //         right 0px
        //         top 4%
        .icon-search
            font-size 24px
        .mesite_nav
            // background-color pink 
            // posotion absolute  
            // left 0px
            // top 50%
            margin-bottom 10px
            width 100%
            height 220px
            border-bottom 1px solid #e6e6e6
        .mesite_shop_list
            border-top 1px solid #c0c4cc
            width 100%
            .mesite_tubiao
                padding-top 10px
                // border-top 1px solid #c0c4cc
                // position fixed
                width 100%
                height 30px
                margin -1px 5px 5px 13px  
                 

        //    .list1
        //         img 
        //             width 80px
        //             height 75px
        //         div
        //             font-size 13px
        //             display inline-block
        //             position relative
        //             height 75px
        //             right -18px
        //             top -3px
        //             text-overflow ellipsis
        //             strong
        //                 display block
        //                 position absolute 
        //                 left 36px
        //                 top 0px
        //                 max-width 83px 
        //                 text-overflow ellipsis
        //                 white-space: nowrap;
        //                 overflow: hidden;
                    

</style>