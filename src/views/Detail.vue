<template>
  <div id="detail">
    <!-- 头部 -->
    <div class="QuestionHeader">
      <div class="QuestionHeader-content">
        <div class="QuestionHeader-main">
          <div class="QuestionHeader-tags">
            <div class="QuestionHeader-tag" v-for="(item,index) in tagList" :key="index">{{item}}</div>
          </div>
          <div class="QuestionHeader-title">学计算机很痛苦还要不要学下去</div>
          <div class="QuestionHeader-detail">
            我是一个大一学生，计算机专业。开学时进了学校的一个科技社团，主要学习前端方面的内容。刚开始学习时觉得不太难，也写了很多代码来练习，但后来越学越吃力，感觉很多不会，很多不懂，但却不知道从哪里入手来学，学得也是糟糕透了……
            <div class="QuestionHeader-more">
              <span>显示全部</span>
              <span class="iconfont icon-arrow-down"></span>
            </div>
          </div>
        </div>
        <!-- 侧边 -->
        <div class="QuestionHeader-side">
          <div class="QuestionStatus-item">
            <div class="QuestionStatus-name">关注者</div>
            <div class="QuestionStatus-num">1,203</div>
          </div>
          <div class="QuestionStatus-split"></div>
          <div class="QuestionStatus-item">
            <div class="QuestionStatus-name">被浏览</div>
            <div class="QuestionStatus-num">453,716</div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="QuestionHeader-footer">
        <div class="QuestionHeader-footer-inner">
          <div class="QuestionButton-groups">
            <button class="QuestionButton-follow">关注问题</button>
            <button class="QuestionButton-ask">
              <span class="iconfont icon-pen"></span>
              写回答
            </button>
          </div>
          <div class="QuestionHeader-actions">
            <div class="ActionsWrap">
              <span class="iconfont icon-zan1"></span>
              <span class="ActionsText">好问题</span>
            </div>
            <div class="ActionsWrap">
              <span class="iconfont icon-pinglun1"></span>
              <span class="ActionsText">16条评论</span>
            </div>
            <div class="ActionsWrap">
              <span class="iconfont icon-xiaofeiji"></span>
              <span class="ActionsText">分享</span>
            </div>
            <div class="ActionsWrap">
              <span class="iconfont icon-shenglvehao"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 回答 -->
    <div class="QuestionMain">
      <div class="List">
        <div class="ListHeader">174个回答</div>
        <div class="ListItem" v-for="(item,index) in answerList" :key='index'>
          <rich-content></rich-content>
          <feed-actions></feed-actions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RichContent from "@/components/RichContent.vue";
import FeedActions from "@/components/FeedActions.vue";

export default {
  name: "detail",
  components: {
    RichContent,
    FeedActions
  },
  data() {
    return {
      tagList: ["计算机", "计算机专业", "编程"],
      answerList:[
        {},{},{}
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/config";
// 头部
.QuestionHeader {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  padding: 16px 0;
  &-content {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }
  &-main {
    width: 694px;
  }
  &-tags {
    display: flex;
    align-items: center;
  }
  &-tag {
    margin: 3px 5px 3px 0;
    height: 30px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 30px;
    color: $mainColor;
    vertical-align: top;
    border-radius: 100px;
    background: rgba(0, 132, 255, 0.1);
  }
  &-title {
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 600;
    color: #1a1a1a;
  }
  &-detail {
    cursor: pointer;
    font-size: 15px;
  }
  &-more {
    display: inline-block;
    font-size: 14px;
    color: $fontColor;
  }
  &-side {
    display: flex;
    width: 296px;
    justify-content: flex-end;
    .QuestionStatus-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      .QuestionStatus-name {
        font-size: 14px;
        color: $fontColor;
      }
      .QuestionStatus-num {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .QuestionStatus-split {
      width: 1px;
      background: #ebebeb;
      height: 50px;
    }
  }
  &-footer {
    margin-top: 8px;
    &-inner {
      display: flex;
      align-items: center;
      width: 1000px;
      height: 100%;
      padding: 0 16px;
      margin: 0 auto;
    }
    .QuestionButton-groups {
      display: flex;
      align-items: center;
      .QuestionButton-follow {
        cursor: pointer;
        color: #ffffff;
        background: $mainColor;
        padding: 0 16px;
        line-height: 34px;
        height: 34px;
        margin-right: 10px;
        border: 1px solid $mainColor;
        &:hover {
          background: #097fec;
        }
      }
      .QuestionButton-ask {
        cursor: pointer;
        padding: 0 16px;
        line-height: 34px;
        height: 34px;
        border: 1px solid $mainColor;
        background: #ffffff;
        color: $mainColor;
        &:hover {
          background: #e8f3ff;
        }
      }
      .icon-pen {
        font-size: 14px;
      }
    }
    .QuestionHeader-actions {
      display: flex;
      margin-left: 12px;
      .ActionsWrap {
        cursor: pointer;
        font-size: 14px;
        color: $fontColor;
        padding: 0 8px;
        &:hover {
          color: #677081;
        }
      }
      .ActionsText {
        margin-left: 4px;
      }
    }
  }
}

// 回答
.QuestionMain {
  width: 1000px;
  margin: 10px auto;
  padding: 0 16px;
  background: #ffffff;
  .List {
    padding: 0 20px;
    .ListHeader {
      height: 50px;
      border-bottom: 1px solid #f6f6f6;
      line-height: 50px;
      font-weight: 600;
    }
    .ListItem{
      padding:16px 0;
      border-bottom: 1px solid #ebebeb;
    }
  }
}
</style>

