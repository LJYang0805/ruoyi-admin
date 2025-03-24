<script lang="ts" setup>
import { ref } from "vue";

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

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
    <el-col :span="8">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <span>联系信息</span>
          </div>
        </template>
        <p class="text item">
          <i class="iconfont icon-paper-plane-1"></i>官网：
          <el-link href="http://www.ruoyi.vip" target="_blank"
            >http://www.ruoyi.vip</el-link
          >
        </p>
        <p class="text item">
          <i class="iconfont icon-user"></i>QQ群：
          <s> 满937441 </s>
          <s> 满887144332</s>
          <s> 满180251782 </s>
          <s> 满104180207 </s>
          <s> 满186866453 </s>
          <s> 满201396349 </s>
          <s> 满101456076 </s>
          <s> 满101539465 </s>
          <s> 满264312783 </s>
          <s> 满167385320 </s>
          <s> 满104748341 </s>
          <s> 满160110482 </s>
          <s> 满104748341 </s>
          <s> 满160110482 </s>
          <s> 满104748341 </s>
          <s> 满160110482 </s>
          <s> 满104748341 </s>
          <s> 满160110482 </s>
          <s> 满104748341 </s>
          <s> 满160110482 </s>
          <s> 满160110482 </s>
          <a
            target="_blank"
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SUc-msaypcqB2UTFif4eqGlBHkKcvMNP&authKey=JdQBouY2PG%2BS%2BCzAfIgbCGNgxyahpfh24IW%2F03rPxGilhqVbisLma%2FFFnt79DHNh&noverify=0&group_code=151450850"
          >
            151450850</a
          >
        </p>
        <p class="text item">
          <i class="iconfont icon-chat"></i> 微信：
          <a href="#" target="_blank">/ *若依</a>
        </p>
        <p class="text item">
          <i class="iconfont icon-wallet"></i>支付宝：
          <a href="#" target="_blank">/ *若依</a>
        </p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <span>更新日志</span>
          </div>
        </template>
        <div class="demo-collapse">
          <el-collapse
            v-model="activeNames"
            @change="handleChange"
            accordion="true"
          >
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="1">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="2">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="3">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="4">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="5">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="6">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="7">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="8">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="9">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="10">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="11">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
            <el-collapse-item title="v3.8.8 - 2024-06-30" name="12">
              <div>
                <ol>
                  <li>菜单管理新增路由名称</li>
                  <li>新增数据脱敏过滤注解</li>
                  <li>用户密码新增非法字符验证</li>
                  <li>限制用户操作数据权限范围</li>
                  <li>代码生成新增创建表结构功能</li>
                  <li>定时任务白名单配置范围缩小</li>
                  <li>优化代码生成主子表关联查询方式</li>
                  <li>Excel注解新增属性comboReadDict</li>
                  <li>Excel注解ColumnType类型新增文本</li>
                  <li>新增国际化资源文件配置</li>
                  <li>升级oshi到最新版本6.6.1</li>
                  <li>升级druid到最新版本1.2.23</li>
                  <li>升级core-js到最新版本3.37.1</li>
                  <li>更新HttpUtils中的User-Agent</li>
                  <li>更新compressionPlugin到6.1.2以兼容node18+</li>
                  <li>升级spring-security到安全版本，防止漏洞风险</li>
                  <li>升级spring-framework到安全版本，防止漏洞风险</li>
                  <li>优化自定义XSS注解匹配方式</li>
                  <li>优化缓存监控键名列表排序显示</li>
                  <li>优化定时任务日志默认按时间排序</li>
                  <li>优化默认文件大小超过2G无效的问题</li>
                  <li>优化查表特殊字符使用反斜杠进行转义</li>
                  <li>优化定时任务cron表达式小时配置显示错误问题</li>
                  <li>优化多个自定数据权限使用in查询,避免多次拼接</li>
                  <li>优化导入Excel时设置dictType属性重复查缓存问题</li>
                  <li>其他细节优化</li>
                </ol>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card></el-col
    >
    <el-col :span="8">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <span>捐赠支持</span>
          </div>
        </template>
        <img
          src="https://vue.ruoyi.vip/static/img/pay.b5dece6f.png"
          alt=""
          style="width: 100%"
        />
        <p>你可以请作者喝咖啡表示鼓励</p></el-card
      ></el-col
    >
  </el-row>
</template>

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
  margin: 14px 0 0 10px;
}
.el-main > .el-row:nth-child(3) {
  padding: 24px 0 0 0;
}
.el-main > .el-row:nth-child(3) > .el-col {
  padding: 0 10px;
  font: 13px open sans, Helvetica Neue, Helvetica, Arial, sans-serif;
}

.el-main > .el-row:nth-child(3) > .el-col:nth-child(2) {
  margin-bottom: 20px !important ;
}
.el-card__header {
  padding: 14px 15px 7px;
}

p > a {
  text-decoration: none;
  color: #000;
}
.el-card__body > p {
  margin: 10px 0 13px !important;
}

:deep.container ol {
  list-style-type: decimal !important;
}
</style>
