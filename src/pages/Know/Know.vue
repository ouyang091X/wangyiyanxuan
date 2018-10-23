<template>
  <div class="know">
    <div class="shopHeader">
      <a href="javascript:;" class="shopHeader-msite" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home  "></i>
      </span>
      </a>
      <span class="shopHeader-text">网易严选</span>
      <div class="shopHeader-sAndc">
        <a href="javascript:;" class="shopHeader-sc">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
        </a>
        <a href="javascript:;" class="shopHeader-sc" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
        </a>
      </div>
    </div>
    <div class="know-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./img/1.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/3.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/1.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/1.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/1.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/3.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/7.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/7.jpg" alt="qq">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
    new Swiper('.swiper-container', {
      loop: true, // 循环模式
      // 如果需要分页器
      pagination: {

      }
    })
  export default {
    mounted () {
      this.$store.dispatch('getShiwuData')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .know
    width 100%
    height 100%
    background-color #fff
    .shopHeader
      height 44px
      width 100%
      background #EDEDED
      display flex
      text-align center
      align-items center
      justify-content space-around
      bottom-border-1px($color)
      .shopHeader-msite
        width 24px
        height 22px
        padding 5px
        margin-left -35px
        .iconfont
          font-size 30px
      .shopHeader-text
        text-align center
        font-size 24px
      .shopHeader-sAndc
        margin-right -30px
        .iconfont
          font-size 28px
    .know-swiper
      height 143px
      .swiper-slide
        width 82px
        height 82px
        float left
        img
          width 100%
          height 100%
</style>
