<script setup>
import { ref, watchEffect, provide, watch } from "vue";
import TypeNav from "./TypeNav.vue";
import Header from "./header/index.vue";
import Tag from "./Tag.vue";
import { useRouter } from "vue-router";
const isCollapse = ref(false);
const menu = [
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

const router = useRouter(); //获取路由实例
const currentPath = ref(router.currentRoute.value.path); //获取当前路由路径

const toggleIscollapse = () => {
  isCollapse.value = !isCollapse.value;
};

//准备tags标签
const tags = ref(
  JSON.parse(sessionStorage.getItem("tags")) || [
    { name: "首页", type: "dashboard", path: "/dashboard" },
  ] //从临时会话中获取
);

//将tags传递给孙组件menuItem
provide("tags", tags.value);

watchEffect(() => {
  //监听当前路由路径之后将当前路径传递给header组件。
  currentPath.value = router.currentRoute.value.path;
});

//监听tags的变化，实时更新到临时会话框
watch(tags, (newTags) => {});
</script>

<template>
  <el-config-provider>
    <el-container>
      <el-aside :class="isCollapse ? 'collapse' : ''">
        <TypeNav :isCollapse="isCollapse" :menu="menu" />
      </el-aside>
      <el-container>
        <el-header>
          <Header
            @toggleIscollapse="toggleIscollapse"
            :isCollapse="isCollapse"
            :currentPath="currentPath"
            :menu="menu"
          />
          <Tag :tags="tags"></Tag>
        </el-header>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style>
body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: auto;
  display: flex;
  flex-direction: column;
}
.typeNav {
  transition: all 0.4s ease-in-out;
  flex-shrink: 0;
}
.el-container {
  overflow-x: hidden;
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;
}
:deep(.el-main) {
  padding: 0;
}
.el-header {
  padding: 0px !important;
  height: auto;
}

.el-main {
  overflow-x: hidden;
}
.el-aside {
  background-color: #304156;
  max-width: 200px;
  transition: all 0.4s ease-in-out;
}
.collapse {
  width: 54px;
}
</style>
