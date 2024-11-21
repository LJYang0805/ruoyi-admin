<script setup>
import Layout from "./components/Layout.vue";
</script>

<template>
  <Layout></Layout>
</template>

<style>
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 5px; /* 纵向滚动条宽度 */
  height: 5px; /* 横向滚动条高度 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #c0c0c0; /* 滑块颜色 */
  border-radius: 6px; /* 滑块圆角 */
  height: 50px !important;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* 轨道颜色 */
  border-radius: 6px;
}

/* 鼠标悬停在轨道上（可选） */
::-webkit-scrollbar-track:hover {
  background: #e1e1e1;
}

/* 滚动条按钮（可选） */
::-webkit-scrollbar-button {
  background: #ccc;
  display: none; /* 隐藏按钮 */
}
</style>
