import { createApp } from 'vue'; // For Vue 3
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Install router
app.mount('#app'); // Mount the app to #app
