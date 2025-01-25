<template>
  <div class="dashboard-view">
    <h1>Sri-Tel Dashboard</h1>
    <p class="tagline">We Care Always, Empowering Your Connectivity!</p>

    <div class="button-container">
      <button class="dashboard-button" @click="navigateTo('bills')">
        Bills
      </button>
      <button class="dashboard-button" @click="navigateTo('payments')">
        Payments
      </button>
      <button class="dashboard-button" @click="navigateTo('notifications')">
        Notifications
      </button>
      <button class="dashboard-button" @click="navigateToCustomer(1)">
        Customers
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  methods: {
    navigateTo(route) {
      this.$router.push(`/${route}`);
    },
    // Updated to navigate to customer details with a dynamic ID (e.g., 1)
    navigateToCustomer(customerId) {
      this.$router.push(`/customers/${customerId}`);
    },
  },
};
</script>

<style scoped>
.dashboard-view {
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #4CAF50;
  font-size: 36px;
  margin-bottom: 10px;
}

.tagline {
  color: #333;
  font-size: 18px;
  font-style: italic;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.dashboard-button {
  background-color: #4CAF50;
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
  font-weight: bold;
}

.dashboard-button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.dashboard-button:active {
  background-color: #3e8e41;
}
</style>
