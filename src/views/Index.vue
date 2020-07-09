<template>
  <div class="Topstory-container">
    <div class="Topstory-mainColumn">
      <div v-for="(item,index) in feedList" :key="index">
        <feed-item :feedList="item"></feed-item>
      </div>
    </div>
    <div class="GlobalSideBar">
      <global-side-bar></global-side-bar>
    </div>
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem.vue";
import GlobalSideBar from "@/components/GlobalSideBar.vue";
export default {
  name: "index",
  components: {
    FeedItem,
    GlobalSideBar
  },
  data() {
    return {
      feedList: []
    };
  },
  mounted() {
    this.axios
      .get("/index")
      .then(res => {
        if (res.status == 200) {
          this.feedList = res.data;
        }
      })
      .catch(err => {});
  },
  methods: {}
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
</style>