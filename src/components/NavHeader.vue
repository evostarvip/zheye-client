  <!-- 顶部导航 -->
<template>
  <div class="AppHeader">
    <div class="AppHeader-inner">
      <p class="webfont">哲也</p>
      <!-- 导航栏 -->
      <ul class="AppHeader-tabs">
        <li class="Tabs-item">
          <a href="#" class="Tabs-link isActive">首页</a>
        </li>
      </ul>
      <!-- 搜索框 -->
      <div class="SearchBar" :class="{IsFocus:isFocus}">
        <input
          @focus="inputFocus"
          @blur="inputBlur"
          type="text"
          class="SearchBar-input"
          placeholder="计算机学生应该如何学习"
        />
        <span class="iconfont icon-icon161603" :class="{Icons:isFocus}"></span>
      </div>
      <button class="AskButton" :class="{HideButton:isFocus}" @click="showModal=true">提问</button>
      <!-- 用户区域 -->
      <div class="AppHeader-userInfo">
        <div v-if="isLogin" class="AppHeader-profile">
          <div class="AppHeader-msg">
            <span class="iconfont icon-weibiaoti-_fuzhi"></span>
            <!-- <pover-content></pover-content> -->
          </div>

          <img
            src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
            class="AppHeader-profileAvatar"
          />
        </div>
        <button v-else class="LoginButton" @click="showLoginModal=true">登陆 / 注册</button>
      </div>
    </div>
    <!-- 提问遮罩层 -->
    <modal :showModal="showModal" @cancel="showModal = false">
      <template v-slot:dialog>
        <div class="QuesModal-content">
          <!-- 回答问题区域 -->
          <div class="Ask-item">
            <img
              src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
              class="Avatar"
            />
            <div class="AskTitle-wrap">
              <textarea
                @input="listenChange"
                v-model="askTitle"
                class="AskTitle"
                rows="3"
                placeholder="写下你的问题，准确地描述问题更容易得到解答"
              ></textarea>
              <div class="AskFieldTip">{{askTip}}</div>
            </div>
          </div>
          <textarea class="AskDetial" placeholder="输入问题背景、条件等详细信息（选填）"></textarea>
          <!-- 发布问题 -->
          <button class="AskButton" :disabled="disabled" @click="publishQues">发布问题</button>
        </div>
      </template>
    </modal>
    <!-- 登陆遮罩层 -->
    <modal :showModal="showLoginModal" @cancel="showLoginModal = false">
      <template v-slot:dialog>
        <div class="Login-wrap">
          <el-tabs v-model="activeName">
            <el-tab-pane label="立即注册" name="register">
              <div class="Sign-wrap">
                <input class="SignInput" type="text" placeholder="手机号或者邮箱" />
              </div>
              <div class="Sign-wrap">
                <input class="SignInput" type="password" placeholder="密码" />
              </div>
              <div class="RemeberMe"></div>
              <button class="SubmitButton">注册</button>
            </el-tab-pane>
            <el-tab-pane label="密码登陆" name="login">
              <div class="Sign-wrap">
                <input class="SignInput" type="text" placeholder="手机号或者邮箱" />
              </div>
              <div class="Sign-wrap">
                <input class="SignInput" type="password" placeholder="密码" />
              </div>
              <div class="RemeberMe">
                <el-checkbox v-model="checked">7天内免登录</el-checkbox>
              </div>
              <button class="SubmitButton">登陆</button>
            </el-tab-pane>
          </el-tabs>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "nav-header",
  components: {
    Modal,
    // PoverContent
  },
  data() {
    return {
      isFocus: false,
      showModal: false,
      showLoginModal: false,
      disabled: true,
      askTip: "",
      askTitle: "",
      isLogin: true,
      activeName: "login", //elmentui
      checked: false //elmentui
    };
  },
  methods: {
    //监听input选中
    inputFocus() {
      this.isFocus = true;
    },
    inputBlur() {
      this.isFocus = false;
    },
    //监听标题文字数量
    listenChange() {
      if (this.askTitle.length < 4) {
        this.askTip = "至少输入4个字";
        this.disabled = true;
      } else {
        this.askTip = "";
        this.disabled = false;
      }
    },
    //发表问题
    publishQues() {
      console.log("发表问题");
      this.showModal = false;
    }
  }
};
</script>
<style lang='scss' >
@import "../assets/css/config";
.AppHeader {
  position: sticky;
  height: 52px;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  &-inner {
    display: flex;
    width: 1000px;
    height: 52px;

    padding: 0 16px;
    margin: 0 auto;
    align-items: center;
  }
  &-tabs {
    display: flex;
    margin: 0 23px;
    .Tabs-item {
      position: relative;
    }
    .Tabs-link {
      padding: 14px 0;
      text-align: center;
    }
    .isActive {
      color: #444;
      font-weight: 600;
    }
    .isActive::after {
      display: block;
      position: absolute;
      right: 0;
      bottom: -14px;
      left: 0;
      height: 3px;
      background: $mainColor;
      content: "";
    }
  }
  // 搜索提问
  .SearchBar {
    color: $fontColor;
    background: #f6f6f6;
    padding: 4px 10px;
    width: 312px;
    font-size: 14px;
    display: flex;
    border: 1px solid #ebebeb;
    align-items: center;
    border-radius: 5px;
    margin-left: 30px;
    transition: width 0.4s ease, background 0.3s ease;
    &-input {
      background: inherit;
      border: none;
      flex: 1;
      height: 24px;
      padding-left: 12px;
      font-size: 15px;
    }
    .icon-icon161603 {
      font-size: 18px;
    }
    .Icons {
      color: $mainColor;
    }
  }
  .IsFocus {
    border: 1px solid #1a1a1a;
    background: #fff;
    width: 380px;
  }
  .AskDetial {
    min-height: 78px;
    border: 1px solid #ebebeb;
    padding: 6px 12px;
    font-size: 14px;
  }
  .AskButton {
    background: $mainColor;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
    padding: 6px 14px;
    margin-left: 16px;
    transition: display 0.3s linear 0.3;
  }
  .HideButton {
    display: none;
  }
  // 用户
  &-userInfo {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .AppHeader-profile {
      display: flex;
      align-items: center;
      .AppHeader-msg {
        position: relative;
        .icon-weibiaoti-_fuzhi {
          font-size: 22px;
          color: $fontColor;
        }
      }

      .AppHeader-profileAvatar {
        width: 30px;
        height: 30px;
        border-radius: 2px;
        margin-left: 30px;
      }
    }

    .LoginButton {
      font-size: 14px;
      padding: 6px 12px;
      color: $mainColor;
      background: #fff;
      border: 1px solid $mainColor;
      &:hover {
        cursor: pointer;
        background: rgba(0, 132, 255, 0.1);
      }
    }
  }
  .webfont {
    color: $mainColor;
  }
  //提问
  .QuesModal-content {
    width: 536px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    .Ask-item {
      display: flex;
      .Avatar {
        border-radius: 3px;
        width: 40px;
        height: 40px;
        margin: 3px 16px 0 0;
      }
      .AskTitle-wrap {
        flex: 1;
        min-height: 90px;
        .AskTitle {
          width: 100%;
          border: none;
          font-size: 18px;
          color: #858fa6;
        }
        .AskFieldTip {
          text-align: right;
          color: #f1403c;
          font-size: 15px;
        }
      }
    }

    .AskButton {
      color: #fff;
      background-color: #0084ff;
      width: 90px;
      padding: 8px 16px;
      font-size: 14px;
      margin-top: 10px;
      align-self: flex-end;
      &:disabled {
        opacity: 0.5;
      }
    }
  }
  // 登陆
  .Login-wrap {
    width: 400px;
    padding: 0 24px 30px;
    .el-tabs__nav-wrap::after {
      background-color: transparent !important;
    }
    .el-tabs__active-bar {
      background: $mainColor;
      height: 3px;
    }
    .el-tabs__item {
      font-size: 16px;
      color: #444;
    }
    .el-tabs__item.is-active {
      color: #1a1a1a;
      font-weight: 600;
    }
    .Sign-wrap {
      width: 100%;
      height: 36px;
      padding: 12px;
      border-bottom: 1px solid #ebebeb;
      .SignInput {
        width: 96%;
        border: none;
        height: 46px;
        font-size: 14px;
      }
    }
    .RemeberMe {
      margin-top: 14px;
      text-align: right;
      .el-checkbox__input.is-checked + .el-checkbox__label {
        color: $mainColor;
      }
    }
    .SubmitButton {
      width: 100%;
      background: $mainColor;
      color: #fff;
      height: 36px;
      line-height: 36px;
      margin-top: 30px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
}
</style>