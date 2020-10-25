<template>
  <div id="app">
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
export default {
  components:{
      FooterGuide
  },
  mounted () {
    // 方法一: 发送请求(请求地址信息)
    // this.$store.dispatch('getAddress')
    // 方法一: 发送请求(请求地址信息)
    this.getAddress()
  },
  methods: {
    //  方法二
    ...mapActions(['getAddress'])
  }
}
</script>
<style lang="stylus">
@import "./assets/css/base.css";
  .app
    width 100%
    height 100%
    background #f5f5f5
    overflow none
</style>
