# Vue Vite USPS 项目规范

`Version 1.2.0 | 适用于Cursor IDE`

## 📁 文件结构规则

```bash
.cursor/
└── rules/
    ├── general.mdc
    ├── vue-components.mdc
    ├── less-style.mdc
    ├── routes.mdc
    ├── form-validation.mdc
    └── ai-constraints.mdc
```

## 🛠 基础配置

```markdown
// .cursor/rules/general.mdc
**技术栈要求**：

- Vue 3.4+ Composition API
- Vite 5.0+
- Vue Router 4.2+ (history模式)
- Less 4.2+
- Element Plus 2.4+
- Typescript

**目录规范**：
src/
├─ views/ # 路由页面组件
├─ components/ # 公共组件
├─ router/ # 路由配置
└─ styles/ # Less样式体系
```

## 🖥 Vue组件规范

```vue
<!-- 标准组件结构 -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({})

function nextStep() {
  router.push('/address')
}
</script>

<template>
  <div class="usps-form-section">
    <router-view v-slot="{ Component }">
      <transition name="form-slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';
.usps-form-section {
  padding: 2rem;
  background: @form-bg-color;
}
</style>
```

## 🎨 样式规范

```less
// src/styles/variables.less
@usps-colors: {
  primary: #004b87;
  secondary: #0073ae;
  error: #c4001a;
};

@form-max-width: 768px;
@transition-duration: 0.3s;

// 混合器
.form-box-shadow() {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

## 🧭 路由配置

```javascript
// src/router/index.js
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FormLayout.vue'),
    children: [
      {
        path: 'warning',
        name: 'PackageWarning',
        meta: {
          step: 1
        }
      },
      {
        path: 'address',
        name: 'AddressForm',
        meta: {
          step: 2,
          validationSchema: addressSchema // 从验证规则引入
        }
      },
      {
        path: 'payment',
        name: 'PaymentForm',
        meta: {
          step: 3,
          requiresPrevValidation: true
        }
      }
    ]
  }
]
```

## ✅ 表单验证

```javascript
// 使用vee-validate的配置
export const addressSchema = object({
  street: string().required('Street address is required'),
  zipCode: string().matches(/^\d{5}(-\d{4})?$/, 'Valid USPS ZIP code required')
})
```

## ⚠️ AI约束规则

**严格禁止**：

- 使用非响应式DOM操作
- 直接操作window.location
- 非Less样式编写
- 超过3层嵌套的Less规则

**必须包含**：

- 路由过渡动画
- WCAG 2.1兼容性
- 移动端适配
- 表单状态持久化

## 📥 使用方式

1. 复制本文件内容
2. 在项目根目录创建：
   ```bash
   mkdir -p .cursor/rules
   ```
3. 分割内容到对应的.mdc文件
4. 在Cursor设置中启用Rules系统
5. 建议保存为 USPS-FORM-RULES.md 作为项目文档

## 🔄 更新机制

```json
// 推荐package.json配置
{
  "scripts": {
    "update-rules": "curl -O https://example.com/rules.md && sh split_rules.sh"
  }
}
```
