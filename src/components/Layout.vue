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
          <Header @toggleIscollapse="toggleIscollapse" />
        </el-header>
        <el-main> main </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
