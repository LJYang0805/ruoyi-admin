<script setup>
import { ref, onMounted, reactive, watch, nextTick } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import { getConfigKey } from "../../api/system/config";
import { getToken } from "../../utils.js/token";
import { userStore } from "../../store/user";
import { useRouter } from "vue-router";
import {
  changeUserStatus,
  listUser,
  getUser,
  delUser,
  resetUserPwd,
} from "../../api/system/user";
import { addDateRange, parseTime } from "../../utils.js/ruoyi";
import { ElMessage, ElMessageBox } from "element-plus";
import { debounce } from "lodash";
import { download } from "../../utils.js/requests";
const router = useRouter();
const deptName = ref(undefined); //部门名称
const treeSelect = ref(null); //引用树组件实例
const myForm = ref(null); //引用表单组件实例
const myUpload = ref(null); //引用上传文件表单组件实例
const store = userStore();
const departOptions = ref([]); //初始化值为null,表示数据正在加载
const loading = ref(true); //遮罩层
// 用户导入参数
const upload = ref({
  // 是否显示弹出层（用户导入）
  open: false,
  // 弹出层标题（用户导入）
  title: "",
  // 是否禁用上传
  isUploading: false,
  // 是否更新已经存在的用户数据
  updateSupport: 0,
  // 设置上传的请求头部
  headers: { Authorization: "Bearer " + getToken() },
  // 上传的地址
  url: import.meta.env.VITE_BASE_API + "/system/user/importData",
});
const queryParams = ref({
  //查詢參數
  pageNum: 1,
  pageSize: 10,
  userName: undefined,
  phoneNumber: undefined,
  satus: undefined,
  deptId: undefined,
});
const showSearch = ref(true); //顯示搜索條件
const dateRange = ref([]); //日期范围
const defaultProps = {
  //默认属性
  children: "children",
  label: "label",
  value: "id",
};
const columns = ref([
  //列信息
  { key: 0, label: `用户编号`, visible: true },
  { key: 1, label: `用户名称`, visible: true },
  { key: 2, label: `用户昵称`, visible: true },
  { key: 3, label: `部门`, visible: true },
  { key: 4, label: `手机号码`, visible: true },
  { key: 5, label: `状态`, visible: true },
  { key: 6, label: `创建时间`, visible: true },
]);
const userList = ref(null); //用户表格数据
const ids = ref([]); // 选中数组
const single = ref(true); // 非单个禁用
const multiple = ref(true); // 非多个禁用
const total = ref(0); //总条数
const open = ref(false); //是否显示对话框
const title = ref(""); //对话框标题
const initPassword = ref(undefined); //默认cxxxxx密码
const postOptions = ref([]); //岗位选项
const roleOptions = ref([]); //角色选项
const form = ref({
  //表单数据
  userId: undefined,
  deptId: undefined,
  userName: undefined,
  nickName: undefined,
  password: undefined,
  phonenumber: undefined,
  email: undefined,
  sex: undefined,
  status: "0",
  remark: undefined,
  postIds: [],
  roleIds: [],
});
const dicts = ref({
  sexs: ["男", "女", "未知"],
  status: ["正常", "停用"],
});
//表单验证规则
const rules = ref({
  userName: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    {
      min: 2,
      max: 20,
      message: "用户名称长度必须介于2和20之间",
      trigger: "blur",
    },
  ],
  nickName: { required: true, message: "用户昵称不能为空", trigger: "blur" },
  password: [
    { required: true, message: "用户密码不能为空", trigger: "blur" },
    {
      min: 5,
      max: 20,
      message: "用户密码长度必须介于5和20之间",
      trigger: "blur",
    },
  ],
  email: {
    type: "email",
    message: "请输入正确的邮箱地址",
    trigger: ["blur", "change"],
  },
  phoneNumber: {
    pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
    message: "请输入正确的手机号",
    trigger: "blur",
  },
});

