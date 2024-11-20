<script setup>
import { defineProps, onMounted } from "vue";

const props = defineProps({
  menu: Object,
  isCollapse: Boolean,
});
</script>

<template>
  <el-sub-menu v-if="props.menu?.children?.length > 0" :index="props.menu.path">
    <template #title>
      <router-link to="../views/Dashboard/Dashboard.vue">
        <i :class="['iconfont', props.menu.icon]"></i>
        <span class="firstMenu">{{ props.menu.title }}</span>
      </router-link>
    </template>

    <!-- 循环遍历子菜单项 -->
    <menu-item
      v-for="item in props.menu?.children"
      :key="item.title"
      :menu="item"
      :index="item.path"
    />
  </el-sub-menu>

  <el-menu-item v-else :index="props.menu.path">
    <i
      :class="[
        'iconfont',
        props.menu.icon,
        props.collapse ? 'collapseImg' : '',
      ]"
    ></i>
    <span class="firstMenu">{{ props.menu.title }}</span>
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
  margin-left: 14px;
}
.el-menu-item {
  color: #bfcbd9;
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
</style>
