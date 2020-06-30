<template>
  <div class="AppHeader">
    <div class="AppHeader-inner">
      <p class="webfont">哲也</p>
      <!-- 导航栏 -->
      <ul class="AppHeader-Tabs">
        <li class="Tabs-item">
          <a href="#" class="Tabs-link isActive">首页</a>
        </li>
      </ul>

      <!-- 用户区域 -->
      <div class="AppHeader-userInfo">
        <div class="AppHeader-profile">
          <img
            src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
            class="AppHeader-profileAvatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header"
};
</script>
<style lang='scss' scoped>
@import '../assets/css/config';
.AppHeader {
  position: relative;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  &-inner {
    position: relative;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    align-items: center;
  }
  &-Tabs {
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
  &-userInfo {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
     .AppHeader-profileAvatar{
         width: 30px;
         height: 30px;
         border-radius: 2px;
     }
  }
  .webfont{
    color: $mainColor;
  }
  
}
</style>