<template>
  <div class="msite">
    <div class="msite-header">
      <h1 class="msite-logo"></h1>
      <div class="msite-headerSearch">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜索商品，共16676款好物</span>
      </div>
    </div>
    <div class="msite-tab">
      <div class="tab-item">
        推荐
      </div>
      <div class="tab-item">
        居家
      </div>
      <div class="tab-item">
        鞋包服饰
      </div>
      <div class="tab-item">
        服装
      </div>
      <div class="tab-item">
        电器
      </div>
      <div class="tab-item">
        洗护
      </div>
      <div class="tab-item">
        饮食
      </div>
      <div class="tab-item">
        餐厨
      </div>
    </div>
    <nav class="msite-nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./img/1.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/3.jpg" alt="qq">
          </div>
          <div class="swiper-slide">
            <img src="./img/7.jpg" alt="qq">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
      <ul class="mstie-ul">
        <li class="msite-item msite-firstItem">
        <span class="item_icon">
           <i class="iconfont icon-star"></i>
         </span>
          <span>网易自营品牌</span>
        </li>
        <li class="msite-item">
        <span class="item_icon">
          <i class="iconfont icon-star"></i>
        </span>
          <span>30天无忧退货</span>
        </li>
        <li class="msite-item">
        <span class="item_icon">
          <i class="iconfont icon-star"></i>
        </span>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </nav>
    <div class="msite-brand">
      <div class="msite-brandHeader">
        <span>品牌制造商直供</span>
        <span class="item_icon">
           <i class="iconfont icon-right"></i>
        </span>
      </div>
      <ul class="msite-brandUl">
        <li>
        <div class="msite-img">
          <div class="msite-text">海外制造商</div>
          <div class="msite-price">9.9元起</div>
        </div>
        <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="11">
      </li>
        <li>
          <div class="msite-img">
            <div class="msite-text">海外制造商</div>
            <div class="msite-price">9.9元起</div>
          </div>
          <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="11">
        </li>
        <li>
          <div class="msite-img">
            <div class="msite-text">海外制造商</div>
            <div class="msite-price">9.9元起</div>
          </div>
          <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="11">
        </li>
        <li>
          <div class="msite-img">
            <div class="msite-text">海外制造商</div>
            <div class="msite-price">9.9元起</div>
          </div>
          <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="11">
        </li>

      </ul>
    </div>
  </div>

</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'


  new Swiper('.swiper-container', {
    loop: true, // 循环模式
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })
  export default {
    computed: {
      ...mapState(['home_data'])
    },
    mounted () {
      this.$store.dispatch('getHomeData')
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    height 100%
    width 100%
    .msite-header
      width 100%
      height 44px
      background-color #fff
      .msite-logo
        float left
        width 69px
        height 20px
        margin 10px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-repeat no-repeat
        background-size 69px 20px
      .msite-headerSearch
        float right
        width 266px
        height 28px
        margin 8px
        background-color #E4E4E4
        border-radius 5px
        display flex
        justify-content center
        align-items center


    .msite-tab
      height 30px
      overflow hidden
      padding-left 10px
      background-color #fff
      .tab-item
        float left
        height 30px
        line-height 30px
        text-align center
        font-size 16px
        padding 0 10px
        margin-right 10px
    .msite-nav
      height 236px
      width 100%
      position relative
      padding-bottom 10px
      background-color #E4E4E4
      .swiper-container
        width 100%
        height 200px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            position absolute
            top 0
            left 0
            img
              width 100%
              height 100%
      .mstie-ul
        width 100%
        height 36px
        background-color #fff
        display flex
        justify-content center
        align-items center
        overflow hidden
        .msite-item
          float left
          font-size 12px
          margin-right 20px
          &.msite-firstItem
            margin-left 15px
          .iconfont
            font-size 12px

    .msite-brand
      width 100%
      height 293px
      .msite-brandHeader
        font-size 20px
        height 55px
        display flex
        justify-content center
        align-items center
        background-color #fff
      .msite-brandUl
        width 360px
        height 238px
        margin 0 8px
        li
          width 50%
          height 118px
          float left
          position relative
          .msite-img
            position absolute
            top 0
            left 0
            padding 10px 0 0 10px
            .msite-text
              margin-bottom 5px
              font-size 15px
            .msite-price
              font-size 12px
              margin-bottom 5px
          img
            width 100%
            height 100%
            background-color #f4f4f4


</style>
