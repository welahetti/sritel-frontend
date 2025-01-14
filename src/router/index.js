import { createRouter, createWebHistory } from 'vue-router'; // For Vue 3
import BillView from '../components/BillView.vue';
import PaymentView from '../components/PaymentView.vue';


const routes = [
  { path: '/bills', component: BillView },
  // Define other routes as necessary
  { path: '/payments/:id', component: PaymentView},
  
];

const router = createRouter({
  history: createWebHistory(), // use createWebHistory for history mode
  routes,
});

export default router;
