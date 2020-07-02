<template>
  <!-- 评论内容 -->
  <div class="CommentItem-body">
    <div class="CommentItem-content">{{commentMsg.content}}</div>
    <div class="CommentItem-icons">
      <div class="CommentItem-icon" :class="{IsLike:commentMsg.isLike}" @click="changeLike">
        <span class="icon-zan1 iconfont"></span>
        <span class="CommentItem-desc">{{commentMsg.likeNum ? commentMsg.likeNum :'0'}}</span>
      </div>
      <div
        class="CommentItem-icon HoverIcon"
        :class="{showIcon:isReply}"
        @click="isReply = !isReply"
      >
        <span class="icon-pinglun1 iconfont"></span>
        <span class="CommentItem-desc">{{isReply? '取消回复':'回复'}}</span>
      </div>
      <div
        class="CommentItem-icon HoverIcon"
        :class="{showIcon:isReply}"
        @click="commentMsg.isDislike = !commentMsg.isDislike"
      >
        <span class="icon-cai iconfont"></span>
        <span class="CommentItem-desc">{{commentMsg.isDislike ? "取消踩" : "踩"}}</span>
      </div>
    </div>
    <!-- 回复 -->
    <transition name="fade">
      <div class="CommentReply" v-if="isReply">
        <el-input
          type="textarea"
          resize="none"
          autosize
          :placeholder="'回复'+commentMsg.name"
          v-model="replyMsg"
        ></el-input>
        <button class="CommentReply-button" :disabled="replyMsg.length==0">发表</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "comment-body",
  props: {
    commentMsg: Object
  },
  data() {
    return {
      replyMsg: "",
      disabled: true,
      isReply: false //是否回复
    };
  },
  methods: {
    //   点赞/取消赞
    changeLike() {
      if (this.commentMsg.isLike) {
        this.commentMsg.likeNum--;
      } else {
        this.commentMsg.likeNum++;
      }
      this.commentMsg.isLike = !this.commentMsg.isLike;
    }
  }
};
</script>
<style lang='scss' >
@import "../assets/css/config";
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// 评论身
.CommentItem-body {
  position: relative; //为了分割线
  color: #1a1a1a;
  padding: 0 0 10px 33px;
  
  .CommentItem-content {
    margin-bottom: 6px;
  }
  .CommentItem-icons {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 4px;
    color: $fontColor;
    .CommentItem-icon {
      display: flex;
      align-items: center;
      .CommentItem-desc {
        margin-left: 4px;
        cursor: pointer;
      }
    }
    .HoverIcon {
      margin-left: 20px;
      transition: opacity 0.2s;
      opacity: 0;
    }

    &:hover .HoverIcon {
      opacity: 1;
    }
    .showIcon {
      opacity: 1;
    }
  }
  .IsLike {
    color: $mainColor;
    &:hover {
      color: #175199;
    }
  }
  //回复
  .CommentReply {
    transition: all 0.2s;
    padding: 12px 0;
    display: flex;
    align-items: center;
    .el-textarea {
      width: 86%;
    }
    .CommentReply-input {
      padding: 6px 12px;
      font-size: 14px;
      border: 1px solid $fontColor;
      border-radius: 4px;
    }
    .CommentReply-button {
      height: 36px;
      line-height: 36px;
      padding: 0 12px;
      margin-left: 20px;
      color: #ffffff;
      background: $mainColor;
    }
  }
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    display: block;
    margin: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    content: "";
  }
}
</style>