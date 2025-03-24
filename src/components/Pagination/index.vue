<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 1,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 50];
    },
  },
});
</script>
<template>
  <div class="demo-pagination-block">
    <el-pagination
      current-page="1"
      :page-sizes="props.pageSizes"
      size="small"
      :disabled="false"
      background="true"
      layout="total, sizes,prev,pager,next,jumper"
      :total="props.total"
      ref="pagination"
    ></el-pagination>
  </div>
</template>
<style>
.demo-pagination-block {
  position: absolute;
  right: 12px;
  margin: 20px 0 16px 0;
  color: #606266;
  font-size: 13px;
}
.el-select {
  padding: 0 17px 0 8px;
}
</style>
