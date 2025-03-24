<script setup>
import { ElNotification as notify, ElMessageBox } from "element-plus";
import { CaretBottom } from "@element-plus/icons-vue";
import {
  defineProps,
  ref,
  onMounted,
  nextTick,
  reactive,
  onBeforeMount,
} from "vue";
import { useStore } from "../../store";
import { useRouter } from "vue-router";
const onBack = () => {
  notify("Back");
};

const props = defineProps({
  isCollapse: Boolean,
  currentPath: String,
  menu: Object,
});

//实例化useStore
const store = useStore();

//实例化useRouter
const router = useRouter();
// 获取 emit 方法，触发自定义事件
const emit = defineEmits();

const sendIscollapse = () => {
  emit("toggleIscollapse");
};

//声明响应式面包屑的数组
const breadcrumbs = reactive([]);

const fit = [
  { title: "搜索", icon: "icon-search" },
  { title: "源码地址", icon: "icon-github" },
  { title: "文档地址", icon: "icon-question" },
  { title: "全屏", icon: "icon-full_screen" },
  { title: "布局大小", icon: "icon-size" },
];

let hidden = ref(false);

let inputRef = ref(null); //提前准备好inputRef,用来接收input元素

const inputHidden = (title) => {
  title === "搜索" ? (hidden.value = !hidden.value) : "";
  if (inputRef.value) {
    inputRef.value[0].focus();
  }
};

let logout = function () {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      store.logout();
      router.push("/login");
    })
    .catch(() => {});
};

const findBreadcrumbs = (menu) => {
  menu.forEach((item) => {
    if (props.currentPath.includes(item.path)) {
      item.title == "首页" ? "" : breadcrumbs.push(item.title);
    }
    if (item.children) {
      findBreadcrumbs(item.children);
    }
  });
};

onMounted(() => {
  breadcrumbs.length = 0; //每当组件挂载时清空breadcrumbs
  findBreadcrumbs(props.menu); //查找并更新breadcumbs

  //注册路由守卫
  router.afterEach(() => {
    breadcrumbs.length = 0; //每当组件挂载时清空breadcrumbs
    findBreadcrumbs(props.menu); //查找并更新breadcumbs
  });
});

onBeforeMount(() => {
  //在组件销毁时解除路由守卫，防止内存泄漏
  router.afterEach(() => {}); //解除路由守卫
});
</script>

<template>
  <div aria-label="A complete example of page header">
    <button :value="false" @click="sendIscollapse">
      <i
        :class="[
          'iconfont',
          'icon-menu_right',
          isCollapse ? '' : 'rotate-icon',
        ]"
      ></i>
    </button>
    <el-page-header>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><router-link to="/dashboard">首页</router-link></el-breadcrumb-item
        >
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="index"
          :style="{ color: '#97A8BE' }"
          >{{ item }}</el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="right-menu">
        <el-badge
          :class="['item', item.title === '搜索' ? 'search' : '']"
          v-for="(item, index) in fit"
          :key="index"
          :title="item.title"
        >
          <el-button @click="inputHidden(item.title)"
            ><i :class="['iconfont', `${item.icon}`]"></i
          ></el-button>
          <input
            ref="inputRef"
            :class="hidden ? '' : 'hidden'"
            v-if="item.title === '搜索'"
            type="text"
            placeholder="Search"
          />
        </el-badge>
        <!-- 头像 -->
        <el-badge class="item" color="green">
          <el-button
            ><img src="../../assets/images/header.jpg" alt=""
          /></el-button>
        </el-badge>

        <!-- 下拉菜单 -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right"><caret-bottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="clearfix"> 个人中心 </el-dropdown-item>
              <el-dropdown-item class="clearfix"> 布局设置 </el-dropdown-item>
              <el-dropdown-item class="clearfix" @click="logout">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-page-header>
  </div>
</template>

<style scoped>
:deep(.el-page-header__main) {
  margin: 0 !important;
}

:deep(.el-page-header__breadcrumb) {
  height: 50px;
  padding: 0px;
  padding-left: 50px;
  margin-bottom: 0px !important;
  box-sizing: border-box !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important; /* 示例边框 */
}

:deep(button) {
  border: none !important; /* 强制去掉菜单折叠按钮边框 */
  padding: 14px 7px !important;
}
/* 隐藏斜杠 */
/* :deep.el-breadcrumb__separator {
  display: none !important;
} */

:deep(.el-breadcrumb__item:last-child .el-breadcrumb__separator) {
  display: none !important;
}

:deep(.el-breadcrumb__inner:first-child) {
  font-size: 14px;
  line-height: 50px;
  color: #000;
  /* color: #97a8be !important; */
}
:deep(.el-breadcrumb__inner:not(first-child)) {
  font-size: 14px;
  line-height: 50px;
  color: #97a8be !important;
}
.el-breadcrumb {
  display: inline-block;
  height: 50px;
  width: auto;
}
.el-breadcrumb__item {
  color: #000;
}
.iconfont {
  display: inline-block;
  font-size: 20px;
  color: #000;
}

button {
  position: relative;
  height: 30px;
  top: 0px;
  float: left;
  font-size: 14px;
  background-color: #fff;
}
.rotate-icon {
  transform: rotateY(180deg);
}

.el-badge {
  position: relative;
  top: -5px;
  margin: -3px;
  line-height: 50px;
}

.search {
  height: 33px;
}

.el-dropdown {
  margin-top: 1.1rem;
}

:deep(.el-dropdown-menu__item:last-child) {
  height: 30px;
  line-height: 30px;
  border-width: 2px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
}

.right-menu {
  position: relative;
  right: -10px;
  float: right;
  height: 50px;
  box-sizing: border-box;
  line-height: 60px;
}

img {
  position: relative;
  top: -2px;
  width: 40px;
  height: 40px;
  padding-top: -10px;
  border-radius: 10px;
  object-fit: cover; /* 避免图片失真 */
}

.items-center {
  display: none;
}

.el-tooltip__trigger {
  width: 10px;
  margin-right: 33px;
  margin-top: 10px;
}

input {
  width: 210px;
  height: 36px;
  border-width: 0px;
  border-bottom: 1px solid #d9d9d9;
  transition: linear 0.2s;
}
input:focus {
  outline: none;
  cursor: pointer;
}
input::placeholder {
  font-size: 14px;
  font-weight: 500;
  color: rgba(13, 13, 13, 0.3);
}

.hidden {
  width: 0;
}

:deep(.el-page-header__left) {
  display: none;
}
</style>
