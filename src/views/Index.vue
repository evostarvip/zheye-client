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
    
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem.vue";
import GlobalSideBar from "@/components/GlobalSideBar.vue";
export default {
  name: "index",
  components: {
    FeedItem,
    GlobalSideBar,
  },
  data() {
    return {
     
    };
  },
  methods:{
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

</style>