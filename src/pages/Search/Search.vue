<template>
    <div class="search">
        <Header-top title="搜素"></Header-top>
        <div class="search_input">
            <input type="text" placeholder="  请输入商家或美食名称" class="text">
            <input type="sumit" value="提交" class="sumit">
        </div>
        <!-- <div v-for="(item,i) in 6" :key="i">
             <img src="../MSite/images/01.jpg">
        </div> -->
    </div>
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
    .search
        width 100%
        // .search_title
        //     width 100%
        //     height 45px
        //     background-color #02a774
        //     text-align center
        //     line-height 45px
        //     font-size 22px
        //     color #ffffffeb
        .search_input
            width 100%
            height 100px
            margin-top 9px
            .text
                background-color #f3f2f3
                width 75%
                height 35px
                font-size 15px
                text-align left 
                margin-left 6px
                border-radius 5px
                border none 
            .sumit
                width 17%
                height 34px
                background-color #02a774
                text-align center
                margin-left 6px
                color #ffffffeb
                border-radius 5px

        // img 
        //     width 50px
        //     height 50px
</style>