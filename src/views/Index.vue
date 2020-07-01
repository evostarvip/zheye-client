<template>
  <div class="Topstory-container">
    <div class="Topstory-mainColumn">
      <feed-item></feed-item>
      <feed-item></feed-item>
      <feed-item></feed-item>
      <feed-item></feed-item>
      <feed-item></feed-item>
    </div>
    <div class="GlobalSideBar">
      <global-side-bar></global-side-bar>
    </div>
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
              <textarea @input="listenChange" v-model="askTitle" class="AskTitle" rows="3" placeholder="写下你的问题，准确地描述问题更容易得到解答"></textarea>
              <div class="AskFieldTip">{{askTip}}</div>
            </div>
          </div>

          <!-- 发布问题 -->
          <button class="AskButton" :disabled="disabled" @click="publishQues">发布问题</button>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem.vue";
import GlobalSideBar from "@/components/GlobalSideBar.vue";
import Modal from "@/components/Modal.vue";
export default {
  name: "index",
  components: {
    FeedItem,
    GlobalSideBar,
    Modal
  },
  data() {
    return {
      showModal: false,
      disabled: true,
      askTip: "",
      askTitle:''
    };
  },
  methods:{
    //监听标题文字数量
    listenChange(){
      if(this.askTitle.length<4){
        this.askTip="至少输入4个字";
        this.disabled = true;
      }else{
        this.askTip="";
        this.disabled = false;
      }
    },
    //发表问题
    publishQues(){
      console.log("发表问题");
      this.showModal = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.Topstory-container {
  display: flex;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
}
.Topstory-mainColumn {
  width: 654px;
}
.GlobalSideBar {
  margin-left: 10px;
  flex: 1;
}
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
      min-height: 108px;
      .AskTitle {
        width: 100%;
        border: none;
        font-size: 18px;
        color: #858fa6;
        &::placeholder {
          font-size: 18px;
          color: #858fa6;
        }
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
</style>