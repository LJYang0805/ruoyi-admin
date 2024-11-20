<script setup>
import { defineProps } from "vue";
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
});

let menu = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "icon-dashboard-fill",
  },
  {
    title: "系统管理",
    path: "/system",
    icon: "icon-system",
    children: [
      {
        title: "用户管理",
        path: "/system/user",
        icon: `icon-user`,
        isArraw: false,
      },
      {
        title: "角色管理",
        path: "/system/role",
        icon: "icon-peoples",
        isArraw: false,
      },
      {
        title: "菜单管理",
        path: "/system/menu",
        icon: "icon-tree-table",
        isArraw: false,
      },
      {
        title: "日志管理",
        path: "/system/log",
        icon: "icon-edit2",
        isArraw: true,
        children: [
          {
            title: "操作日志",
            path: "/system/log/operate",
            icon: "icon-edit1",
            isArraw: false,
          },
          {
            title: "登录日志",
            path: "/system/log/login",
            icon: "icon-chat",
            isArraw: false,
          },
        ],
      },
    ],
  },
  {
    title: "系统监控",
    path: "/monitor",
    icon: "icon-monitor",
    children: [
      {
        title: "在线用户",
        path: "/monitor/online",
        icon: "icon-a-Devicebase-station-line",
      },
      {
        title: "定时任务",
        path: "/monitor/timer-task",
        icon: "icon-dict",
      },
    ],
  },
  {
    title: "系统工具",
    icon: "icon-c-tool-box",
    path: "/tools",
    children: [
      {
        title: "表单构建",
        path: "/tools/form",
        icon: `icon-buildings_half-build`,
      },
      {
        title: "代码生成",
        path: "/tools/codeGeneration",
        icon: "icon-code",
      },
      {
        title: "系统接口",
        path: "/tools/interface",
        icon: "icon-swagger",
      },
    ],
  },
  {
    title: "若依官网",
    icon: "icon-paper-plane-1",
    path: "/ruoyi",
  },
];

// 预备一个tags标签数组，用来存储点击后的面包屑标签
const tags = [];
</script>

<template>
  <el-scrollbar>
    <div :class="['typeNav', props.isCollapse ? 'collapse' : '']">
      <div class="title">
        <img
          src="../assets/images/logo.png"
          alt=""
          :class="props.isCollapse ? 'collapseImg' : ''"
        /><span>若依管理系统</span>
      </div>

      <el-menu
        :isCollapse="isCollapse"
        unique-opened
        active-text-color="#ffd04b"
        background-color="#545c64"
        :class="['el-menu-vertical-demo', props.isCollapse ? 'collapse' : '']"
        default-active="2"
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
* {
  margin: 0;
  padding: 0px;
}
.typeNav {
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #304156;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.2);
  transition: linear 0.2s;
}

.collapse {
  width: 54px;
}

.collapseImg {
  margin-left: 11px !important;
}

.icon-dashboard-fill {
  padding-left: 20px;
}

.el-menu {
  background-color: #304156;
  border: none;
  transition: linear 0.2s;
}

:deep(.el-menu-item-group__title) {
  padding: 0px 0 0px var(--el-menu-base-level-padding);
  width: 100%;
}

:deep(.el-sub-menu__title:hover) {
  background-color: #2d3d51;
}

:deep(.el-sub-menu__title) {
  background-color: #304156;
  color: rgb(191, 203, 217) !important;
}

.el-menu-vertical-demo {
  width: 100%;
}

/* 子菜单项的样式，确保子菜单在父容器内展开 */

.el-sub-menu > .el-menu {
  width: 100%; /* 可以根据需要调整子菜单的宽度 */
  display: none; /* 默认隐藏子菜单 */
}

.el-sub-menu.is-opened > .el-menu {
  display: block; /* 打开时显示子菜单 */
}

.title {
  width: 100%;
  color: #fff;
  height: 50px;
  font-weight: 600;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
}

.title img {
  margin-left: 36px;
  margin-top: 9px;
  width: 32px;
  height: 32px;
}

.title span {
  position: absolute;
  top: 15px;
  left: 80px;
}

.navigation {
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: rgb(191, 203, 217);
  padding: 0px 20px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  text-align: left;
  vertical-align: middle;
}
.navigation:hover {
  cursor: pointer;
  background-color: #2d3d51 !important;
}

.iconfont {
  position: relative;
  font-size: 14px;
}

.arraw {
  display: block;
  width: 10px;
  height: 10px;
  right: -150px;
  top: -36px;
  line-height: 10px;
  color: rgb(132, 120, 112);
  font-size: 10px !important;
  border-top-left-radius: 5px;
  transition: linear 0.4s;
}

.selected {
  transform: rotate(180deg);
}

.menu {
  display: block;
  left: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border: 0px;
  background-color: #1f2d3d;
  color: #bfcbd9;
  font-size: 14px;
  box-sizing: border-box;
  overflow: hidden;
  transition: ease-in-out 0.4s;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}

.item {
  display: inline-block;
  height: 56px;
  padding: 0px 40px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 52px;
  list-style-type: none;
}

.collapseItem {
  padding: 0 0px;
  margin-left: 18px;
}

.item:hover {
  cursor: pointer;
  background-color: #001528;
}
.item i {
  position: relative;
  font-size: 14px;
}
.item span {
  padding: 0px 0px 0px 16px;
}
.item .arraw {
  right: -130px;
  top: -35px;
}
:deep(.is-opened > .el-menu--inline > .el-sub-menu > .el-sub-menu__title) {
  background-color: #1f2d3d !important;
  color: #bfcbd9 !important;
}
:deep(
    .is-opened > .el-menu--inline > .el-sub-menu > .el-sub-menu__title:hover
  ) {
  background-color: #001528 !important;
}
</style>
