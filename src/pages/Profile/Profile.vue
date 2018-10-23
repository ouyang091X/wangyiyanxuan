<template>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-user">
        <div class="profile-leftImg">
          <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="kk">
        </div>
        <div class="profile-leftUser">
          <div class="profile-leftUserTel">
            <span>13677921273</span>
          </div>
          <div class="profile-leftUserText">
            <span>普通用户</span>
          </div>
        </div>
      </div>
      <div class="profile-superMember">
        <div class="profile-superMemberIcon">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        </div>
        <div  class="profile-superMemberRight">
          <div  class="profile-superMemberName">
            <span>超级会员</span>
          </div>
          <div  class="profile-superMemberUse">
            <span>立即试用</span>
            <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-class">
      <ul class="profile-classUl">
        <li>
          <a href="javascript:;">
            <span class="item_icon">
              <i class="iconfont icon-sousuo"></i>
            </span>
              <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="profile-classText">我的订单</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    height 100%
    .profile-info
      width 100%
      height 135px
      background-image url(//yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png)
      .profile-user
        width 70%
        height 71px
        float left
        padding 32px 0 32px 15px
        box-sizing border-box
        .profile-leftImg
          width 71px
          height 71px
          float: left
          img
            width 100%
            height 100%
            display block
            border-radius 50%
        .profile-leftUser
          float left
          margin 18px
          .profile-leftUserTel
            color #fff
            margin-bottom 5px
          .profile-leftUserText
            color #fff
            font-size 14px
      .profile-superMember
        float right
        width 30%
        height 42px
        background-color #333
        margin  45px 0
        border-radius 21px 0 0 21px
        .profile-superMemberIcon
          width 28px
          height 28px
          float left
          margin-left 8px
          margin-top 8px
          display flex
          justify-content center
          align-items center
          .iconfont
            display block
            font-size 24px
            color #ccc
        .profile-superMemberRight
          float right
          width 70px
          margin-top 5px
          box-sizing border-box
          .profile-superMemberName
            color #fff
            margin-bottom  5px
            font-size 13px
            box-sizing border-box
          .profile-superMemberUse
            color #ccc
            font-size 12px
            .iconfont
              font-size 12px

    .profile-class
      width 100%
      .profile-classUl
        background-color #e4e4e4
        padding-left: 1px;
        padding-top: 1px;
        li
          width 33%
          height 80px
          float left
          padding-top  10px
          display flex
          justify-content center
          align-items center
          background: white;
          margin-right: 1px;
          margin-bottom: 1px;

          .item_icon
            display block
            padding-left 18px
            box-sizing border-box
            .iconfont
              font-size 25px
          .profile-classText
            display block




</style>
