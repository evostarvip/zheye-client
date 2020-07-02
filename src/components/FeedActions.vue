<template>
  <div class="ContentItem-actions">
    <div class="Vote-wrap">
      <span class="icon-down-fill-xs iconfont"></span>
      <span class="Vote-desc">赞同 10</span>
    </div>
    <div class="Vote-wrap">
      <span class="icon-down-fill1-xs iconfont"></span>
    </div>
    <div class="Actions-wrap" @click="changeReview">
      <span class="iconfont icon-pinglun1"></span>
      <span class="Actions-desc" >{{isReview? "收起评论":`19条评论`}}</span>
    </div>
    <div class="Actions-wrap">
      <span class="iconfont icon-xiaofeiji"></span>
      <span class="Actions-desc">分享</span>
    </div>
    <div class="Actions-wrap">
      <span class="iconfont icon-shoucang"></span>
      <span class="Actions-desc">收藏</span>
    </div>
    <div class="Actions-wrap">
      <span class="iconfont icon-xihuan"></span>
      <span class="Actions-desc">喜欢</span>
    </div>
    <div class="Actions-wrap">
      <span class="iconfont icon-shenglvehao"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "feed-action",
  data() {
    return {
      isReview: false
    };
  },
  methods: {
    //改变评论状态
    changeReview() {
      this.$emit("changeReview", !this.isReview);
      this.isReview = !this.isReview;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/css/config.scss";
.ContentItem-actions {
  display: flex;
  align-items: center;
  padding-top: 10px;
  color: #646464;
  background: #fff;
  .Vote-wrap {
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    color: $mainColor;
    background: rgba(0, 132, 255, 0.1);
    font-size: 14px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: rgba(0, 132, 255, 0.2);
    }
  }
  .Actions-wrap {
    display: flex;
    align-items: center;
    color: $fontColor;
    font-size: 14px;
    margin-left: 24px;
    cursor: pointer;
  }
  .Actions-desc,
  .Vote-desc {
    margin-left: 4px;
  }
}
</style>