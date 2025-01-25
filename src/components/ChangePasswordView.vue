<template>
  <div class="change-password-page">
    <h2>Change Password</h2>

    <form @submit.prevent="handleChangePassword">
      <div class="form-group">
        <label for="current-password"><strong>Current Password:</strong></label>
        <input
          id="current-password"
          type="password"
          v-model="currentPassword"
          placeholder="Enter current password"
          required
        />
      </div>

      <div class="form-group">
        <label for="new-password"><strong>New Password:</strong></label>
        <input
          id="new-password"
          type="password"
          v-model="newPassword"
          placeholder="Enter new password"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirm-password"><strong>Confirm New Password:</strong></label>
        <input
          id="confirm-password"
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm new password"
          required
        />
      </div>

      <button class="submit-button" type="submit">
        Change Password
      </button>
    </form>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      currentPassword: '', // User's current password
      newPassword: '', // New password
      confirmPassword: '', // Confirmation for the new password
      errorMessage: null, // Error message for validation
      successMessage: null, // Success message
    };
  },
  methods: {
    async handleChangePassword() {
  try {
    const response = await axios.post('http://localhost:3000/change-password', {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
    });

    if (response.data.success) {
      this.successMessage = "Password changed successfully!";
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    } else {
      this.errorMessage = response.data.message || "Failed to change the password.";
    }
  } catch (error) {
    this.errorMessage = "An error occurred. Please try again.";
  }
}
  },
};
</script>

<style scoped>
.change-password-page {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  display: block;
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.submit-button:hover {
  background-color: #45a049;
}

.error-message {
  color: #d9534f;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: #5cb85c;
  text-align: center;
  margin-top: 10px;
}
</style>
