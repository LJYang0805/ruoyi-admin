<template>
  <div class="container">
    <p>
      <el-text class="mx-1" type="warning"
        >领取阿里云通用云产品1888优惠券</el-text
      >
    </p>
    <p>
      <el-link
        type="primary"
        href="https://www.aliyun.com/minisite/goods?userCode=brki8iof"
        >https://www.aliyun.com/minisite/goods?userCode=brki8iof
      </el-link>
    </p>
    <p>
      <el-text class="mx-1" type="warning"
        >领取阿里云通用云产品1888优惠券</el-text
      >
    </p>
    <p>
      <el-link
        type="primary"
        href="https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=198c8df2ed259157187173bc7f4f32fd&from=console"
        >https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=198c8df2ed259157187173bc7f4f32fd&from=console
      </el-link>
    </p>
    <p>
      <el-text class="mx-1" type="warning">阿里云服务器折扣区</el-text>

      <el-link type="primary">>☛☛点我进入☚☚</el-link>
      <el-text class="mx-1" type="warning">腾讯云服务器秒杀区</el-text>

      <el-link type="primary">>☛☛点我进入☚☚</el-link>
    </p>
    <p>
      <el-text class="mx-1" type="danger"
        >云产品通用红包，可叠加官网常规优惠使用。(仅限新用户)</el-text
      >
    </p>
  </div>
  <el-row>
    <el-col :span="12">
      <h2>若依后台管理框架</h2>
      <p>
        一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。于是利用空闲休息时间开始自己写一套后台系统。如此有了若依管理系统，她可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。同时支持移动客户端访问。系统会陆续更新一些实用功能。
      </p>
      <p><i>当前版本:</i> v3.8.8</p>
      <p><el-button type="danger" plain size="small">¥免费开源</el-button></p>
      <p>
        <a href="https://gitee.com/y_project/RuoYi-Vue"
          ><el-button type="primary" plain size="small"
            ><i class="iconfont icon-cloud"></i>
            <span>访问码云</span></el-button
          ></a
        >
        <el-button size="small"
          ><i class="iconfont icon-Home"></i> <span>访问主页</span></el-button
        >
      </p>
    </el-col>
    <el-col :span="12">
      <el-row
        ><el-col
          :span="12"
          style="padding-left: 26px; padding-right: 10px !important"
        >
          <h2 class="title">技术选型</h2></el-col
        ></el-row
      >
      <el-row style="border-top: 0px #fff; margin: -22px 0px 0px 50px">
        <el-col
          :span="6"
          style="
            font: 13px open sans, Helvetica Neue, Helvetica, Arial, sans-serif;
          "
        >
          <h4>后端技术</h4>
          <ul>
            <li>SpringBoot</li>
            <li>Spring Security</li>
            <li>JWT</li>
            <li>MyBatis</li>
            <li>Druid</li>
            <li>Fastjson</li>
            <li>...</li>
          </ul>
        </el-col>
        <el-col
          :span="6"
          style="
            font: 13px open sans, Helvetica Neue, Helvetica, Arial, sans-serif;
          "
        >
          <h4>前端技术</h4>
          <ul>
            <li>Vue</li>
            <li>Vuex</li>
            <li>Element-ui</li>
            <li>Axios</li>
            <li>Sass</li>
            <li>Quill</li>
            <li>...</li>
          </ul>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8"> 12 </el-col>
    <el-col :span="8"> 34</el-col>
    <el-col :span="8">56</el-col>
  </el-row>
</template>

<script setup></script>

<style>
.container {
  font-size: 14px;
  line-height: 17px;
  font-family: open sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 20px 18px 30px 20px;
  padding: 12px 20px 31px 20px;
  width: 100%;
  height: auto;
  border-left: 5px solid #eeeeee;
}

p {
  margin: 0px;
}
.el-row {
  margin: -10px 24px 0px 24px;
  padding: 10px 6px;
  color: #676a6c;
  font-family: open sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  border-top: 1px solid #eee;
}
h2 {
  font-size: 26px;
  line-height: 26px;
  font-weight: 300;
}
.el-col > p {
  display: block;
  padding: 1px 10px 12px 0px;
  font-size: 13px;
}
.el-col > p > i {
  font-weight: 600;
  font-style: normal;
}

.el-button {
  height: 28px;
  margin-left: 10px;
}

.el-button:first-child {
  margin-left: 0px;
}

span {
  margin-left: 5px !important;
}
.iconfont {
  font-size: 12px;
}

h4 {
  font-weight: normal;
  margin: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}

.el-row:last-child {
  margin: 14px 0 0 26px;
}
</style>
