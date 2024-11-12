<script setup>
import TypeNav1 from "./TypeNav1.vue";
import Header from "./Header.vue";
</script>

<template>
  <el-config-provider>
    <el-container>
      <el-aside width="200px">
        <TypeNav1 />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
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
