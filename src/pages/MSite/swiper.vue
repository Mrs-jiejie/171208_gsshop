<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(title,index) in categorys.content" :key="index">
                <a href="javascript:"  v-for="(item,i) in title.text" :key="i">
                    <img :src="title.imageurl[i]">
                    <span>{{item}}</span>
                </a>
                 <!-- <a href="javascript:" >
                    <img src="./images/06.jpg">
                    <span>超市便利</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/03.jpg">
                    <span>美团外卖</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/05.jpg">
                    <span>水 果</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/02.jpg">
                    <span>汉堡披萨</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/04.jpg">
                    <span>下午茶</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/07.jpg">
                    <span>跑腿代购</span>
                </a>
                <a href="javascript:">
                    <img src="./images/01.jpg">
                    <span>甜品甜点</span>
                </a> -->
                 <!-- <a href="javascript:">
                    <img src="./images/08.jpg">
                    <span>全部分类</span>
                </a>  -->
            </div>
            <!-- <div class="swiper-slide">
                <a href="javascript:" >
                    <img src="./images/01.jpg">
                    <span>甜品甜点</span>
                </a>
                 <a href="javascript:" >
                    <img src="./images/06.jpg">
                    <span>超市便利</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/03.jpg">
                    <span>美团外卖</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/05.jpg">
                    <span>水 果</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/02.jpg">
                    <span>汉堡披萨</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/04.jpg">
                    <span>下午茶</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/07.jpg">
                    <span>跑腿代购</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/01.jpg">
                    <span>甜品甜点</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/08.jpg">
                    <span>全部分类</span>
                </a>
            </div> -->
            <!-- <div class="swiper-slide">
                <a href="javascript:" >
                    <img src="./images/01.jpg">
                    <span>甜品甜点</span>
                </a>
                 <a href="javascript:" >
                    <img src="./images/06.jpg">
                    <span>超市便利</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/03.jpg">
                    <span>美团外卖</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/05.jpg">
                    <span>水 果</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/02.jpg">
                    <span>汉堡披萨</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/04.jpg">
                    <span>下午茶</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/07.jpg">
                    <span>跑腿代购</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/01.jpg">
                    <span>甜品甜点</span>
                </a>
                 <a href="javascript:">
                    <img src="./images/08.jpg">
                    <span>全部分类</span>
                </a>
            </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {mapState} from 'vuex'

export default {
  name: 'myswiper',
  data(){
      return {
          
      }
  },
  mounted(){
    //    new Swiper ('.swiper-container', {
    //         loop: true, // 循环模式选项
    //     })   
  },
  watch: {
      categorys () {
           // 界面更新就立即创建Swiper对象
        this.$nextTick(() =>{ // 一旦完成界面更新,立即调用(此条语句写在数据更新之后)
        // 创建一个Swiper实例,实现轮播
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
        })   
      })
      }
     
  },
  computed:{
        // ...mapState(['address']) 方法一  
        ...mapState(["categorys"])//方法二
    }
}
</script>

<style lang="stylus">
    .swiper-container
        width 90%
        height 190px
        text-align center
        // background-color pink 
        .swiper-wrapper
            .swiper-slide
                display flex
                flex-flow row wrap
                justify-content: space-between
                a
                    // flex 1
                    margin 20px 4px 5px
                    height 70px
                    text-decoration none 
                    display flex
                    flex-direction column
                    img 
                        width 50px
                        height 50px
</style>
