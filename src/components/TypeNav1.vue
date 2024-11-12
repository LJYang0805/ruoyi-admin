<script setup>
import { ref } from "vue";
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
      { content: "日志管理", icon: "icon-edit2", isArraw: true },
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
</script>

<template>
  <el-row class="typeNav">
    <div class="title">
      <img src="../assets/images/logo.png" alt="" /><span>若依管理系统</span>
    </div>
    <el-menu
      unique-opened
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 首页 navigation -->
      <el-menu-item class="navigation" index="1">
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
        <el-menu-item-group class="menu">
          <el-menu-item
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            class="item"
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
        </el-menu-item-group>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<style scoped>
.typeNav {
  position: absolute; /* 保持绝对定位 */
  display: flex;
  flex-direction: column;
  top: 0px;
  left: 200px;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(48, 65, 86);
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.2);
}

.el-menu-vertical-demo {
  position: relative; /* 确保菜单项相对定位 */
  width: 100%;
  box-sizing: border-box;
}
.el-menu-vertical {
  position: relative; /* 确保 el-menu 是相对定位 */
}

/* 子菜单项的样式，确保子菜单在父容器内展开 */
.el-sub-menu {
  position: relative; /* 子菜单的相对定位 */
}
.el-sub-menu > .el-menu {
  position: relative; /* 子菜单的绝对定位 */
  left: 100%; /* 将子菜单放置在父菜单的右边 */
  top: 0; /* 让子菜单从父菜单的顶部开始展开 */
  width: 100%; /* 可以根据需要调整子菜单的宽度 */
  display: none; /* 默认隐藏子菜单 */
}

.el-sub-menu.is-opened > .el-menu {
  display: block; /* 打开时显示子菜单 */
}

.el-menu-item-group {
  position: relative;
}

.title {
  left: 0;
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  vertical-align: middle;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  height: 50px;
  line-height: 50px;
}
.title img {
  position: absolute;
  left: 36px;
  top: 9px;
  width: 32px;
  height: 32px;
}

.title span {
  position: relative;
  left: 22px;
}

.navigation {
  left: 0;
  width: 100%;
  height: 56px;
  line-height: 56px;
  color: #bfcbd9;
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
  background-color: #2d3d51;
}
.navigation span {
  padding-left: 20px;
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
  height: 504px;
  padding: 0;
  margin: 0;
  background-color: #1f2d3d;
  color: #bfcbd9;
  font-size: 14px;
  transition: ease-in-out 0.4s;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.item {
  display: inline-block;
  width: 100%;
  height: 56px;
  padding: 0px 40px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 52px;
  list-style-type: none;
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