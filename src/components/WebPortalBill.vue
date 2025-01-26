<template>
  <div class="web-portal-bills">
    <h1>Web Portal - Bills</h1>
    <p>Manage your bills here easily.</p>
    <button @click="navigateToGenerateBill" class="generate-button">
      Generate Bill
    </button>
  </div>
</template>
<script>
export default {
  name: "WebPortalBills",
  methods: {
    navigateToGenerateBill() {
      // Navigate to the Generate Bill View
      this.$router.push("/web/generate-bill");
    },
  },
};
</script>

<style scoped>
.web-portal-bills {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.generate-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.generate-button:hover {
  background-color: #0056b3;
}
</style>

