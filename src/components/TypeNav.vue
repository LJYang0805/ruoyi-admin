<script setup>
import { ref } from "vue";

let count = ref(null);
const toggleArraw = (index) => {
  count.value = count.value === index ? null : index; //切换展开状态
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
  <div class="typeNav">
    <div class="title">
      <img src="../assets/images/logo.png" alt="" /><span>若依管理系统</span>
    </div>

    <!-- 系统管理 navigation -->
    <div class="navigation">
      <i class="iconfont icon-dashboard-fill"></i><span>首页</span>
    </div>

    <!-- 系统管理 系统监控 系统工具 navigation -->
    <div v-for="(item, index) in menu" :key="index">
      <div class="navigation" id="extend" @click="toggleArraw(index)">
        <i :class="['iconfont', item.icon]"></i><span>{{ item.title }}</span>
        <i
          :class="[
            'arraw',
            'iconfont',
            'icon-i_arraw_down',
            { selected: count === index ? true : false },
          ]"
        ></i>
      </div>
      <ul
        class="menu"
        :style="{ maxHeight: count === index ? '500px' : '0px' }"
      >
        <li v-for="(item, index) in item.children" :key="index" class="item">
          <i :class="['iconfont', item.icon]"></i
          ><span>{{ item.content }}</span>
          <i
            v-if="item.isArraw"
            :class="[
              'arraw',
              'iconfont',
              'icon-i_arraw_down',
              { selected: count == index ? true : false },
              ,
            ]"
          ></i>
        </li>
      </ul>
    </div>

    <!-- 若依官网 navigation -->
    <div class="navigation">
      <i class="iconfont">&#xe653;</i><span>若依官网</span>
    </div>
  </div>
</template>

<style scoped>
.typeNav {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: rgb(48, 65, 86);
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.2);
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
.navigation i {
  position: relative;
  font-size: 14px;
}
.navigation span {
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
  overflow: hidden;
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
