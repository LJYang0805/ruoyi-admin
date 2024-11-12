<script setup>
import TypeNav from "./TypeNav.vue";
import TypeNav1 from "./TypeNav1.vue";
import Header from "./Header.vue";
</script>

<template>
  <el-config-provider>
    <TypeNav /> <TypeNav1 /> <Header></Header>
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
