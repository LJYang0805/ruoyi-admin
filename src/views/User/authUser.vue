<script setup>
import { ref, onMounted, nextTick } from "vue";
import { getAuthRole } from "../../api/system/user";
import { useRoute } from "vue-router";
const route = useRoute();
const userId = ref(route.params?.userId);
const loading = ref(false);
const form = ref({});
const roles = ref([]);
const total = ref(0);
const table = ref(null); // 绑定表格 `ref`

// 保存选中的数据编号
const getRowKey = (row) => {
  return row.roleId;
};
onMounted(() => {
  if (userId.value) {
    loading.value = true;
    getAuthRole(userId.value).then((res) => {
      console.log(res);
      form.value = res.user;
      roles.value = res.roles;
      total.value = roles.value.length;
      console.log(form.value.nickName);

      loading.value = false;
    });
  }
});
</script>

<template>
  <div class="app-container">
    <h4 class="form-header h4">基本信息</h4>
    <el-form ref="form" :model="form.value" label-width="80px">
      <el-row>
        <el-col :span="8" :offset="2">
          <el-form-item label="用户昵称" prop="nickName">
            <el-input v-model="form.nickName" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="2">
          <el-form-item label="登录账号" prop="userName">
            <el-input v-model="form.userName" disabled />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <h4 class="form-header h4">角色信息</h4>
    <el-table
      v-loading="loading"
      :row-key="getRowKey"
      @row-click="clickRow"
      ref="table"
      @selection-change="handleSelectionChange"
      :data="roles.slice((pageNum - 1) * pageSize, pageNum * pageSize)"
    >
      <el-table-column label="序号" type="index" align="center">
        <template :slot-scope="scope">
          <span>{{ (pageNum - 1) * pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        type="selection"
        :reserve-selection="true"
        width="55"
      ></el-table-column>
      <el-table-column label="角色编号" align="center" prop="roleId" />
      <el-table-column label="角色名称" align="center" prop="roleName" />
      <el-table-column label="权限字符" align="center" prop="roleKey" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        width="180"
      >
        <template :slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" />

    <el-form label-width="100px">
      <el-form-item
        style="text-align: center; margin-left: -120px; margin-top: 30px"
      >
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="close()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
