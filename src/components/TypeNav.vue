<script setup>
import { ref } from "vue";

const props = defineProps({});

const count = ref(0);
</script>

<template>
  <teleport to="body"
    ><div class="typeNav">
      <div class="title navigation">
        <img src="../assets/images/logo.png" alt="" /><span>若依管理系统</span>
      </div>
      <div class="navigation"><span>首页</span></div>
      <div class="navigation"><span>系统管理</span></div>
      <div class="navigation"><span>系统监控</span></div>
      <div class="navigation"><span>系统工具</span></div>
      <div class="navigation"><span>若依官网</span></div>
    </div></teleport
  >
</template>

<style scoped>
.typeNav {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: rgb(48, 65, 86);
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.2);
}
.title {
  color: #fff !important;
  font-weight: 600;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif !important;
}
.title img {
  position: absolute;
  left: 36px;
  top: 9px;
  width: 32px;
  height: 32px;
}

.title span {
  position: relative;
  left: 80px;
}

.navigation {
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #bfcbd9;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  vertical-align: middle;
}
</style>
