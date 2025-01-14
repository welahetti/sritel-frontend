<template>
  <div class="notification-view">
    <h1>Notification Settings</h1>

    <!-- Loading/Error Messages -->
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Notification Preferences -->
    <div v-if="!loading && !error">
      <h2>Manage Your Notifications</h2>
      <form @submit.prevent="updateNotificationPreferences">
        <div class="notification-option">
          <label>
            <input type="checkbox" v-model="notifications.email" />
            Receive Email Notifications
          </label>
        </div>
        <div class="notification-option">
          <label>
            <input type="checkbox" v-model="notifications.sms" />
            Receive SMS Notifications
          </label>
        </div>
        <div class="notification-option">
          <label>
            <input type="checkbox" v-model="notifications.push" />
            Receive Push Notifications
          </label>
        </div>
        <button type="submit" class="save-btn">Save Preferences</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NotificationView',
  data() {
    return {
      notifications: {
        email: false,
        sms: false,
        push: false,
      },
      loading: true,
      error: null,
    };
  },
  methods: {
    // Fetch notification preferences from the backend
    async fetchNotificationPreferences() {
      try {
        const response = await axios.get('http://localhost:3000/notifications'); // Replace with your endpoint
        this.notifications = response.data;
      } catch (err) {
        this.error = 'Failed to load notification preferences. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    // Update notification preferences
    async updateNotificationPreferences() {
      try {
        await axios.put('http://localhost:3000/notifications', this.notifications); // Replace with your endpoint
        alert('Notification preferences updated successfully.');
      } catch (err) {
        this.error = 'Failed to update notification preferences. Please try again.';
      }
    },
  },
  mounted() {
    this.fetchNotificationPreferences();
  },
};
</script>

<style scoped>
.notification-view {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.notification-option {
  margin-bottom: 15px;
}

.save-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
