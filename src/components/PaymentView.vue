<template>
  <div class="payment-view">
    <h1>Payment Details</h1>

    <div v-if="loading">Loading payment details...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="payments.length > 0">
      <table class="payment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Card Number</th>
            <th>Expiry Date</th>
            <th>CVV</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>{{ payment.id }}</td>
            <td>{{ maskCardNumber(payment.CardNo) }}</td>
            <td>{{ payment.ExpiryDate }}</td>
            <td>{{ payment.CVV }}</td>
            <td>${{ payment.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No payment details available.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PaymentView',
  data() {
    return {
      payments: [], // Array to hold payments data
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchPayments() {

      try {
        const billId = this.$route.params.id; // Retrieve bill ID from route
        console.log('Fetching bill details for ID:', billId); // Debugging log
        // Fetching the payment details from API
        const response = await axios.get('http://localhost:3000/payments/123');
        this.payments = response.data.payments; // Update the payments array
      } catch (err) {
        console.error('Error fetching payments:', err);
        this.error = 'Failed to load payment details. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    maskCardNumber(cardNumber) {
      // Mask the card number except for the last 4 digits
      const cardStr = cardNumber.toString();
      return cardStr.slice(0, -4).replace(/\d/g, '*') + cardStr.slice(-4);
    },
  },
  mounted() {
    this.fetchPayments(); // Fetch payments when component is mounted
  },
};
</script>

<style scoped>
.payment-view {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.error {
  color: red;
}

.payment-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.payment-table th,
.payment-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.payment-table th {
  background-color: #f4f4f4;
}

.payment-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>

 