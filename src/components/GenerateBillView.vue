<template>
  <div class="generate-bill">
    <h1>Billing Portal</h1>
    <button @click="generateBill" class="generate-button">Generate Bill</button>
    <div v-if="bill">
      <h2>Generated Bill</h2>
      <p><strong>Date:</strong> {{ bill.date }}</p>
      <p><strong>Amount:</strong> ${{ bill.amount }}</p>
      <p><strong>Status:</strong> {{ bill.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenerateBillView",
  data() {
    return {
      bill: null,
    };
  },
  methods: {
    generateBill() {
      // Mock bill generation logic
      const newBill = {
        date: new Date().toISOString().split("T")[0],
        amount: (Math.random() * 100).toFixed(2),
        status: "Unpaid",
      };
      this.bill = newBill;
      alert("Bill Generated Successfully!");
    },
  },
};
</script>

<style scoped>
.generate-bill {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
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

h2 {
  margin-top: 20px;
}
</style>
