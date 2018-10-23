<template>
  <div class="login">
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
    <div class="login-logoC">
      <div class="login-logo">
        <img src="./img/yan.png" alt="logo">
      </div>
    </div>
    <div class="login-login">
      <button class="login-btn login-p">
        <span class="item_icon">
        <i class="iconfont icon-mobilephone"></i>
      </span>
        <span>手机号码登录</span>
      </button>
      <button class="login-btn login-y">
        <span class="item_icon">
        <i class="iconfont icon-duanxin"></i>
      </span>
        <span>邮箱账号登录</span>
      </button>

      <span class="login-telRegister">手机号快捷注册》</span>

    </div>
    <div class="login-footer">
      <div class="login-others">
        <span class="item_icon">
        <i class="iconfont icon-weixin"></i>
      </span>
        <span>微信</span>
      </div>
      <div class="login-others">
        <span class="item_icon">
        <i class="iconfont icon-qq"></i>
      </span>
        <span>QQ</span>
      </div>
      <div class="login-others">
        <span class="item_icon">
        <i class="iconfont icon-weibo"></i>
      </span>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {

    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login
    .shopHeader
      height 44px
      width 100%
      background #ccc
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
    .login-logoC
        width 375px
        height 205px
        position relative
        .login-logo
          width 144px
          height 45px
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          img
            width 100%
            height 100%
      .login-login
        display flex
        justify-content center
        align-content center
        flex-direction column
        .login-btn
          display block
          margin 0 auto
          width 335px
          height 47px
          font-size 14px
          border 1px solid #b4282d
          border-radius 6px
          margin-bottom  12px
          &.login-p
            background-color #b4282d
            color #fff
          &.login-y
            background-color #fff
            color #b4282d
        .login-telRegister
          text-align center
          font-size 14px
      .login-footer
        width 100%
        position absolute
        left 0
        bottom 50px
        display flex
        justify-content center
        .login-others
          width 80%
          display flex
          justify-content center
          color #ccc
          .iconfont
            margin-right 8px
</style>
