<template>
  <div class="registration-page">
    <div class="registration-form-container">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <!-- Username Field -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter username"
            required
          />
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        <!-- Confirm Password Field -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>

        <!-- Error Message -->
        <p v-if="passwordMismatch" class="error-message">Passwords do not match!</p>

        <!-- Sign Up Button -->
        <button type="submit" class="signup-button">Sign Up</button>
      </form>

      <!-- Back to Login Button -->
      <button @click="goToLogin" class="back-button">Back to Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationView",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordMismatch: false,
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      this.passwordMismatch = false;
      alert(`User ${this.username} registered successfully!`);
      this.$router.push("/register"); // Redirect to login page
    },
    goToLogin() {
      // Redirect to the login screen
      this.$router.push("/login"); // Ensure the route for loginView.vue is mapped to "/"
    },
  },
};
</script>

<style scoped>
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

.registration-form-container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #4caf50;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.signup-button:hover {
  background-color: #45a049;
}

.back-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.back-button:hover {
  background-color: #5a6268;
}

.error-message {
  color: #f44336;
  font-size: 14px;
  margin-top: 10px;
}
</style>
