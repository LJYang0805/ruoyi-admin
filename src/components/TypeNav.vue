<script setup>
import { defineProps } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
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
    title: "系统管理",
    icon: "icon-system",
    children: [
      { content: "用户管理", icon: `icon-user`, isArraw: false },
      { content: "角色管理", icon: "icon-peoples", isArraw: false },
      { content: "菜单管理", icon: "icon-tree-table", isArraw: false },
      { content: "部门管理", icon: "icon-tree", isArraw: false },
      { content: "岗位管理", icon: "icon-Books_notebook", isArraw: false },
      { content: "字典管理", icon: "icon-zhuanye", isArraw: false },
      { content: "参数设置", icon: "icon-edit1", isArraw: false },
      { content: "通知公告", icon: "icon-chat", isArraw: false },
    ],
  },
  {
    title: "系统监控",
    icon: "icon-monitor",
    children: [
      { content: "在线用户", icon: "icon-a-Devicebase-station-line" },
      { content: "定时任务", icon: "icon-dict" },
      { content: "数据监控", icon: "icon-Druid" },
      { content: "服务监控", icon: "icon-monitor" },
      { content: "缓存监控", icon: "icon-Redis" },
      { content: "缓存列表", icon: "icon-redis-list" },
    ],
  },
  {
    title: "系统工具",
    icon: "icon-c-tool-box",
    children: [
      { content: "表单构建", icon: `icon-buildings_half-build` },
      { content: "代码生成", icon: "icon-code" },
      { content: "系统接口", icon: "icon-swagger" },
    ],
  },
];

let thirdMenu = {
  content: "日志管理",
  icon: "icon-edit2",
  isArraw: true,
  children: [
    { content: "操作日志", icon: "icon-edit1", isArraw: false },
    { content: "登录日志", icon: "icon-chat", isArraw: false },
  ],
};
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
        <!-- 首页 navigation -->
        <el-menu-item
          :class="['item', props.isCollapse ? 'collapseItem' : '']"
          index="1"
        >
          <i class="iconfont icon-dashboard-fill"></i><span>首页</span>
        </el-menu-item>

        <!-- 系统管理 系统监控 系统工具 navigation -->
        <el-sub-menu
          v-for="(item, index) in menu"
          :key="index"
          :index="index.toString()"
        >
          <template #title>
            <i :class="['iconfont', item.icon]"></i
            ><span class="firstMenu">{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            class="item menu"
          >
            <i :class="['iconfont', child.icon]"></i
            ><span>{{ child.content }}</span>
            <i
              v-if="child.isArraw"
              :class="[
                'arraw',
                'iconfont',
                'icon-i_arraw_down',
                { selected: count == childIndex },
                ,
              ]"
            ></i
          ></el-menu-item>
          <el-sub-menu>
            <template #title>
              <i :class="['iconfont', thirdMenu.icon]"></i
              ><span class="firstMenu thirdMenu">{{ thirdMenu.content }}</span>
            </template>
            <el-menu-item-group class="menu">
              <el-menu-item
                v-for="(it, itIndex) in thirdMenu.children"
                :key="itIndex"
                class="item"
              >
                <i :class="['iconfont', it.icon]"></i
                ><span>{{ it.content }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-sub-menu>

        <!-- 若依官网 navigation -->
        <el-menu-item
          :class="['item', props.isCollapse ? 'collapseItem' : '']"
          index="4"
        >
          <i class="iconfont icon-paper-plane-1"></i>
          <span>若依官网</span>
        </el-menu-item>
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
  background-color: #2d3d51 !important;
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
.firstMenu {
  padding-left: 16px;
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
</style>
