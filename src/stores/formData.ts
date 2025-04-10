import { ref } from 'vue'
import { defineStore } from 'pinia'

// Define an interface for the address data shape
export interface AddressData {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  email: string;
  phone: string;
}

export const useFormDataStore = defineStore('formData', () => {
  // State: Use ref to store the address data
  const addressData = ref<AddressData | null>(null)

  // Action: Function to update the address data
  function setAddressData(data: AddressData) {
    console.log('Setting address data in store:', data); // Add log
    addressData.value = data
  }

  // Action: Function to clear the address data
  function clearAddressData() {
    console.log('Clearing address data from store.'); // Add log
    addressData.value = null
  }

  // Return state and actions
  return { addressData, setAddressData, clearAddressData }
}) 