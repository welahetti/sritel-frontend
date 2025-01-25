<template>
  <div class="services-page">
    <h2>Manage Telco Services</h2>

    <!-- Services List -->
    <div class="services-list">
      <div
        v-for="service in services"
        :key="service.id"
        class="service-item"
      >
        <div class="service-details">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </div>
        <button
          class="toggle-button"
          :class="{ active: service.active }"
          @click="toggleService(service.id)"
        >
          {{ service.active ? "Deactivate" : "Activate" }}
        </button>
      </div>
    </div>

    <!-- Success and Error Messages -->
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Predefined Telco services
      services: [
        {
          id: 1,
          name: "International Roaming",
          description: "Enable roaming services while travelling abroad.",
          active: false,
        },
        {
          id: 2,
          name: "Ring-in Tone Personalization",
          description: "Customize your ring-in tones.",
          active: true,
        },
        {
          id: 3,
          name: "Data Top-Up",
          description: "Purchase additional data packages.",
          active: false,
        },
      ],
      successMessage: null,
      errorMessage: null,
    };
  },
  methods: {
    toggleService(serviceId) {
      // Find the service being toggled
      const service = this.services.find((s) => s.id === serviceId);

      if (service) {
        // Toggle the active status
        service.active = !service.active;

        // Show a success message
        this.successMessage = `Service "${service.name}" ${
          service.active ? "activated" : "deactivated"
        } successfully!`;

        // Clear error messages
        this.errorMessage = null;

        // Hide the success message after a few seconds
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      } else {
        // Handle errors if the service is not found
        this.errorMessage = "Service not found!";
        this.successMessage = null;
      }
    },
  },
};
</script>

<style scoped>
.services-page {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.service-details {
  max-width: 70%;
}

h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}

.toggle-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.toggle-button.active {
  background-color: #f44336;
}

.toggle-button:hover {
  background-color: #45a049;
}

.toggle-button.active:hover {
  background-color: #d32f2f;
}

.success-message {
  color: #5cb85c;
  text-align: center;
  margin-top: 20px;
}

.error-message {
  color: #d9534f;
  text-align: center;
  margin-top: 20px;
}
</style>
