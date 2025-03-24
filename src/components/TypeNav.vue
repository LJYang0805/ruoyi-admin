<script setup>
import { ref, watch, defineProps } from "vue";
import { useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
// 引入menuitem组件
import MenuItem from "./MenuItem.vue";

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
const props = defineProps({
  isCollapse: Boolean,
  menu: Object,
});

const route = useRoute();
//准备一个数据用来存储当前跳转的路由路径
const activeMenu = ref("");

watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath;
  },
  { immediate: true } //立即执行一次
);
</script>

<template>
  <el-scrollbar>
    <div :class="props.isCollapse ? 'collapse' : ''">
      <a class="title">
        <img
          src="../assets/images/logo.png"
          alt=""
          :class="props.isCollapse ? 'collapseImg' : ''"
        />
        <h1 :class="props.isCollapse ? 'hidden' : ''">若依管理系统</h1>
      </a>

      <el-menu
        :isCollapse="isCollapse"
        unique-opened
        active-text-color="#ffd04b"
        background-color="#545c64"
        :class="['el-menu-vertical-demo', props.isCollapse ? 'collapse' : '']"
        :default-active="activeMenu"
        text-color="#fff"
        :collapse="props.isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <!--首页 系统管理 系统监控 系统工具 若依官网 navigation -->
        <menu-item
          v-for="item in menu"
          :key="item.title"
          :menu="item"
          :index="item.path"
        >
        </menu-item>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.collapse {
  width: 54px;
}
.title .collapseImg {
  display: block;
  margin-right: 0px;
}
.title {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.title img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  overflow: hidden;
}

.title h1 {
  margin: 0;
  color: #fff;
  font: 600 14px/50px Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  white-space: nowrap;
}
.hidden {
  display: block;
  width: 0px;
  opacity: 0;
}
:deep(.el-menu) {
  border-right: none !important ;
}
:deep(.el-menu:hover) {
  background-color: #2d3d51 !important;
}
</style>
