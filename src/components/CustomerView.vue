<template>
  <div class="customer-page">
    <!-- Header -->
    <div class="customer-header">
      <button class="back-button" @click="goBack">&lt;</button>
      <h2>Customer Details</h2>
    </div>

    <!-- Customer Form -->
    <form class="customer-form">
      <div v-if="customer">
        <div class="form-group">
          <label for="customer-name"><strong>Name:</strong></label>
          <input
            id="customer-name"
            type="text"
            v-model="customer.name"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="customer-email"><strong>Email:</strong></label>
          <input
            id="customer-email"
            type="email"
            v-model="customer.email"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="customer-phone"><strong>Phone:</strong></label>
          <input
            id="customer-phone"
            type="text"
            v-model="customer.phone"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="customer-address"><strong>Address:</strong></label>
          <textarea
            id="customer-address"
            v-model="customer.address"
            rows="3"
            readonly
          ></textarea>
        </div>
      </div>
      <!-- Loading message while data is being fetched -->
      <div v-else>
        <p>Loading customer profile...</p>
      </div>
    </form>

    <!-- Additional Buttons -->
    <div class="button-container">
      <button class="action-button" @click="navigateToChangePassword">
        Change Your Password
      </button>
      <button class="action-button" @click="navigateToServiceToggle">
        Activate/Deactivate Services
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customer: null,
    };
  },
  mounted() {
    this.fetchCustomerProfile();
  },
  watch: {
    '$route.params.id': 'fetchCustomerProfile',
  },
  methods: {
    async fetchCustomerProfile() {
      try {
        const response = await axios.get('http://localhost:3000/customers');
        const data = response.data;

        if (!data) {
          console.error('Customers data is not available.');
          return;
        }

        const id = this.$route.params.id;
        this.customer = data.find((customer) => customer.id === id);

        if (!this.customer) {
          console.error(`Customer with ID ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    },
    goBack() {
      this.$router.push('/dashboard');
    },
    navigateToChangePassword() {
      this.$router.push('/change-password'); // Navigate to the Change Password page
    },
    navigateToServiceToggle() {
      this.$router.push('/services'); // Navigate to the Activate/Deactivate Services page
    },
  },
};
</script>

<style scoped>
.customer-page {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.customer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

h2 {
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: none;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.action-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.action-button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.action-button:active {
  background-color: #3e8e41;
}
</style>
