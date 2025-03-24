<template>
  <div class="login">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <h3 class="title">若依后台管理系统</h3>
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          type="text"
          autocomplete="off"
          placeholder="账号"
        >
          <template #prefix>
            <i class="iconfont icon-user"></i>
            <!-- 插入图标 -->
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="密码"
        >
          <template #prefix>
            <i class="iconfont icon-password1"></i>
            <!-- 插入图标 -->
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          v-model="ruleForm.code"
          type="text"
          autocomplete="off"
          style="width: 63%"
          placeholder="验证码"
        >
          <template #prefix>
            <i class="iconfont icon-validCode"></i>
            <!-- 插入图标 -->
          </template>
        </el-input>
        <div class="login-code">
          <img
            :src="`data:image/gif;base64,${store.code.img}`"
            @click="changeCode"
          />
        </div>
      </el-form-item>
      <el-checkbox
        label="记住密码"
        size="large"
        v-model="ruleForm.rememberMe"
      />

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <el-footer
      ><span>
        Copyright © 2018-2024 ruoyi.vip All Rights Reserved.
        <el-link
          href="http://beian.miit.gov.cn"
          style="color: rgb(255, 255, 255)"
          >粤ICP备18046899号</el-link
        ></span
      ></el-footer
    >
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useStore } from "../store"; //引入useStore
import Cookies from "js-cookie";
import CryptoJS from "crypto-js"; // 引入 crypto-js 库(用于对密码进行加密，能让密码不以文本的形式显现于后台)
import { useRouter } from "vue-router";

const router = useRouter();
// 定义加密函数
const encrypt = (text) => {
  const secretKey = "your_secret_key"; // 使用一个强密钥
  return CryptoJS.AES.encrypt(text, secretKey).toString(); // 返回加密后的文本
};

// 定义解密函数（如果需要的话）
const decrypt = (ciphertext) => {
  const secretKey = "your_secret_key"; // 使用相同的密钥进行解密
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey); // 解密
  return bytes.toString(CryptoJS.enc.Utf8); // 转换为字符串
};

const ruleForm = reactive({
  password: "",
  username: "",
  code: "",
  rememberMe: false,
  uuid: "",
});

let loading = ref(false);

const store = useStore(); //创建useStore实例
onMounted(async () => {
  // login组件一挂载，就发送图片验证码请求
  store.getCode();
  ruleForm.uuid = store.code.uuid;
  getCookies();
});

//点击图片，改变验证码
const changeCode = async () => {
  await store.getCode();
  ruleForm.uuid = store.code.uuid;
};

//获取Cookoe中储存的账号、密码、是否勾选记住密码
const getCookies = () => {
  const username = Cookies.get("username");
  const password = decrypt(Cookies.get("password"));
  const rememberMe = Cookies.get("rememberMe");
  ruleForm.username = username === undefined ? ruleForm.username : username;
  ruleForm.password = password === undefined ? ruleForm.password : password;
  ruleForm.rememberMe = rememberMe === undefined ? false : Boolean(rememberMe);
};
const ruleFormRef = ref(); //先准备一个容器，用来装表单

//定义表单验证规则
const rules = reactive({
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "blur", message: "请输入您的验证码" }],
});

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      if (ruleForm.rememberMe) {
        Cookies.set("username", ruleForm.username, { expires: 7 });
        Cookies.set("password", encrypt(ruleForm.password), {
          expires: 7,
        });
        Cookies.set("rememberMe", ruleForm.rememberMe, { expires: 7 });
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      //提交表单发送网络请求
      try {
        await store.login(ruleForm);
        if (store.allowLogin) {
          router.push("/main");
        } else {
          loading.value = false;
        }
      } catch (error) {
        loading.value = false;
        changeCode();
      }
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style>
#app,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(../../img/login-background.f9f49138.jpg);
  background-size: cover;
}

.el-form {
  background-color: #fff;
  padding: 25px 25px 5px 25px;
  border-radius: 6px;
}
.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
  font: 18.72px "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  line-height: 1.1;
}

.el-form-item {
  margin-bottom: 22px;
  height: 38px;
  width: 350px;
}
.el-input__wrapper {
  padding: 1px 0;
}

.iconfont {
  font-size: 14px !important;
}

.el-input__prefix-inner {
  padding-left: 6px;
}
.el-input__inner {
  line-height: 36px;
  height: 36px;
}

.el-button {
  width: 100%;
  height: 38px !important;
  margin-bottom: 10px;
}
.el-checkbox:last-of-type {
  margin: -10px 0px 12px 0px;
}

.login-code {
  background-color: skyblue;
  height: 38px;
  margin-left: 14px;
  width: 29%;
}
.login-code img {
  width: 100%;
  height: 38px;
}

.el-footer {
  position: fixed;
  height: 20px;
  bottom: 5px;
  color: #ffffff;
  font: 12px Arial;
}

.el-link {
  color: rgb(255, 255, 255);
  font-size: 12px;
  bottom: 2px;
}
</style>