//处理节点点击函数
const handleNodeClick = (data) => {
  queryParams.value.deptId = data.id;
  handleQuery();
};
//点击表单的搜索，处理用户数据渲染页面
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
};
//重置用户信息列表
const resetUserlist = () => {
  queryParams.value = {
    pageNum: 1,
    pageSize: 10,
    userName: undefined,
    phoneNumber: undefined,
    satus: undefined,
    departId: undefined,
  };
  loading.value = false;
  handleQuery();
};
//查询用户列表
const getList = () => {
  loading.value = true;
  listUser(addDateRange(queryParams.value, dateRange.value)).then(
    (response) => {
      userList.value = response.rows;
      console.log(userList.value);
      total.value = response.total;
      loading.value = false;
    }
  );
};
//当用户列表触发框选点击事件时
const handleSelectionChange = (selection) => {
  ids.value = selection.map((item) => {
    item.userId;
  }); //更新被选中的数组id
  single.value = selection.length != 1; //判断是否0个或超过一个被选中
  multiple.value = !selection.length; //判断是否有被选中的用户
};
//改变用户状态按钮操作，启用或停用
const handleStatusChange = (row) => {
  let text = row.status == "0" ? "启用" : "停用";
  ElMessageBox.confirm(
    "确认要" + text + "“" + row.userName + "”" + "用户吗?",
    "系统提示",
    {
      confirmButtonText: "确定",
      cancelButtonText: "停用",
      type: "warning",
    }
  ).then(async function () {
    const response = await changeUserStatus(row.userId, row.status); //用户状态修改
    if (response.code == 200) {
      //用户状态修改成功的回调
      ElMessage.success(text + "成功");
    } else if (response.code == 500) {
      ElMessage.error("演示模式，不允许操作");
      //用户状态修改失败的结果
      row.status = row.status == "0" ? "0" : "1";
    }
  });
};
//筛选部门树的节点
const filterNode = (value, data) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
};
//筛选时防抖
const debounceFilter = debounce((val) => {
  if (treeSelect.value) {
    treeSelect.value.filter(val);
  }
}, 300); //300ms防抖
//点击新增按钮弹出对话框
const handleAdd = () => {
  getUser().then((response) => {
    open.value = true;
    title.value = "添加用户";
    postOptions.value = response.posts;
    roleOptions.value = response.roles;
    nextTick(() => {
      reset(); // 在 DOM 更新后调用 reset，使用nextTick需要dialog组件在挂载后再重置myForm的值
      form.value.password = initPassword.value;
    });
  });
};
//修改按钮操作
const handleUpdate = (row) => {
  nextTick(() => {
    reset();
  });
  const userId = row.userId || ids.value;
  getUser(userId).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改用户";
    console.log(response);
    form.value.status = response.data.status == "0" ? "正常" : "停用";
    postOptions.value = response.posts;
    form.value.postIds = response.postIds;
    roleOptions.value = response.roles;
    form.value.roleIds = response.roleIds;
  });
};
//删除按钮操作
const handleDelete = (row) => {
  const userIds = row.userId || ids.value;
  ElMessageBox.confirm(
    `是否确认删除用户编号为“${userIds}”的数据项？`,
    "系统提示",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }
  )
    .then(async () => {
      const response = await delUser(userIds);
      getList();
      if (response.code == 500) {
        ElMessage.error(response.msg);
        console.error(response.msg);
      } else {
        alert("删除成功");
      }
    })
    .catch(() => {});
};
//更多按钮操作触发
const handleCommand = (command, row) => {
  switch (command) {
    case "handleResetPwd":
      handleResetPwd(row);
      break;
    case "handleAuthRole":
      handleAuthRole(row);
      break;
  }
};
//重置密码按钮操作
const handleResetPwd = (row) => {
  console.log(row);
  ElMessageBox.prompt(`请输入"${row.userName}"的新密码`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    closeOnClickModal: false,
    inputPattern: /^.{5,20}$/,
    inputErrorMessage: "用户密码长度必须介于 5 和 20 之间",
    inputValidator: (value) => {
      if (/<|>|"|'|\||\\/.test(value)) {
        return "不能包含非法字符：< > \" ' \\\ |";
      }
    },
  })
    .then(async (value) => {
      const response = await resetUserPwd(row.userId, value);
      if (response.code == 500) {
        ElMessage.error(response.msg);
        console.error(response.msg);
      }
    })
    .catch(() => {});
};
//进入角色配置页面
const handleAuthRole = (row) => {
  const userId = row.userId;
  console.log(typeof userId);
  router.push({ path: `/main/system/user-auth/${userId}` });
};
//重置表单函数
const reset = () => {
  form.value = {
    //重置form的值
    userId: undefined,
    deptId: undefined,
    userName: undefined,
    nickName: undefined,
    password: undefined,
    phonenumber: undefined,
    email: undefined,
    sex: undefined,
    status: "正常",
    remark: undefined,
    postIds: [],
    roleIds: [],
  };
  // if (myForm) {
  //   myForm.value.resetFields(); //form是ref自定义属性用于操作el-form的DOM，resetFields方法是elementPlus的方法，用于将表单的值回到初始状态
  // }
};
//提交表单
const submitForm = () => {
  myForm.value.validate((valid) => {
    if (valid) {
      ElMessage.error("演示模式，不允许操作");
    }
  });
};
//导入对话框显示
const handleImport = () => {
  upload.value.open = true;
  upload.value.title = "用户导入";
};
//文件上传中处理
const handleFileUploadProgress = () => {
  upload.value.isUploading = true; //上传过程中禁止继续上传
};
//文件上传成功的处理
const handleFileSuccess = (response, file, flieList) => {
  upload.value.isUploading = false;
  upload.value.open = false;
  myUpload.value.clearFiles();
  setTimeout(() => {
    ElMessageBox.alert(response.msg, "导入结果", {
      confirmButtonText: "确定",
    });
  }, 500);
  getList();
};
//上传文件
const submitFileForm = () => {
  myUpload.value.submit();
  // console.log(import.meta.env);
};
//下载模板
const importTemplate = () => {
  download(
    "system/user/importTemplate",
    {},
    `user_template_${new Date().getTime()}.xlsx`
  );
};
//导出按钮操作
const handleExport = () => {
  download(
    "system/user/export",
    { ...queryParams.value },
    `user_template_${new Date().getTime()}.xlsx`
  );
};

