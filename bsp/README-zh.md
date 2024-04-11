# 约纽科技资产系统子应用--监控
```bash
# 克隆项目
git clone https://gitee.com/yuenew/scamo-visual-cloud-web.git

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 [http://localhost:19012/visual](http://localhost:19012/visual)

## 子应用说明
```bash
#  .env.development 开发环境配置文件
    子应用可以单独访问
    可以配置登录账号和密码
    重新配置账号密码之后需要重启项目，退出账号重新登录才会生效
# .env.production  生产环境配置文件
    生产环境主应用地址  VUE_APP_MAIN_URL  生产环境进入子应用时，会跳到这个地址

# 可以通过 window.$wujie 访问主应用、获取主应用的资源
```

## 请求端口
```bash
# 如果是从主应用进入，请求地址从主应用获取，如果单独启动，则会启用.env.development配置的地址

# 开发版会经过vue.config 代理 ，配置文件位置
   .env.development
      请求地址配置 VUE_APP_SERVER

# 生产版 配置文件位置
   .env.production
      nginx 识别配置 VUE_APP_BASE_API
```
## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
## 注意事项
```bash
# 开发版启动项目会经过eslint格式检查，检验不通过会在终端报错误或者警告，请严格按照eslint格式编写代码

# 不要把某一块的样式写到公共样式表，尽量不写公共样式

# 不需要把表单字段列举出来
```