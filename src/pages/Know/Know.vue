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
    <div class="know-wrapperC">
      <div class="know-wrapper">
        <div class="know-swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./img/1.jpg" alt="qq">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./img/1.jpg" alt="qq">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./img/1.jpg" alt="qq">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./img/1.jpg" alt="qq">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="know-ceHua">
          <div class="know-ceHuaSwiperC">
            <div class="know-ceHuaSwiper">
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
              <a href="javascript:;">
                <div class="know-ceHuaSwiperBimg" ></div>
                <div class="know-ceHuaSwiperText">严选推荐</div>
              </a>
            </div>
          </div>
        </div>
        <div class="know-tuiJian">
          <div class="know-tuiJianWrapper">
            <h2 class="know-tuiJianTitle">为你推荐</h2>
            <a href="javaScript:;">
              <div class="know-tuiJianTop">
                <div class="know-tuiJianHeader">
                  <div class="know-tuiJianHeaderText">严选推荐</div>
                  <div class="know-tuiJianHeaderImg">
                    <img src="./img/1.jpg" alt="ww">
                  </div>
                </div>
                <div class="know-tuiJianBottom">
                  <div class="know-tuiJianBottomT">
                    <div class="know-tuiJianBottomTLeft">北方入秋冬，该添加这些装备</div>
                    <div class="know-tuiJianBottomTRight"><span>9.9元起</span></div>
                  </div>
                  <div class="know-tuiJianBottomB">暖气房神器，大衣羽绒，补水妙方</div>
                </div>
              </div>
            </a>
            <a href="javaScript:;">
              <div class="know-tuiJianTop">
                <div class="know-tuiJianHeader">
                  <div class="know-tuiJianHeaderText">严选推荐</div>
                  <div class="know-tuiJianHeaderImg">
                    <img src="./img/1.jpg" alt="ww">
                  </div>
                </div>
                <div class="know-tuiJianBottom">
                  <div class="know-tuiJianBottomT">
                    <div class="know-tuiJianBottomTLeft">北方入秋冬，该添加这些装备</div>
                    <div class="know-tuiJianBottomTRight"><span>9.9元起</span></div>
                  </div>
                  <div class="know-tuiJianBottomB">暖气房神器，大衣羽绒，补水妙方</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$store.dispatch('getShiwuData')
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
      new BScroll('.know-ceHuaSwiperC', {
        click: true,
        scrollX: true,
        scrollY: false
      })
      new BScroll('.know-wrapperC', {
        click: true,
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .know
    width 100%
    background-color #e4e4e4
    .shopHeader
      height 44px
      width 100%
      background #EDEDED
      display flex
      text-align center
      align-items center
      justify-content space-around
      position relative
      z-index 2
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
    .know-wrapperC
      height 623px
      width 100%
      .know-swiper
        height 193px
        width 100%
        padding-bottom 10px
        background-color #fff
        .swiper-wrapper
          .swiper-slide
             width 350px
             height 193px
             img
              width 350px
              height 193px
      .know-ceHua
        height 113px
        padding 10px
        background-color #fff
        .know-ceHuaSwiperC
          height 133px
          .know-ceHuaSwiper
            height 133px
            width 1200px
            a
              width 82px
              height 105px
              padding-right 10px
              display block
              float left
              .know-ceHuaSwiperBimg
                width 82px
                height 82px
                padding-bottom 10px
                background-image url('./img/1.jpg')
                background-repeat no-repeat
                background-size 82px 82px
              .know-ceHuaSwiperText
                width 92px
                height 12px
                font-size 12px
                margin-left 15px

      .know-tuiJian
        width 100%
        margin-top 10px
        background-color #fff
        .know-tuiJianWrapper
          width 355px
          margin 0 17px
          .know-tuiJianTitle
            width 345px
            height 60px
            line-height 60px
            text-align center
            font-size 19px
            margin 0 auto
          a
            width 345px
            height 287px
            .know-tuiJianTop
              width 100%
              .know-tuiJianHeader
                position relative
                .know-tuiJianHeaderText
                  width 56px
                  height 15px
                  line-height 15px
                  text-align center
                  font-size 12px
                  color #000
                  border-radius 7px
                  background-color #fff
                  position absolute
                  top 10px
                  left 10px
                .know-tuiJianHeaderImg
                  width 344px
                  height 293px
                  img
                    width 100%
                    height 100%


              .know-tuiJianBottom
                width 100%
                height 93px
                padding 10px 10px 25px 10px
                box-sizing border-box
                .know-tuiJianBottomT
                  width 100%
                  height 21px
                  margin-bottom 5px
                  .know-tuiJianBottomTLeft
                    float left
                    width 248px
                    height 100%
                    margin-right 15px
                  .know-tuiJianBottomTRight
                    float left

                .know-tuiJianBottomB
                  height 22px
                  width 100%
                  font-size 13px
</style>
