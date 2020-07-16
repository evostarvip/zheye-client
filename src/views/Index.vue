<template>
  <div class="Topstory-container">
    <div class="Topstory-mainColumn" @scroll="scroll">
      <el-tabs v-model="activeName" @tab-click="changeItem">
        <el-tab-pane label="推荐" name="recommend">
          <div v-for="(item,index) in feedList" :key="index">
            <feed-item :feedList="item"></feed-item>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关注" name="attention">
          <div v-for="(item,index) in feedList" :key="index">
            <feed-item :feedList="item"></feed-item>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="GlobalSideBar">
      <global-side-bar></global-side-bar>
    </div>
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem.vue";
import GlobalSideBar from "@/components/GlobalSideBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "index",
  components: {
    FeedItem,
    GlobalSideBar
  },
  computed: {
    //监听词条
    ...mapGetters(["isAdd"])
  },
  watch: {
    isAdd: function(newValue) {
      this.getContent();
    }
  },
  data() {
    return {
      feedList: [],
      activeName:"recommend"
    };
  },
  mounted() {
    this.getContent();
    //   window.addEventListener('scroll', function(){
    //   var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
    //   var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
    //   var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端

    //  console.log("scr : "+scr);
    //  console.log("clientHeight : "+clientHeight);
    //  console.log("scrHeight : "+scrHeight);

    //  if(scr + clientHeight + 10 >= scrHeight){
    //    if(_this.isMoreLoad){ //this.isMoreLoad控制滚动是否加载更多
    //   	_this.definePageNum = _this.definePageNum + 1; // 加载更多是definePageNum+1
    //      _this.scrollLoadMore();
    //    }else{
    //      return;
    //    }
    //  }
    //  });
  },
  methods: {
    //获取数据
    getContent() {
      this.axios
        .get("/index")
        .then(res => {
          if (res.status == 200) {
            this.feedList = res.data;
            this.$store.dispatch("setIsAdd", false);
          }
        })
        .catch(err => {});
    },
    //滚动
    scroll(e) {
      console.log(e);
      console.log("滚动");
    },
    //切换选项卡
    changeItem(){
      if(this.activeName = 'attention'){
        //调用接口
      }
    }
  }
};
</script>
<style lang="scss" >
@import "../assets/css/config";
.Topstory-container {
  display: flex;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
  height: 100%;
}
.Topstory-mainColumn {
  width: 654px;
  height: 100%;
  .el-tabs__header{
    background: #ffffff;
    padding: 10px 20px;
    margin: 0;
    border-bottom: 1px solid #ebebeb;
  }
  .el-tabs__item{
    font-size: 16px;
  }
  .el-tabs__item.is-active{
    color: $mainColor;
  }
  .el-tabs__nav-wrap::after{
    background: transparent;
  }
  .el-tabs__active-bar{
    height: 0;
  }
}
.GlobalSideBar {
  margin-left: 10px;
  flex: 1;
}
</style>