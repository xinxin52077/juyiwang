<template>
  <div class="nav">
    <!-- 头部 -->
    <div class="header_top">
      <div class="header">
        <div class="header_left">
          <a class="logo">
            <img src="../assets/image/jv_logo.png" alt />
          </a>

          <a class="text">
            <img src="../assets/image/jv_kouhao.jpg" alt />
          </a>
        </div>

        <div class="header_right">
          <ul>
            <li><router-link class="hover" to="/service" href="#">服务支持</router-link></li>
            <li><router-link class="hover" to="/cooperation" href="#">合作伙伴</router-link></li>
            <li><router-link class="hover" to="/about" href="#">关于我们</router-link></li>
            <li class="signup"><router-link to="/register" href="#">免费注册</router-link></li>
            <li><router-link to="/login" href="#">登录</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.nav
    position: fixed
    top: 0 
    left: 0
    right: 0
.header_top
  width: 100%
  height: 40px
  margin: 0
  font-size: 0
  background-color: #fff
  .header
    width: 600px
    height: 40px
    margin: 0 auto
    // background-color: green
    .header_left
      display: inline-block
      position: relative
      cursor: pointer
      .logo
        display: inline-block
        width: 73px
        height: 25px
        margin: 5px 13px 10px 0
        img
          width: 73px
          height: 25px
      .text
        position: absolute
        top: 15px
        width: 76px
        height: 10.5px
        padding-left: 11px
        border-left: 1px solid #ff7500
    .header_right
      float: right
      line-height: 40px
      font-size: 7px
      li
        float: left
        margin-right: 21px
        a
          color: #333
        .hover:hover
          color: #23527c
          text-decoration: underline
      .signup
        width: 60px
        height: 19px
        line-height: 19px
        font-size: 8px
        text-align: center
        margin: 10.5px 0 0 0
        border-radius: 10px
        background-color: #ff7500
        a
          color: #fff
      li:last-of-type
        width: 45px
        height: 18px
        line-height: 18px
        text-align: center
        margin: 0 0 0 10px
        margin-top: 10.5px
        border: 1px solid #ff7500
        border-radius: 10px
        font-size: 8px
        a
          color: #ff7500
</style>
