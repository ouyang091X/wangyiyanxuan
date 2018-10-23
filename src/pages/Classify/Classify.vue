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
      <ul class="class-leftUl" >
        <li  v-for="(category, index) in category_data" :key="index">
          <a href="javascript:;" class="active">{{category.name}}</a>
        </li>
      </ul>
    </div>
    <div class="class-right">
      <div class="class-rightImg">
        <img src="../Know/img/1.jpg" alt="ff">
      </div>
      <ul class="class-rightUl">
        <li  >
          <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="ff">
          <div class="class-rightLiText">服装每满199减19</div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['category_data'])
    },

    mounted () {
      this.$store.dispatch('getClassifyData')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .class
    width 100%
    height 100%
    .class-header
      width 100%
      height 44px
      display flex
      justify-content center
      align-items center
      bottom-border-1px($bc)
      .class-headerSearch
        height 28px
        width 345px
        line-height 28px
        text-align center
        background-color #ccc
        border-radius 5px
    .class-left
      float left
      width 80px
      border-right 1px solid #e4e4e4
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
