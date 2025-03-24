<script setup>
import { ref } from "vue";
const props = defineProps({
  //动态控制搜索列显示或隐藏
  showSearch: {
    type: Boolean,
    default: true,
  },
  search: {
    type: Boolean,
    default: true,
  },
  columns: {
    type: Array,
    default: () => [],
  },
});
const emits = defineEmits(["update:showSearch", "queryTable"]); //显示声明自定义事件
//点击刷新按钮，触发父组件传递的自定义事件
const refresh = () => {
  emits("queryTable");
};
//点击隐藏按钮，触发父组件传递的自定义事件
const toggleSearch = () => {
  emits("update:showSearch", !props.showSearch);
};

const checkboxChange = (key) => {
  console.log(props.columns[0].visible);
  console.log(key);
  props.columns[key].visible = !props.columns[key].visible;
};
</script>

<template>
  <div>
    <el-tooltip
      v-if="props.search"
      :content="props.showSearch ? '隐藏搜索' : '显示搜索'"
      placement="top"
      ><el-button circle @click="toggleSearch"
        ><i class="iconfont icon-search"></i></el-button
    ></el-tooltip>
    <el-tooltip content="刷新" placement="top"
      ><el-button circle @click="refresh()"
        ><i class="iconfont icon-update"></i></el-button
    ></el-tooltip>
    <el-dropdown
      v-show="props.columns && props.columns.length"
      style="margin-left: 10px; width: 28px; border: 0"
      trigger="click"
    >
      <el-button circle>
        <el-tooltip content="显隐列" placement="top">
          <i class="iconfont icon-menu"></i>
        </el-tooltip>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, index) in props.columns" :key="index">
            <el-checkbox
              :label="item.label"
              :checked="item.visible"
              @change="checkboxChange(item.key)"
            ></el-checkbox>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped>
.iconfont {
  font-size: 12px;
}
</style>
