<script setup>
import { defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
const handleClose = (tag) => {
  const index = props.tags.findIndex((t) => t.path == tag.path);
  //移除标签
  if (index !== -1) {
    props.tags.splice(index, 1);
    sessionStorage.setItem("tags", JSON.stringify(props.tags));
  }
  //如果关闭的是当前页的标签
  if (tag.path === route.path) {
    if (props.tags.length === 0) {
      //如果无剩余标签,直接跳转至首页
      router.push("/");
    } else {
      const lastTag = props.tags[props.tags.length - 1];
      router.push(lastTag.path);
    }
  }
};

//获取路由器实例
const router = useRouter();

//获取路由实例
const route = useRoute();
</script>

<template>
  <div class="flex gap-2">
    <el-tag
      v-for="tag in props.tags"
      :key="tag.name"
      :closable="true"
      :type="tag.type"
      @click="router.push(tag.path)"
      :class="{ selected: route.path === tag.path }"
      @close="handleClose(tag)"
    >
      <i class="iconfont icon-yuan" v-if="route.path === tag.path"></i>
      {{ tag.name }}
    </el-tag>
  </div>
</template>
<style scoped>
.gap-2 {
  height: 30px;
  padding: 2px 10px;
}
:deep(.el-tag) {
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
.el-tag:hover {
  cursor: pointer;
}
:deep(.el-tag.is-closable:first-of-type .el-tag__close) {
  display: none !important;
}
.flex {
  box-shadow: 0px 1px 5px #b8b7b7;
}
:deep(.el-tag__content) {
  height: 24px !important;
  line-height: 24px;
}

:deep(.el-tag__content:hover) {
  cursor: pointer;
}
.iconfont {
  font-size: 8px;
  line-height: 24px;
}

.selected {
  background-color: rgb(64, 158, 255);
  color: #fff;
}
</style>
