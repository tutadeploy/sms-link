# USPS Package Delivery Form

基于 Vue 3 + TypeScript 的 USPS 包裹投递信息确认系统，支持响应式设计和多端适配。

## 技术栈

- Vue 3.4+ (Composition API)
- TypeScript
- Vite 5.0+
- Vue Router 4.2+
- Less 4.2+
- Element Plus 2.4+

## 项目结构

```bash
src/
├── views/                # 页面组件
│   ├── PackageWarning.vue   # 包裹警告页
│   ├── AddressForm.vue      # 地址表单页
│   └── PaymentForm.vue      # 支付表单页
├── layouts/              # 布局组件
│   └── FormLayout.vue       # 主布局组件
├── styles/              # 样式文件
│   ├── variables.less      # 变量定义
│   ├── mixins.less        # 混合器
│   └── main.less          # 主样式文件
├── router/              # 路由配置
│   └── index.ts
├── App.vue             # 根组件
└── main.ts             # 入口文件
```

## 页面组件

### 1. PackageWarning.vue

- 功能：显示包裹相关警告信息
- 组件特点：
  - 警告提示框设计
  - 包裹追踪号展示
  - 状态信息展示
  - 继续按钮跳转

### 2. AddressForm.vue

- 功能：地址信息收集表单
- 表单字段：
  - 街道地址
  - 公寓号（可选）
  - 城市
  - 州
  - 邮编
- 验证规则：
  - 必填字段验证
  - 邮编格式验证（支持 5 位和 9 位格式）

### 3. PaymentForm.vue

- 功能：支付信息收集表单
- 表单字段：
  - 卡号（自动格式化）
  - 持卡人姓名
  - 有效期（MM/YY）
  - CVV码
- 验证规则：
  - 信用卡号验证（16位）
  - 有效期格式验证
  - CVV码验证（3-4位）

## 样式系统

### 颜色变量

```less
@color-primary: #004b87; // USPS 主色
@color-secondary: #0073ae; // 次要色
@color-error: #c4001a; // 错误色
@color-success: #2e7d32; // 成功色
@color-warning: #f57c00; // 警告色
@color-info: #0288d1; // 信息色
```

### 响应式断点

```less
@breakpoint-mobile: 320px;
@breakpoint-tablet: 768px;
@breakpoint-desktop: 1024px;
@breakpoint-wide: 1440px;
```

### 容器宽度

```less
@container-mobile: 100%;
@container-tablet: 720px;
@container-desktop: 960px;
@container-wide: 1200px;
```

### 间距系统

```less
@spacing-unit: 8px;
@spacing-xs: @spacing-unit; // 8px
@spacing-sm: @spacing-unit * 2; // 16px
@spacing-md: @spacing-unit * 3; // 24px
@spacing-lg: @spacing-unit * 4; // 32px
@spacing-xl: @spacing-unit * 6; // 48px
```

## 响应式设计

### 移动端适配

- 使用 flex 布局实现垂直堆叠
- 表单控件全宽显示
- 适当增加表单项间距
- 按钮适配触摸操作

### 平板适配（768px - 1024px）

- 双列表单布局
- 优化表单组件间距
- 保持合适的表单宽度

### 桌面端适配（1024px+）

- 三列表单布局
- 固定最大内容宽度
- 优化大屏幕阅读体验

### 宽屏适配（1440px+）

- 保持居中布局
- 控制最大内容宽度
- 优化页面留白

## 表单交互

### 验证反馈

- 即时字段验证
- 错误信息显示
- 表单提交验证
- 字段状态视觉反馈

### 用户体验

- 表单自动聚焦
- 键盘导航支持
- 信用卡号自动格式化
- 平滑的页面过渡动画

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发服务器启动

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 代码规范检查

```bash
npm run lint
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari (13+)
- Android Chrome (最新版)

## 性能优化

- 路由懒加载
- 组件按需加载
- 样式按需引入
- 资源预加载
- 图片优化

## 安全性

- 表单数据验证
- XSS 防护
- CSRF 防护
- 敏感信息加密
- 安全的路由守卫

## 无障碍支持

- ARIA 标签支持
- 键盘导航
- 高对比度支持
- 屏幕阅读器兼容
- 焦点管理

## 部署说明

项目使用 Vite 构建，可以轻松部署到任何静态服务器：

1. 执行构建命令：

```bash
npm run build
```

2. 将 `dist` 目录部署到服务器

3. 配置服务器重写规则以支持 HTML5 History 模式

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 推送到分支
5. 创建 Pull Request

## 许可证

[MIT License](LICENSE)
