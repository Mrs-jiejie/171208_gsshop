<template>
    <header class="header">
        <slot name="left"></slot>
        <div class="header_title">
            {{title}}
        </div>
       <slot name="right"></slot>
    </header>
</template>
    
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style lang="stylus">
    .header
        background-color #02a774
        // posotion fixed !important 
        // left 0px
        // top 0px
        width 100%
        height 45px
        line-height 45px
        text-align center
        color #ffffffeb
        .header_search
            position absolute 
            left 15px
            font-size 14px
        .header_title
            display inline-block
            // position absolute 
            // left 32%
            // top 4%
            max-width 200px
            text-overflow ellipsis
            white-space nowrap 
            overflow hidden
            font-size 22px
        .header_login
            position absolute 
            right 11px
            font-size 15px
</style>