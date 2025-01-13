<template>
  <div class="login">
    <h1>Login to Sri-Care</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
        });
        if (response.data) {
          alert("Login successful!");
          // Store token for later use
          localStorage.setItem("token", response.data.token);
          // Redirect to dashboard or another view
          this.$router.push("/dashboard");
        } else {
          this.error = "Invalid email or password.";
        }
      } catch (err) {
        this.error = "Login failed. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.error {
  color: red;
}
</style>
