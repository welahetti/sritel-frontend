<template>
  <div class="login-page">
    <div class="login-form-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Username Field -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <!-- Login Button -->
        <button type="submit" class="login-button">Login</button>
      </form>

      <!-- Sign Up Button -->
      <p class="signup-text">
        Don't have an account? 
        <button @click="navigateToSignUp" class="signup-button">Sign Up</button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Simulate an API request for authentication
        const response = await axios.post("http://localhost:3000/login", {
          username: this.username,
          password: this.password,
        });

        if (response.data.success) {
          // Clear any existing error message
          this.errorMessage = null;

          // Navigate to the dashboard on successful login
          this.$router.push("/dashboard");
        } else {
          this.errorMessage = response.data.message || "Invalid credentials.";
        }
      } catch (error) {
        console.error("Login error:", error);
        this.errorMessage = "An error occurred. Please try again.";
      }
    },
    navigateToSignUp() {
      // Redirect to the registration view
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

.login-form-container {
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

.login-button {
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

.login-button:hover {
  background-color: #45a049;
}

.signup-text {
  margin-top: 15px;
  font-size: 14px;
  color: #555;
}

.signup-button {
  background: none;
  color: #4caf50;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
}

.signup-button:hover {
  color: #45a049;
}

.error-message {
  color: #f44336;
  font-size: 14px;
  margin-top: 10px;
}
</style>
