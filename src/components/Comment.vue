<!-- 评论功能 -->
<template>
  <div class="Comment">
    <div class="CommentTopBar">19条评论</div>

    <div class="CommentItem" v-for="(item,index) in commentList" :key="index">
      <!-- 评论头 -->
      <div class="CommentItem-meta">
        <el-popover placement="bottom-start" visible-arrow="false" width="365" trigger="hover">
          <div class="UserCard-wrap">
            <div class="UserMessage">
              <div class="UserAvatar-wrap">
                <img
                  src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
                  class="UserAvatar"
                />
              </div>
              <span class="UserName">你猜猜</span>
            </div>
            <div class="UserContent">
              <div class="UserContent-detail">
                <div class="UserContent-title">回答</div>
                <div class="UserContent-num">0</div>
              </div>
              <div class="UserContent-detail">
                <div class="UserContent-title">关注者</div>
                <div class="UserContent-num">0</div>
              </div>
            </div>
            <div class="UserButton">
              <div class="AttentionBtn">
                <span class="iconfont icon-jia"></span>
                <span>关注</span>
              </div>
              <div class="ChatBtn">
                <span class="iconfont icon-xiaoxi"></span>
                <span>发私信</span>
              </div>
            </div>
          </div>
          <img
            slot="reference"
            src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
            class="CommentItem-avatar"
          />
        </el-popover>

        <span class="CommentItem-name">{{item.name}}</span>
        <span class="CommentItem-time">{{item.time}}</span>
      </div>
      <!-- 评论内容 -->
      <comment-body :commentMsg="item.commentMsg"></comment-body>
      <template v-if="item.replys.length>0">
        <div class="CommentItem-reply" v-for="(reply,replyIndex) in item.replys" :key="replyIndex">
          <div class="CommentItem-meta">
            <img
              src="http://img2.imgtn.bdimg.com/it/u=1354268575,1268995723&fm=26&gp=0.jpg"
              class="CommentItem-avatar"
            />
            <div class="CommentReply-users">
              <span class="CommentReply-name">{{reply.name}}</span>
              回复
              <span class="CommentReply-name">{{reply.responded}}</span>
            </div>
            <span class="CommentItem-time">{{reply.time}}</span>
          </div>
          <!-- 评论内容 -->
          <comment-body :commentMsg="reply.commentMsg"></comment-body>
        </div>
      </template>
    </div>
    <div class="Comment-footer">
      <el-input type="textarea" resize="none" autosize placeholder="写下你的评论……" v-model="comment"></el-input>
      <button class="CommentReply-button" :disabled="comment.length==0">发布</button>
    </div>
  </div>
</template>
<script>
import CommentBody from "@/components/CommentBody.vue";
export default {
  name: "comment",
  components: {
    CommentBody
  },
  data() {
    return {
      commentList: [
        {
          name: "英雄登场",
          time: "04-11",
          commentMsg: {
            name: "英雄登场",
            content: "你在说什么玩意",
            likeNum: "12",
            isLike: true,
            isDislike: false
          },
          replys: [
            {
              name: "回复的人",
              responded: "被回复的人",
              time: "04-11",
              commentMsg: {
                name: "回复的人",
                content: "你管我说什么玩意",
                likeNum: "0",
                isLike: false,
                isDislike: false
              }
            }
          ]
        },
        {
          name: "英雄登场",
          time: "04-11",
          commentMsg: {
            name: "英雄登场",
            content: "你在说什么玩意",
            likeNum: "12",
            isLike: true,
            isDislike: false
          },
          replys: [
            {
              name: "回复的人",
              responded: "被回复的人",
              time: "04-11",
              commentMsg: {
                name: "回复的人",

                content: "你管我说什么玩意",
                likeNum: "0",
                isLike: false,
                isDislike: false
              }
            }
          ]
        },
        {
          name: "英雄登场",
          time: "04-11",
          commentMsg: {
            name: "英雄登场",
            content: "你在说什么玩意",
            likeNum: "12",
            isLike: true,
            isDislike: false
          },
          replys: [
            {
              name: "回复的人",
              responded: "被回复的人",
              time: "04-11",
              commentMsg: {
                name: "回复的人",

                content:
                  "你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意你管我说什么玩意",
                likeNum: "12",
                isLike: true,
                isDislike: false
              }
            }
          ]
        }
      ],
      comment: ""
    };
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/css/config";
.Comment {
  transition: all 0.3s;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: #fff;
  margin-top: 12px;
  border-radius: 4px;

  &TopBar {
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
  }
  .CommentItem {
    padding: 12px 20px 10px;
    font-size: 15px;
    position: relative;
  }
  .CommentItem-meta {
    display: flex;
    height: 24px;
    margin-bottom: 4px;
    align-items: center;
    width: 100%;
    .CommentItem-avatar {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    .CommentItem-name {
      font-weight: 500;
      flex: 1;
    }
    .CommentItem-time {
      font-size: 14px;
      color: $fontColor;
    }
  }
  // 评论
  .CommentItem-reply {
    padding: 20px 0 12px 20px;
    color: $fontColor;
    .CommentReply-users {
      flex: 1;
    }
    .CommentReply-name {
      color: #1a1a1a;
      font-weight: 500;
    }
  }
  //写评论
  .Comment-footer {
    transition: all 0.5s;
    padding: 12px 0 12px 20px;
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
}
//用户卡片
.UserCard-wrap {
  background-color: #fff;
  padding: 0 10px;
  position: relative;
  .UserMessage {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #ebebeb;
  }
  .UserAvatar-wrap {
    width: 60px;
    height: 40px; //只是为了撑起一定高度，不一定要跟图片一样高
    margin-right: 20px;
  }
  .UserAvatar {
    width: 60px;
    height: 60px;
    position: absolute;
    top: -30px;
  }
  .UserContent {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .UserContent-detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 600;
      .UserContent-title {
        font-size: 14px;
        color: $fontColor;
      }
      .UserContent-num {
        font-size: 16px;
      }
    }
  }
  .UserButton {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
    margin-top: 10px;
    .AttentionBtn {
      background-color: $mainColor;
      color: #fff;
      width: 140px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 6px;
      border: 1px solid $mainColor;
      cursor: pointer;
    }
    .ChatBtn {
      color: $fontColor;
      width: 140px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 6px;
      border: 1px solid $fontColor;
      cursor: pointer;
    }
  }
}
</style>