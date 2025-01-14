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
    async fetchPayments(billId) {
  try {
    console.log('Fetching payments for billId:', billId);
    // Filter payments using the billId
    const response = await axios.get('http://localhost:3000/payments');
    
    // Filter the payments based on the billId
    const paymentsForBill = response.data.filter(payment => payment.billId === parseInt(billId));
    
    if (paymentsForBill.length === 0) {
      this.error = `No payment data found for bill ID ${billId}.`;
    } else {
      this.payments = paymentsForBill;
    }
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
    const billId = this.$route.params.id;  // Accessing billId from route params
    console.log('Mounted: billId:', billId);  // Debugging log
    this.fetchPayments(billId); // Fetch payments when component is mounted
  },
  watch: {
  '$route'(to) {
    const billId = to.params.id;  // Get the billId from the updated route params
    console.log('Route changed: New billId:', billId);  // Debugging log
    this.fetchPayments(billId);  // Fetch payment details when route changes
  }

  }
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
