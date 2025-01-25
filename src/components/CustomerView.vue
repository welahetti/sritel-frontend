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
  </div>
</template>

<script>
import axios from 'axios'; // Import axios

export default {
  props: ['id'], // Accept the customer ID as a prop
  data() {
    return {
      customer: null, // Holds the fetched customer data
    };
  },
  mounted() {
    this.fetchCustomerProfile(); // Fetch customer data when component is mounted
  },
  methods: {
    async fetchCustomerProfile() {
      try {
        const response = await axios.get('http://localhost:3000/customers');
        const data = response.data;

        // Find the customer by ID (ensure props.id is parsed as an integer)
        this.customer = data.customers.find(
          (customer) => customer.id === parseInt(this.id)
        );

        if (!this.customer) {
          console.error(`Customer with ID ${this.id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    },
    goBack() {
      this.$router.push('/dashboard'); // Navigate back to the dashboard
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
</style>
