<template>
  <div class="payment-page">
    <!-- Header -->
    <div class="payment-header">
      <button class="back-button" @click="goBack">&lt;</button>
      <h2>Pay Bill</h2>
    </div>

    <!-- Payment Form -->
    <form class="payment-form" @submit.prevent="processPayment">
      <div class="form-group">
        <label for="bill-number">Bill number: {{ billNumber }}</label>
      </div>

      <div class="form-group">
        <label for="card-number">Card number *</label>
        <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" v-model="cardNumber" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="expiry-month">Expiry month *</label>
          <select id="expiry-month" v-model="expiryMonth" required>
            <option value="" disabled selected>MM</option>
            <option v-for="month in 12" :key="month" :value="month">
              {{ month.toString().padStart(2, '0') }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="expiry-year">Expiry year *</label>
          <select id="expiry-year" v-model="expiryYear" required>
            <option value="" disabled selected>YY</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="cardholder-name">Cardholder name *</label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="Name on card"
          v-model="cardholderName"
          required
        />
      </div>

      <div class="form-group">
        <label for="security-code">Security code *</label>
        <input
          type="password"
          id="security-code"
          placeholder="CVV"
          v-model="securityCode"
          required
        />
        <p class="cvv-info">3 digits on back of your card</p>
      </div>

      <button type="submit" class="submit-button">Pay Now</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentPage',
  data() {
    return {
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cardholderName: '',
      securityCode: '',
    };
  },
  computed: {
    // Retrieve the bill number from the route params
    billNumber() {
      return this.$route.params.id || 'Not available';
    },
    years() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 10 }, (_, i) => currentYear + i);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    processPayment() {
      alert('Payment processed successfully!');
      // Implement actual payment logic here
    },
  },
};
</script>

<style scoped>
.payment-page {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.payment-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #4caf50;
}

h2 {
  margin: 0;
  font-size: 24px;
  color: #4caf50;
}

.company-info {
  text-align: center;
  margin: 20px 0;
}

.logo {
  width: 100px;
  height: auto;
}

.secure-payment {
  font-size: 14px;
  color: #666;
}

.lock-icon {
  font-size: 14px;
}

.payment-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-row {
  display: flex;
  gap: 10px;
}

.cvv-info {
  font-size: 12px;
  color: #666;
}

.submit-button {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
