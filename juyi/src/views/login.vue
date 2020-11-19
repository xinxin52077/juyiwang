<template>
  <div class="login">
    <div class="content">
      <div class="wrapper">
        <!-- 登录 -->
        <div class="login_wrapper">
          <!-- 标题 -->
          <div class="title">
            <a href="#">账号登录</a>
            <span>|</span>
            <a href="#">微信登录</a>
          </div>

          <!-- 输入框 -->
          <div class="form-area">
            <div class="error" v-show="show">{{errors.phone || errors.code}}</div>
            <div class="form-item">
              <input v-model="phone" type="tel" placeholder="请输入手机号" maxlength="11" />
            </div>

            <div class="form-item">
              <input v-model="password" type="password" placeholder="请输入密码" />
            </div>

            <div class="form-item forget">
              <span>忘记密码</span>
            </div>

            <div class="form-item but">
              <button @click="handleLogin()">{{ LoginBut }}</button>
            </div>
          </div>

          <!-- 账号登录 -->
          <div class="account">
            还没有账号？立即<a href="#">免费注册</a>
          </div>
        </div>


        <!-- 诗句 -->
        <div class="poem">
          <div class="title">
            《劝学》
            <span>【作者】荀子 【朝代】春秋战国</span>
          </div>
          <p>骐骥一跃，不能十步；</p>
          <p>驽马十驾，功在不舍。</p>
          <p>锲而舍之，朽木不折；</p>
          <p>锲而不舍，金石可镂。</p>
        </div>

        <!-- 页尾 -->
        <div class="bottom">
          <span>Copyright 2020-2021 橘易网 jvyi.cn All Rights Reserved. 备案号：</span>
          <a href="#">粤ICP备18152379号-4</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "13160898450",
      password: "",
      LoginBut: "登录",
      errors: {},
      show: false
    }
  },
  methods: {
    handleLogin() {
      if (this.validatePhone()) {
        // 手机号通过验证之后，才可以触发事件
        this.validatePassword();
      }
    },
    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        this.show = true;
        this.errors = {
          phone: "请输入手机号码",
        };
        // console.log(this.errors.phone);
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.show = true;
        this.errors = {
          phone: "手机号码格式不正确，请重新输入",
        };
        return false;
      } else {
        this.show = false;
        this.errors = {};
        return true;
      }
    },
    validatePassword() {
      // 输入密码
      if(!this.password) {
        this.show = true;
        this.errors = {
          phone: "请输入密码",
        };
        // console.log(this.errors.password);
        return false;
      }else if(this.password != '123') {
        this.show = true;
        this.errors = {
          phone: "密码与账号不一致",
        };
        return false;     
      } else {
        this.LoginBut = "登录中...";
        // 设置登录状态
        localStorage.setItem("ele_login", this.phone );
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.login
  width: 100%
  height: 100%
.content
  width: 100%
  height: 100%
  // background: url('../assets/image/bg.jpg')
  .wrapper
    position: relative
    width: 600px
    height: 100%
    margin: 0 auto
    // background-color: red
    .poem
      position: absolute
      top: 80px
      left: 0
      .title
        height: 18px
        color: #a78967
        margin-bottom: 22px
        font-size: 18px
        span
          font-size: 6px
      p
        font-size: 8px
        color: #999
        margin: 0 0 12px
    .bottom
      position: absolute
      bottom: 5px
      left: 30%
      font-size: 6px
      color: #666
      a
        color: #333
      a:hover
        color: #23527c
        text-decoration: underline
    .login_wrapper
      position: absolute
      right: 0
      width: 225px
      text-align: center
      padding: 32.5px 0
      margin: 34px 10px 0 0
      border-radius: 5px
      box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.2)
      font-size: 0
      background-color: #fff
      .title
        font-size: 12px
        margin-bottom: 43px
        span
          font-size: 8px
          margin: 0 15px
          color: #ddd
        a
          color: #ff7500
      .form-area
        position: relative
        .error
          position: absolute
          top: -13px
          left: 0
          font-size: 7px
          // margin-bottom: 9px
          text-align: left
          margin-left: 23px
          color: #e65439
        .form-item
          width: 180px
          height: 25px
          border: 1px solid #ddd
          border-radius: 3px
          margin: 0 auto
          margin-bottom: 9px
          // padding-left: 5px
          box-sizing: border-box
          font-size: 7px
          // background-color: red
          input
            width: calc( 100% - 7px )
            height: 100%
            padding-left: 5px
            border-radius: 3px
        .forget
          width: calc( 100% - 7px )
          height: 100%
          text-align: left
          margin-left: 22.5px
          color: #666
          border: none
        .but
          border: none
          margin-bottom: 18px
          button
            width: 100%
            height: 100%
            border: none
            border-radius: 3px
            color: #fff0e3
            background-color: #ff7500
            font-size: 7px
      .account
        width: 180px
        margin: 0 auto 11px
        font-size: 7px
        color: #999
        a
          margin-left: 3px
          color: #ff7500
        a:hover
          text-decoration: underline
</style>
