<template>
  <div class="class">
    <div class="class-header">
      <div class="class-headerSearch">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜索商品，共16676款好物</span>
      </div>
    </div>
    <div class="class-left">
      <div class="class-leftWrapper">
        <ul class="class-leftUl" >
          <li  v-for="(category, index) in category_data" :key="index" @click="selectItem(index)">
            <a href="javascript:;" :class="{active: select===index }">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="class-right">
      <div class="class-rightImg">
        <img src="../Know/img/1.jpg" alt="ff">
      </div>
      <ul class="class-rightUl">
        <li v-if="category_data.length"
            v-for="(subCate,index) in category_data[select].subCateList" :key="index">
          <img :src="subCate.bannerUrl" alt="ff">
          <div class="class-rightLiText">{{subCate.name}}</div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        select:0
      }
    },
    computed: {
      ...mapState(['category_data'])
    },

    mounted () {
      this.$store.dispatch('getClassifyData',() => {
          this.$nextTick(() => {
            this._Scroll()
          })
      })
    },
    methods: {
      _Scroll() {
        new BScroll('.class-leftWrapper', {
          click: true
        })
      },
      selectItem (index) {
        this.select = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .class
    width 100%
    .class-header
      width 100%
      height 44px
      display flex
      justify-content center
      align-items center
      position relative
      z-index 2
      bottom-border-1px($bc)
      .class-headerSearch
        height 28px
        width 345px
        line-height 28px
        text-align center
        background-color #e4e4e4
        border-radius 5px
    .class-left
      float left
      width 80px
      border-right 1px solid #e4e4e4
      .class-leftWrapper
        height 572px
        overflow hidden
        .class-leftUl
          li
            width 100%
            padding-top 25px
            text-align center
            a
              display: block;
              font-size 14px
              height 25px
              width 100%
              line-height 25px
              &.active
                border-left 2px solid #b4282d
                color #b4282d

    .class-right
      float right
      width 264px
      padding 15px
      .class-rightImg
        width 264px
        height 96px
        border-radius 50%
        margin-bottom 15px
        img
          width 100%
          height 100%
      li
        width 33%
        float left
        img
          width 72px
          height 72px
        .class-rightLiText
          width 72px
          height 36px
          font-size 12px


</style>
