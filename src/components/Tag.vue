<template>
  <div class="flex gap-2">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tags = ref([
  { name: "首页", type: "primary" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
]);
</script>

<style scoped>
.gap-2 {
  height: 30px;
  padding: 2px 10px;
}
::v-deep .el-tag {
  margin: 2px 4px;
  border-radius: 0px;
  color: #495060;
  padding: 8px;
  height: 26px;
  line-height: 26;
  text-align: center;
  background-color: #fff;
  border: solid 1px #d8dce5;
}

::v-deep .el-tag.is-closable:first-of-type .el-tag__close {
  display: none !important;
}
.flex {
  box-shadow: 0px 1px 5px #b8b7b7;
}
</style>
