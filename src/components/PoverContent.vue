<template>
  <div class="PoverContent">
      <div class="PoverContent-header">我的私信</div>
     <div class="MessagesList">
         <div></div>
     </div>
  </div>
</template>
<script>
export default {
  name: "pover-content",
  data() {
      return{

      }
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../assets/css/config";
.PoverContent{
    position: absolute;
    top: 50px;
    transform: translateX(-50%);
    width: 360px;
    height: 439px;
    background: #ffffff;
}
</style>