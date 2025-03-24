<script setup>
import { defineProps, inject } from "vue";
import { useRouter, useRoute } from "vue-router"; //导入useRouter,useRoute

const props = defineProps({
  menu: Object,
  isCollapse: Boolean,
});

const router = useRouter(); //引入useRouter实例
//获取当前路由实例
const route = useRoute();

//判断目标路由是否存在
const isValidRoute = (path) => {
  //获取当前路由的所有路由
  const routes = router.getRoutes();
  //检查当前路由是否存在所有路由配置中
  return routes.some((route) => route.path === path);
};

const tags = inject("tags");

//路由跳转函数
const goItem = (item) => {
  //如果当前路由存在，跳转
  if (isValidRoute(item.path)) {
    console.log(`当前跳转的是${item.path}路由`);
    // 判断当前点击的路由链接的标签是否已存在
    const oldTags = JSON.parse(sessionStorage.getItem("tags")) || tags;
    const existingTag = oldTags.find((tag) => tag.name === item.title);
    if (!existingTag) {
      //如果该标签不存在，则在tags中新增
      console.log(`添加新的标签',${item.title}`);
      tags.push({ name: item.title, type: item.icon, path: item.path });
      console.log(tags);
      //并更新会话框中的tags
      sessionStorage.setItem("tags", JSON.stringify(tags));
    } else {
      console.log(`${item.title}标签已存在`);
      console.log(tags);
    }
    router.push(item.path);
  } else {
    console.log(`当前路由${item.path}不存在`);
  }
};
</script>

<template>
  <el-sub-menu v-if="props.menu?.children?.length > 0" :index="props.menu.path">
    <template #title>
      <i
        :class="[
          'iconfont',
          props.menu.icon,
          route.path == props.menu.path ? 'is-active' : '',
        ]"
      ></i>
      <span class="firstMenu">{{ props.menu.title }}</span>
    </template>

    <!-- 循环遍历子菜单项 -->
    <menu-item
      v-for="item in props.menu?.children"
      :key="item.title"
      :menu="item"
      :index="item.path"
    />
  </el-sub-menu>

  <el-menu-item v-else :index="props.menu.path" @click="goItem(props.menu)">
    <i
      :class="[
        'iconfont',
        props.menu.icon,
        props.collapse ? 'collapseImg' : '',
        route.path == props.menu.path ? 'is-active' : '',
      ]"
    ></i>
    <span
      :class="['firstMenu', route.path == props.menu.path ? 'is-active' : '']"
      >{{ props.menu.title }}</span
    >
    <i
      v-if="props.menu.isArraw"
      :class="[
        'arraw',
        'iconfont',
        'icon-i_arraw_down',
        { selected: count == props.index },
      ]"
    />
  </el-menu-item>
</template>

<style scoped>
/* 你的样式 */

.firstMenu {
  color: #bfcbd9;
  margin-left: 16px !important;
}
:deep(.el-menu) {
  border-right: none !important ;
}
.el-menu-item {
  color: #bfcbd9;
  width: 100%;
  background-color: #304156;
}
:deep(.el-menu-item:hover) {
  background-color: #2d3d51;
}

.el-sub-menu {
  background-color: #304156;
}
:deep(.el-sub-menu__title:hover) {
  background-color: #2d3d51;
}

.el-menu-item:hover {
  color: #bfcbd9;
  background-color: #2d3d51;
}
.is-active {
  /* color: #bfcbd9; */
  color: #409eff;
}

.is-opened > .el-menu > .el-menu-item {
  background-color: #1f2d3d !important;
  color: #bfcbd9;
}
.is-opened > .el-menu > .el-menu-item:hover {
  background-color: #001528 !important;
}
a {
  color: #bfcbd9;
  text-decoration: none;
}

.menuItem {
  width: 100%;
  height: 100%;
}

.iconfont {
  font-size: 16px;
}
</style>
