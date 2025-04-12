<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFormDataStore } from '@/stores/formData'

// 生成随机包裹号
function generateRandomTrackingNumber() {
  // 保持 US 前缀
  const prefix = 'US'
  // 生成 9 位随机数字
  let randomDigits = ''
  for (let i = 0; i < 9; i++) {
    randomDigits += Math.floor(Math.random() * 10)
  }
  return prefix + randomDigits
}

// 计算明天的日期
function getTomorrowDate() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const year = tomorrow.getFullYear()
  const month = tomorrow.getMonth() + 1
  const day = tomorrow.getDate()
  return `${year}/${month}/${day}`
}

const trackingNumber = ref(generateRandomTrackingNumber())
const tomorrowDate = ref(getTomorrowDate())
const router = useRouter()
const route = useRoute()
const formDataStore = useFormDataStore()

// Get the identification code when component is mounted
onMounted(() => {
  const code =
    typeof route.params.identificationCode === 'string'
      ? route.params.identificationCode
      : 'b2d4f4e9'
  // Store the identification code in the global store
  formDataStore.setIdentificationCode(code)
})

const goToUpdateAddress = () => {
  // Use the code from the store
  router.push(`/update-address/${formDataStore.identificationCode}`)
}
</script>

<template>
  <div class="package-warning">
    <h1 class="delivery-status">Delivery status</h1>

    <div class="warning-content">
      <div class="tracking-info">
        <p class="tracking-label">Your package number number: {{ trackingNumber }}</p>
      </div>

      <div class="warning-message">
        <h2 class="failure-notice">Failure notice of delivery</h2>
        <ul class="warning-list">
          <li>Because the delivery address is not clear, your package is not delivered</li>
          <li>Your package has returned to our operation center</li>
          <li>Please update your address, we will ship again in {{ tomorrowDate }}</li>
        </ul>
      </div>

      <button class="continue-btn but b-color" @click="goToUpdateAddress">Continue</button>
    </div>
  </div>
</template>

<style lang="less">
.package-warning {
  max-width: 800px;
  margin: 20px auto 100px auto;
  padding: 20px 1rem;
  font-size: 15px;

  .delivery-status {
    color: #004b87;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    text-align: center;
  }

  .warning-content {
    border-radius: 8px;
    font-size: 22px;
    padding: 2rem;
    margin-top: 25px;
    background: #f2f2f2;
  }

  .tracking-info {
    margin-bottom: 1.5rem;

    .tracking-label {
      font-size: 16px;
      color: #333;
    }
  }

  .warning-message {
    margin-bottom: 2rem;

    .failure-notice {
      color: #c4001a;
      font-size: 16px;
      margin-bottom: 1rem;
    }

    .warning-list {
      list-style: none;
      padding: 0;
      font-size: 15px;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        color: #333;

        &:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #c4001a;
        }
      }
    }
  }

  .continue-btn {
    outline: none;
    border: none;
    padding: 8px 30px;
    border-radius: 5px;
    background-color: #336;
    color: #ededed;
    cursor: pointer;
    font-size: 15px;
    font-family:
      HelveticaNeueW02-55Roma,
      Helvetica Neue,
      Helvetica,
      Arial,
      sans-serif;
  }
}
</style>
