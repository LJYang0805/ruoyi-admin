<script setup>
import { ref } from "vue";
import TypeNav from "./TypeNav.vue";
import Header from "./Header.vue";
const isCollapse = ref(false);

const toggleIscollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<template>
  <el-config-provider>
    <el-container>
      <el-aside width="200px">
        <TypeNav :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <Header
            @toggleIscollapse="toggleIscollapse"
            :isCollapse="isCollapse"
          />
          <Tag></Tag>
        </el-header>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-aside {
  width: auto;
}
.el-header {
  height: auto;
  width: 100%;
}
</style>
