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
    <div class="msite-wrapperC">
      <div class="msite-wrapper">
        <div class="msite-tab">
          <ul class="msite-tabWrapper">
            <li class="tab-item" v-for="(cate,index) in home_data.cateList">
              <a :href="cate.bannerUrl">
                {{cate.name}}
              </a>
            </li>
          </ul>
        </div>
        <nav class="msite-nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(focus,index) in home_data.focusList">
                <img :src="focus.picUrl" alt="qq">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

          </div>
          <ul class="mstie-ul">
            <li class="msite-item " v-for="(p , index) in home_data.policyDescList">
              <span class="item_icon">
                 <i class="iconfont icon-star"></i>
               </span>
              <span>{{p.desc}}</span>
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
            <li v-for="(tag,index) in home_data.tagList">
              <div class="msite-img">
                <div class="msite-text">{{tag.name}}</div>
                <div class="msite-price">{{tag.floorPrice}}元起</div>
              </div>
              <img :src="tag.picUrl" alt="11">
            </li>
          </ul>
        </div>
        <div class="msite-show">
          <ul class="msite-showUl">
            <li>
              <div class="msite-showMore">
                <div class="msite-showBox">
                  <div class="msite-showNew">
                    新品首发
                  </div>
                  <div class="msite-showGo">
                    <span class="msite-showSee">查看更多</span>
                    <span class="item_icon">
                    <i class="iconfont icon-right"></i>
                  </span>
                  </div>
                </div>
              </div>
              <div class="msite-ceHua">
                <div class="msite-ceHuaSwiperC">
                  <div class="msite-ceHuaSwiper">
                    <a href="javascript:;" v-if="" v-for="(newItemNewUser,index) in home_data.newItemNewUserList" :key="index">
                      <div class="msite-ceHuaSwiperBimg" >
                        <img :src="newItemNewUser.listPicUrl" alt="ww">
                      </div>
                      <div class="msite-ceHuaSwiperText">{{newItemNewUser.name}}</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="msite-showMore">
                <div class="msite-showBox">
                  <div class="msite-showNew">
                    新品首发
                  </div>
                  <div class="msite-showGo">
                    <span class="msite-showSee">查看更多</span>
                    <span class="item_icon">
                    <i class="iconfont icon-right"></i>
                  </span>
                  </div>
                </div>
              </div>
              <div class="msite-ceHua">
                <div class="msite-ceHuaSwiperC">
                  <div class="msite-ceHuaSwiper">
                    <a href="javascript:;" v-if="" v-for="(newItemNewUser,index) in home_data.newItemNewUserList" :key="index">
                      <div class="msite-ceHuaSwiperBimg" >
                        <img :src="newItemNewUser.listPicUrl" alt="ww">
                      </div>
                      <div class="msite-ceHuaSwiperText">{{newItemNewUser.name}}</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
            <div class="msite-showMore">
              <div class="msite-showBox">
                <div class="msite-showNew">
                  新品首发
                </div>
                <div class="msite-showGo">
                  <span class="msite-showSee">查看更多</span>
                  <span class="item_icon">
                    <i class="iconfont icon-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="msite-ceHua">
              <div class="msite-ceHuaSwiperC">
                <div class="msite-ceHuaSwiper">
                  <a href="javascript:;" v-if="" v-for="(newItemNewUser,index) in home_data.newItemNewUserList" :key="index">
                    <div class="msite-ceHuaSwiperBimg" >
                      <img :src="newItemNewUser.listPicUrl" alt="ww">
                    </div>
                    <div class="msite-ceHuaSwiperText">{{newItemNewUser.name}}</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    computed: {
      ...mapState(['home_data'])
    },
    mounted () {
      this.$store.dispatch('getHomeData', () => {
        this.$nextTick(() => {
          this._initSB()
        })
      })


    },
    methods: {
      _initSB() {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })
        new BScroll('.msite-wrapperC', {
          click: true,
        })

        new BScroll('.msite-tab', {
          click: true,
          scrollX: true,
          scrollY: false
        })

        new BScroll('.msite-ceHuaSwiperC', {
          click: true,
          scrollX: true,
          scrollY: false
        })
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .msite-header
      width 100%
      height 44px
      background-color #fff
      position relative
      z-index 2
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


    .msite-wrapperC
      height 573px
      width 100%
      .msite-tab
        height 30px
        padding-left 10px
        background-color #fff
        .msite-tabWrapper
          height 30px
          /*display flex*/
          width 640px
          .tab-item
            float left
            height 30px
            line-height 30px
            text-align center
            font-size 16px
            padding 0 10px
            margin-right 10px
            a
              display inline-block
      .msite-nav
        height 236px
        width 100%
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
          padding-left 10px
          .msite-item
            float left
            font-size 12px
            margin-right 20px
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
          overflow hidden
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


      .msite-show
        .msite-showUl
          .msite-showMore
            width 100%
            height 130px
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
            display flex
            justify-content center
            align-items center
            .msite-showBox
              width 120px
              height 63px
              .msite-showNew
                width 72px
                height 20px
                margin 0 auto
              .msite-showGo
                width 120px
                height 28px
                background #D8E5F1
                line-height 28px
                text-align center


        .msite-ceHua
            height 180px
            padding 10px
            background-color #fff
            .msite-ceHuaSwiperC
              height 133px
              .msite-ceHuaSwiper
                height 133px
                width 1200px
                a
                  width 140px
                  height 140px
                  padding-right 10px
                  display block
                  float left
                  .msite-ceHuaSwiperBimg
                    width 140px
                    height 140px
                    padding-bottom 10px
                    background-color #f4f4f4
                    img
                      display block
                      width 100%
                      height 100%
                  .msite-ceHuaSwiperText
                    width 92px
                    height 30px
                    font-size 12px
                    margin-left 15px

</style>
