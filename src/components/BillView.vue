<template>
  <div class="bill-view">
    <h1>Your Bills</h1>

    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="bills.length > 0">
      <h2>Current Bill</h2>
      <div class="bill-card" v-for="bill in currentBill" :key="bill.id">
        <p><strong>Date:</strong> {{ bill.date }}</p>
        <p><strong>Amount:</strong> ${{ bill.amount }}</p>
        <p><strong>Status:</strong> {{ bill.status }}</p>
        <button @click="viewBillDetails(bill.id)">View Details</button>
        <button @click="redirectToPayment(bill.id)">Pay Now</button>
      </div>

      <h2>Past Bills</h2>
      <div class="bill-card" v-for="bill in pastBills" :key="bill.id">
        <p><strong>Date:</strong> {{ bill.date }}</p>
        <p><strong>Amount:</strong> ${{ bill.amount }}</p>
        <p><strong>Status:</strong> {{ bill.status }}</p>
        <button @click="viewBillDetails(bill.id)">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Import axios

export default {
  name: 'BillView',
  data() {
    return {
      bills: [],
      currentBill: [],
      pastBills: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchBills() {
      try {
        const response = await axios.get('http://localhost:3000/bills');
        this.bills = response.data;
        this.currentBill = this.bills.filter((bill) => bill.status === 'Unpaid');
        this.pastBills = this.bills.filter((bill) => bill.status === 'Paid');
      } catch (err) {
        this.error = 'Failed to load bills. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    viewBillDetails(id) {
      this.$router.push(`/bills/${id}`);
    },
    redirectToPayment(id) {
      // Redirect to the PaymentView with the selected bill ID
      this.$router.push(`/payments/${id}`);
    },
  },
  mounted() {
    this.fetchBills();
  },
};
</script>

<style scoped>
.bill-view {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.bill-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.error {
  color: red;
}
</style>