watch(
  //监视部门树的input框的值
  deptName,
  (val) => {
    if (treeSelect.value) {
      debounceFilter(val); //当input框的值发生变化时，防抖过滤节点
    }
  }
);
onMounted(() => {
  const fetchData = async () => {
    try {
      await store.departTree();
      departOptions.value = store.treeList;
      getList();
      //获取初始用户密码
      getConfigKey("sys.user.initPassword").then((response) => {
        initPassword.value = response.msg;
      });
    } catch (error) {
      console.error("加载部门树失败", error);
    }
  };
  fetchData();
});
</script>

<template>
  <div style="height: 100%">
    <el-row :gutter="20" style="height: 100%">
      <splitpanes>
        <pane size="14">
          <div class="head-container">
            <el-input
              v-model="deptName"
              :style="{ width: 'auto', minWidth: 0, marginBottom: '20px' }"
              placeholder="请输入部门名称"
              ><!-- 在input框中使用前缀标签的方法,#prefix相当于具名插槽slot -->
              <template #prefix> <i class="iconfont icon-search"></i> </template
            ></el-input>
          </div>
          <div class="head-container">
            <el-tree
              style="max-width: 600px"
              :data="departOptions"
              :props="defaultProps"
              :expand-on-click-node="false"
              :filter-node-method="filterNode"
              default-expand-all
              ref="treeSelect"
              @node-click="handleNodeClick"
            />
          </div>
        </pane>
        <pane size="86">
          <el-col>
            <el-form
              :model="queryParams"
              :inline="true"
              v-show="showSearch"
              label-width="68px"
            >
              <el-form-item label="用户名称" prop="userName">
                <el-input
                  v-model="queryParams.userName"
                  placeholder="请输入用户名称"
                  clearable
                  style="width: 240px"
                  @keyup.enter="handleQuery"
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="phoneNumber">
                <el-input
                  v-model="queryParams.phoneNumber"
                  placeholder="请输入手机号码"
                  clearable
                  style="width: 240px"
                  @keyup.enter="handleQuery"
                ></el-input>
              </el-form-item>
              <el-form-item label="状态" prop="status">
                <el-input
                  v-model="queryParams.userName"
                  placeholder="用户状态"
                  clearable
                  style="width: 240px"
                  @keyup.enter="handleQuery"
                ></el-input>
              </el-form-item>
              <el-form-item label="创建时间">
                <el-date-picker
                  v-model="dateRange"
                  style="width: 240px"
                  @keyup.enter="handleQuery"
                  value-format="yyyy-MM-dd"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  placement="bottom"
                ></el-date-picker>
              </el-form-item>

              <el-button type="primary" @click="handleQuery"
                ><i
                  class="iconfont icon-search"
                  style="font-size: 12px; margin-right: 4px"
                ></i
                >搜索</el-button
              >
              <el-button type="textarea" @click="resetUserlist"
                ><i
                  class="iconfont icon-update"
                  style="font-size: 12px; margin-right: 4px"
                ></i
                >重置</el-button
              >
            </el-form>
            <el-row :gutter="10" class="mb8">
              <el-col :span="1.5">
                <el-button plain type="primary" @click="handleAdd"
                  ><i class="iconfont icon-plus btnfont"></i> 新增</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button plain type="success" size="mini" disabled
                  ><i class="iconfont icon-edit3 btnfont"></i>修改</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button plain type="danger" size="mini" disabled
                  ><i class="iconfont icon-delete btnfont"></i>删除</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button plain type="info" size="mini" @click="handleImport"
                  ><i
                    class="iconfont icon-svg-icon-up-load btnfont"
                  />导入</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button
                  plain
                  type="warning"
                  size="mini"
                  @click="handleExport"
                  ><i class="iconfont icon-down_load btnfont" />导出</el-button
                >
              </el-col>
              <el-col :span="1.5" class="toolbar">
                <right-toolbar
                  :showSearch="showSearch"
                  :columns="columns"
                  @update:showSearch="
                    (value) => {
                      showSearch = value;
                    }
                  "
                  @queryTable="getList"
                ></right-toolbar>
              </el-col>
            </el-row>
            <el-table
              v-loading="loading"
              :data="userList"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="50" align="center" />
              <el-table-column
                label="用户编号"
                align="center"
                key="userId"
                prop="userId"
                v-if="columns[0].visible"
              />
              <el-table-column
                label="用户名称"
                align="center"
                key="userName"
                prop="userName"
                v-if="columns[1].visible"
              />
              <el-table-column
                label="用户昵称"
                align="center"
                key="nickName"
                prop="nickName"
                v-if="columns[2].visible"
              />
              <el-table-column
                label="部门"
                align="center"
                key="deptName"
                prop="dept.deptName"
                v-if="columns[3].visible"
              />
              <el-table-column
                label="手机号码"
                align="center"
                key="phonenumber"
                prop="phonenumber"
                v-if="columns[4].visible"
              />
              <el-table-column
                label="状态"
                align="center"
                key="status"
                v-if="columns[0].visible"
              >
                <template v-slot:default="scope">
                  <el-switch
                    v-model="scope.row.status"
                    active-value="0"
                    inactive-value="1"
                    @change="handleStatusChange(scope.row)"
                  ></el-switch>
                </template>
              </el-table-column>
              <el-table-column
                label="创建时间"
                align="center"
                prop="createTime"
                v-if="columns[6].visible"
                width="160"
              >
                <template v-slot:default="scope">
                  <span>{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center"
                width="160"
                class-name="small-padding fixed-width"
              >
                <!-- 使用 v-slot 正确绑定作用域 -->
                <template v-slot:default="scope">
                  <!-- 确保 v-if 放在最外层，避免 scope 为空 -->
                  <div
                    v-if="scope.row.userId !== 1"
                    style="display: flex; gap: 2px"
                  >
                    <!-- 打印 userId -->
                    <el-button
                      size="mini"
                      type="primary"
                      class="iconfont icon-edit3"
                      text
                      style="width: 40px"
                      @click="handleUpdate(scope.row)"
                      >修改</el-button
                    >

                    <el-button
                      size="mini"
                      type="primary"
                      class="iconfont icon-delete"
                      text
                      style="width: 40px; margin-left: 4px"
                      @click="handleDelete(scope.row)"
                      >删除</el-button
                    >
                    <el-dropdown
                      size="mini"
                      @command="(command) => handleCommand(command, scope.row)"
                    >
                      <el-button
                        size="mini"
                        type="primary"
                        text
                        style="width: 40px"
                        class="iconfont icon-arraw-right"
                        >更多</el-button
                      >

                      <!-- 具名插槽放在这里 -->
                      <template #dropdown>
                        <el-dropdown-menu style="width: 80px; padding: 0">
                          <el-dropdown-item
                            command="handleResetPwd"
                            style="font-size: 12px; padding: 4px 0px 4px 4px"
                          >
                            <i class="iconfont icon-key"></i>
                            重置密码</el-dropdown-item
                          >
                          <el-dropdown-item
                            command="handleAuthRole"
                            style="font-size: 12px; padding: 4px 0px 4px 4px"
                          >
                            <i class="iconfont icon-choose"></i>
                            分配角色</el-dropdown-item
                          >
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <pagination :total="total || 0" v-show="total > 0"></pagination>
          </el-col>
        </pane>
      </splitpanes>
    </el-row>

    <!-- 添加或修改用户配置框 -->
    <el-dialog
      v-model="open"
      :title="title"
      width="600px"
      append-to-body
      :close-on-click-modal="false"
    >
      <el-form label-width="80px" :rules="rules" :model="form" ref="myForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户昵称" prop="nickName">
              <el-input
                placeholder="请输入用户昵称"
                v-model="form.nickName"
                maxlength="30"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属部门" prop="deptId">
              <el-tree-select
                style="padding: 0px"
                v-model="form.deptId"
                :data="departOptions"
                :props="defaultProps"
                placeholder="请选择归属部门"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="手机号码" prop="phoneNumber">
              <el-input
                v-model="form.phonenumber"
                placeholder="请输入手机号码"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="form.email"
                placeholder="请输入邮箱"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="用户名称"
              prop="userName"
              v-if="form.userId == undefined"
            >
              <el-input
                v-model="form.userName"
                placeholder="请输入用户名称"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item
              label="用户密码"
              prop="password"
              v-if="form.userId == undefined"
            >
              <el-input
                v-model="form.password"
                placeholder="请输入用户密码"
                type="password"
                show-password
                maxlength="20"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户性别">
              <el-select
                style="padding: 0px"
                v-model="form.sex"
                placeholder="请选择性别"
              >
                <el-option
                  v-for="(sex, index) in dicts.sexs"
                  :key="index"
                  :label="sex"
                  :value="sex"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-radio-group v-model="form.status"
                ><el-radio
                  v-for="(sta, index) in dicts.status"
                  :key="index"
                  :value="sta"
                  :label="sta"
                  >{{ sta }}</el-radio
                ></el-radio-group
              ></el-form-item
            ></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="岗位">
              <el-select
                style="padding: 0px"
                v-model="form.postIds"
                placeholder="请选择岗位"
                multiple
              >
                <el-option
                  v-for="item in postOptions"
                  :key="item.postId"
                  :label="item.postName"
                  :value="item.postId"
                  :disabled="item.status == 1"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="角色">
              <el-select
                style="padding: 0px"
                v-model="form.roleIds"
                placeholder="请选择角色"
                multiple
              >
                <el-option
                  v-for="item in roleOptions"
                  :key="item.roleId"
                  :label="item.roleName"
                  :value="item.roleId"
                  :disabled="item.status == 1"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input
                v-model="form.remark"
                type="textarea"
                placeholder="请输入内容"
              ></el-input
            ></el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="dialog-footer">
        <el-button
          @click="submitForm"
          style="width: 73.89px; height: 36px"
          type="primary"
          >确定</el-button
        >
        <el-button @click="open = false" style="width: 73.89px; height: 36px"
          >取消</el-button
        >
      </div>
    </el-dialog>

    <!--用户导入对话框  -->
    <el-dialog
      v-model="upload.open"
      :title="upload.title"
      width="400px"
      append-to-body
    >
      <el-upload
        ref="myUpload"
        :limit="1"
        accept=".xlsx,.xls"
        :headers="upload.headers"
        :action="upload.url + '?updateSupport=' + upload.updateSupport"
        :disabled="upload.isUploading"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="false"
        drag
      >
        <i class="iconfont icon-upload" style="font-size: 67px"></i>
        <div class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div></el-upload
      >
      <div class="el-upload__tip text-center">
        <div class="el-upload__tip">
          <el-checkbox v-model="upload.updateSupport"></el-checkbox
          >是否更新已经存在的用户数据
        </div>
        <span>仅允许导入xls、xlsx格式文件。 </span
        ><el-link class="text-center" @click="importTemplate">下载模板</el-link>
      </div>
      <div class="dialog-footer">
        <el-button
          @click="submitFileForm"
          style="width: 73.89px; height: 36px"
          type="primary"
          >确定</el-button
        >
        <el-button
          @click="upload.open = false"
          style="width: 73.89px; height: 36px"
          >取消</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.splitpanes {
  display: flex;
  gap: 20px;
}
:deep(.splitpanes__splitter) {
  width: 1px !important;
  background-color: #eee;
}
:deep(.el-form) {
  padding-bottom: 20px;
}
:deep(.el-form-item) {
  margin-bottom: 20px;
}

:deep(.el-form-item__label) {
  color: #606266;
  font-weight: 700;
  font-size: 14px;
}

:deep(.el-button:nth-child(-n + 5)) {
  width: 73px;
  height: 28px;
  font-size: 12px;
  padding: 7px 15px;
}

:deep(.el-button.is-circle) {
  width: 28px !important;
  height: 28px !important;
}

:deep(.el-button + .el-button) {
  margin-left: 10px;
}
.iconfont {
  font-size: 12px;
}
.btnfont {
  font-size: 10px !important;
  margin: 3px 3px !important;
}
.toolbar {
  position: relative;
  left: 870px;
}

.el-col-12 {
  margin-bottom: 6px;
}
.dialog-footer {
  padding: 40px 20px 10px;
  text-align: right;
}
:deep(.el-upload-dragger) {
  display: inline-block;
  width: 360px;
  height: 180px;
  margin-top: 20px;
  line-height: 60px;
  color: #c0c4cc;
}

.el-upload__text {
  line-height: 0;
}

.text-center {
  text-align: center;
  line-height: 12px;
  font-size: 12px !important;
}
:deep(.el-link__inner) {
  color: #1890ff !important;
  line-height: 1px;
}
</style>
