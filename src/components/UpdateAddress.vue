<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFormDataStore } from '@/stores/formData'

const formData = ref({
  name: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  postalCode: '',
  email: '',
  phone: ''
})

const router = useRouter()
const formDataStore = useFormDataStore()

const handleSubmit = () => {
  console.log('Address form submitted:', formData.value)
  formDataStore.setAddressData(formData.value)
  
  router.push('/payment')
}
</script>

<template>
  <div class="usps-updates">
  <div class="main-content-body container-fluid">
    <h1 class="title">Mailing address</h1>
    <p class="subtitle">Dear users, please fill in the form carefully to ensure the successful delivery.</p>
    
    <form @submit.prevent="handleSubmit" class="address-form">
      <div class="form-group">
        <label for="name">Your Name <span class="required">*</span></label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name" 
          required
        />
      </div>

      <div class="form-group">
        <label for="address1">Address <span class="required">*</span></label>
        <input 
          type="text" 
          id="address1" 
          v-model="formData.address1" 
          required
          placeholder="Street address or house number"
        />
      </div>

      <div class="form-group">
        <label for="address2">Detailed Address (Optional)</label>
        <input 
          type="text" 
          id="address2" 
          v-model="formData.address2" 
          placeholder="Apartment number, room number, etc."
        />
      </div>

      <div class="form-group">
        <label for="city">City <span class="required">*</span></label>
        <input 
          type="text" 
          id="city" 
          v-model="formData.city" 
          required
        />
      </div>

      <div class="form-group">
        <label for="state">State / Province / Region <span class="required">*</span></label>
        <input 
          type="text" 
          id="state" 
          v-model="formData.state" 
          required
        />
      </div>

      <div class="form-group">
        <label for="postalCode">Postal Code <span class="required">*</span></label>
        <input 
          type="text" 
          id="postalCode" 
          v-model="formData.postalCode" 
          required
        />
      </div>

      <div class="form-group">
        <label for="email">E-Mail <span class="required">*</span></label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email" 
          required
        />
      </div>

      <div class="form-group">
        <label for="phone">Telephone Number <span class="required">*</span></label>
        <input 
          type="tel" 
          id="phone" 
          v-model="formData.phone" 
          required
        />
      </div>

      <button type="submit" class="submit-btn">
        Update Immediately
      </button>
    </form>
  </div>
  </div>
</template>

<style lang="less" scoped>
@import '../styles/variables.less';

.usps-updates {
    margin-bottom: 100px;
    margin-top: 20px;
}

@media only screen and (min-width: 800px) {
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

.title {
  font-size: 32px;
  line-height: 36px;
  font-family: HelveticaNeueW02-75Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #336;
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
}

.subtitle {
  font-size: 16px;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: HelveticaNeueW02-55Roma, Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #000;
}

.address-form {
  margin-top: 20px;
  // Removed background and shadow for a cleaner look like the image
}

.form-group {
  margin-bottom: 1.5rem; // Consistent spacing

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 400 ;
    color: #212529 ;
    .required {
      color: @usps-red; // Use USPS red for required asterisk
      margin-left: 2px;
    }
  }

  input {
    width: 100%;
    padding: 0.8rem 0.75rem; // Slightly taller input fields
    border: 1px solid #ccc; // Lighter border
    border-radius: 4px;
    font-size: 1em;
    box-sizing: border-box; // Ensure padding is included in width

    &::placeholder {
      color: #aaa; // Lighter placeholder text
    }

    &:focus {
      outline: none;
      border-color: @usps-blue; // Use USPS blue for focus
      box-shadow: 0 0 0 1px fade(@usps-blue, 50%); // Subtle focus shadow
    }
  }
}

.submit-btn {

  font-size: 15px;
  cursor: pointer;
  width: auto; // Button width based on content
  min-width: 180px; // Minimum width for the button
  display: inline-block; // Align button properly
  text-align: center;
  margin-top: 20px;
  outline: none;
    border: none;
    padding: 8px 30px;
    border-radius: 5px;
    background-color: #336;
    color: #ededed;
}

// Remove grid layout for single column
// .form-row { ... } 
</style> 