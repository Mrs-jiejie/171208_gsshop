<template>
    <div class="shop_list">
        <div class="list1" v-for="(nam,index) in shops.name" :key="index">
            <img :src="shops.image_url[index]">
            <div class="shop_content">
                <span class="pinpai">品牌</span>
                <h3>{{nam}}</h3>
                <!-- span class="star"> *****</span> -->
                <p>
                    <star-rating 
                    v-bind:increment="0.5"
                    :max-rating="5"
                    :rating = "shops.rangking[index]"
                    inactive-color="#d8d8d8"
                    active-color="#f9c915"
                    v-bind:star-size="10"
                    :inline="true"/>
                    <!-- <span class="pingfen">  {{shops.rangking[index]}}</span>   -->
                    <span class="sale">  月售{{shops.count[index]}}件</span></p>
                <p>${{shops.min_free[index]}}起送 / 配送费${{shops.postage[index]}}</p>
                <ul class="bzp" >
                    <li v-for="(bzp,index) in shops.bzp" :key="index">{{bzp}}</li>
                </ul>
                 <i>硅谷派送</i>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import star from '@/components/Star/star'
import StarRating from 'vue-star-rating'
export default {
    name:'ShopList',
    data(){
       return {
            shoplist: ''
       }
    },
    components: {
        star,StarRating
    },
    computed:{
        ...mapState(['shops'])
    }
}
</script>
<style lang="stylus">
  .shop_list
        overflow scroll
        height 293px
        .list1
            margin-bottom 15px
        img 
            width 80px
            height 75px
            margin-left 9px
        .shop_content
            width 240px
            font-size 13px
            display inline-block
            position relative
            height 75px
            right -14px
            top -3px
            text-overflow ellipsis
            p
                margin  7px 0px
                .vue-star-rating-rating-text
                    color #f56118
                .sale
                    text-indent 5em
            .pinpai
                // position relative
                // left 0px
                // top 0px
                background-color #d9ae20
            .star 
                color #f1ab07
            .pingfen
                color #f56118
            h3
                display block
                position absolute 
                left 36px
                top -17px
                max-width 134px 
                text-overflow ellipsis
                white-space: nowrap;
                overflow: hidden;
            .bzp
                position absolute 
                right 0px
                top -12px
                list-style none 
                color #606266;
                // font-size 10px
                li
                    display inline
                    margin-left 5px
            i
                position absolute 
                right 0px
                top 28px
                color #20a77d
</style>