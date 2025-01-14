/*<template>
  <div class="customer-view">
    <h1>Customer Profile</h1>

    <!-- Loading/Error Messages -->
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Customer Profile -->
    <div v-if="!loading && !error">
      <div class="profile-section">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> {{ customer.name }}</p>
        <p><strong>Email:</strong> {{ customer.email }}</p>
        <p><strong>Phone:</strong> {{ customer.phone }}</p>
        <button @click="toggleEdit">Edit Profile</button>
      </div>

      <!-- Edit Profile Form -->
      <div v-if="isEditing" class="edit-section">
        <h2>Edit Profile</h2>
        <form @submit.prevent="saveProfile">
          <div>
            <label for="name">Name:</label>
            <input type="text" v-model="editForm.name" id="name" required />
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input type="text" v-model="editForm.phone" id="phone" required />
          </div>
          <button type="submit">Save</button>
          <button type="button" @click="cancelEdit">Cancel</button>
        </form>
      </div>

      <!-- Notifications Section -->
      <div class="notifications-section">
        <h2>Manage Notifications</h2>
        <div>
          <label>
            <input type="checkbox" v-model="notifications.email" />
            Receive Email Notifications
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="notifications.sms" />
            Receive SMS Notifications
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="notifications.push" />
            Receive Push Notifications
          </label>
        </div>
        <button @click="updateNotifications">Update Notifications</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CustomerView',
  data() {
    return {
      customer: {},
      editForm: { name: '', phone: '' },
      notifications: { email: false, sms: false, push: false },
      isEditing: false,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchCustomerDetails() {
      try {
        const response = await axios.get('http://localhost:3000/customer'); // Replace with your endpoint
        this.customer = response.data;
        this.notifications = {
          email: response.data.notifications.email,
          sms: response.data.notifications.sms,
          push: response.data.notifications.push,
        };
      } catch (err) {
        this.error = 'Failed to load customer details. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    toggleEdit() {
      this.isEditing = true;
      this.editForm = { ...this.customer };
    },
    cancelEdit() {
      this.isEditing = false;
      this.editForm = { name: '', phone: '' };
    },
    async saveProfile() {
      try {
        const response = await axios.put('http://localhost:3000/customer', this.editForm); // Replace with your endpoint
        this.customer = response.data;
        this.isEditing = false;
        alert('Profile updated successfully.');
      } catch (err) {
        this.error = 'Failed to update profile. Please try again.';
      }
    },
    async updateNotifications() {
      try {
        await axios.put('http://localhost:3000/notifications', this.notifications); // Replace with your endpoint
        alert('Notifications updated successfully.');
      } catch (err) {
        this.error = 'Failed to update notifications. Please try again.';
      }
    },
  },
  mounted() {
    this.fetchCustomerDetails();
  },
};
</script>

<style scoped>
.customer-view {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.profile-section,
.edit-section,
.notifications-section {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.error {
  color: red;
}
</style>*/

<template>
  <div>
    <h1>Customer Profile</h1>
    <div v-if="customer">
      <p><strong>Name:</strong> {{ customer.name }}</p>
      <p><strong>Email:</strong> {{ customer.email }}</p>
      <p><strong>Phone:</strong> {{ customer.phone }}</p>
      <p><strong>Address:</strong> {{ customer.address }}</p>
    </div>
    <div v-else>
      <p>Loading customer profile...</p>
    </div>
  </div>
</template>

<script>
import { mockDb } from './mockDb'; // Import the mock database

export default {
  data() {
    return {
      customer: null, // Will hold the customer data
      customerId: 1 // Example customer ID; this can be dynamic
    };
  },
  mounted() {
    // Simulate fetching customer data from the mock DB
    this.fetchCustomerProfile();
  },
  methods: {
    fetchCustomerProfile() {
      // Find the customer from the mock DB by ID
      const customer = mockDb.find(c => c.id === this.customerId);
      if (customer) {
        this.customer = customer;
      }
    }
  }
};
</script>

<style scoped>
/* Add styles for the customer profile */
h1 {
  color: #333;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>

