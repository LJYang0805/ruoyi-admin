<script setup>
import { ref, reactive } from "vue";

let count = reactive({
  a: false,
  b: false,
  c: false,
});
const toggleArraw = (section) => {
  count.a = section === "a" ? !count.a : false;
  count.b = section === "b" ? !count.b : false;
  count.c = section === "c" ? !count.c : false;
};

let menu1 = reactive([
  { content: "用户管理", icon: `&#xe636;`, isArraw: false },
  { content: "角色管理", icon: "&#xe621;", isArraw: false },
  { content: "菜单管理", icon: "&#xe605;", isArraw: false },
  { content: "部门管理", icon: "&#xe608;", isArraw: false },
  { content: "岗位管理", icon: "&#xe87a;", isArraw: false },
  { content: "字典管理", icon: "&#xe756;", isArraw: false },
  { content: "参数设置", icon: "&#xe61c;", isArraw: false },
  { content: "通知公告", icon: "&#xe635;", isArraw: false },
  { content: "日志管理", icon: "&#xe687;", isArraw: true },
]);
let menu2 = reactive([
  { content: "在线用户", icon: "&#xe87a;" },
  { content: "定时任务", icon: "&#xe87a;" },
  { content: "数据监控", icon: "&#xe860;" },
  { content: "服务监控", icon: "&#xe860;" },
  { content: "缓存监控", icon: "&#xe860;" },
  { content: "缓存列表", icon: "&#xe860;" },
]);
let menu3 = reactive([
  { content: "表单构建", icon: `&#xe860;` },
  { content: "代码生成", icon: "&#xe860;" },
  { content: "系统接口", icon: "&#xe860;" },
]);
</script>

<template>
  <teleport to="body">
    <div class="typeNav">
      <div class="title">
        <img src="../assets/images/logo.png" alt="" /><span>若依管理系统</span>
      </div>

      <!-- 系统管理 navigation -->
      <div class="navigation">
        <i class="iconfont">&#xe849;</i><span>首页</span>
      </div>

      <!-- 系统管理 navigation -->
      <div class="navigation" id="extend" @click="toggleArraw('a')">
        <i class="iconfont">&#xe61e;</i><span>系统管理</span>
        <i :class="['arraw', 'iconfont', { selected: count.a }]">&#xe60c;</i>
      </div>
      <ul class="menu" :style="{ height: count.a ? auto : '0px' }">
        <li v-for="(item, index) in menu1" :key="index" class="item">
          <i class="iconfont" v-html="item.icon"></i
          ><span>{{ item.content }}</span>
          <i
            v-if="item.isArraw"
            :class="['arraw', 'iconfont', { selected: count.a }]"
            >&#xe60c;</i
          >
        </li>
      </ul>

      <!-- 系统监控 navigation -->
      <div class="navigation" id="extend" @click="toggleArraw('b')">
        <i class="iconfont">&#xe860;</i><span>系统监控</span>
        <i :class="['arraw', 'iconfont', { selected: count.b }]">&#xe60c;</i>
      </div>
      <ul class="menu" :style="{ height: count.b ? auto : '0px' }">
        <li v-for="(item, index) in menu2" :key="index" class="item">
          <i class="iconfont" v-html="item.icon"></i
          ><span>{{ item.content }}</span>
        </li>
      </ul>

      <!-- 系统工具 navigation -->
      <div class="navigation" id="extend" @click="toggleArraw('c')">
        <i class="iconfont">&#xe774;</i><span>系统工具</span>
        <i :class="['arraw', 'iconfont', { selected: count.c }]">&#xe60c;</i>
      </div>
      <ul class="menu" :style="{ height: count.c ? auto : '0px' }">
        <li v-for="(item, index) in menu3" :key="index" class="item">
          <i class="iconfont" v-html="item.icon"></i
          ><span>{{ item.content }}</span>
        </li>
      </ul>

      <!-- 若依官网 navigation -->
      <div class="navigation">
        <i class="iconfont">&#xe653;</i><span>若依官网</span>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.typeNav {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
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
  left: 80px;
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
