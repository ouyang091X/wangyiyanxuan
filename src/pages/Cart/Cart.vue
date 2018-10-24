<template>
  <div class="cart">
    <div class="cart-header">
      <div class="cart-headerText">
        <span >购物车</span>
      </div>
      <div  class="cart-headerQuan">
        <span >领券</span>
      </div>
    </div>

    <ul class="cart-text">
      <li>30天无理由退货</li>
      <li>48小时快速退款</li>
      <li>满88元免包邮</li>
    </ul>

    <div class="cart-cartImg">
      <div class="cart-img">
        <div class="cart-imgIcon">
         <span class="item_icon">
           <i class="iconfont icon-gouwuche1"></i>
         </span>
        </div>
        <div class="cart-imgText">去添加点什么吧</div>
      </div>
    </div>

    <div class="cart-btn">
      <button class="cart-btnLogin">登录</button>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cart
    height 100%
    width 100%
    background-color #EDEDED
    .cart-header
      height 44px
      width 100%
      background-color #fff
      position relative
      .cart-headerText
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        font-size 24px
      .cart-headerQuan
        width 90px
        height 88px
        position absolute
        right 0
        top 12px
        color #ff2835
        margin 0 -20px
    .cart-text
      width 100%
      height 70px
      padding 18px
      li
        float left
        color #7e8c8d
        font-size 12px
        padding-right 40px
    .cart-cartImg
      display flex
      justify-content center
      .cart-img
        height 150px
        width 150px
        .cart-imgIcon
          height 124px
          width 124px
          .item_icon
            display block
            .iconfont
              font-size 124px
              color #7e8c8d
        .cart-imgText
          color #ccc
          font-size 14px
          margin-left 15px
    .cart-btn
      width 100%
      height 46px
      margin-top 20px
      display flex
      justify-content center
      .cart-btnLogin
        width 240px
        height 100%
        background-color #b4282d
        border 1px solid #b4282d
        border-radius 5px
        color #fff
        font-size 16px
</style>
