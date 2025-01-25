import { createRouter, createWebHistory } from 'vue-router'; // For Vue 3
import BillView from '../components/BillView.vue';
import PaymentView from '../components/PaymentView.vue';
import DashboardView from '../components/DashboardView.vue';
import CustomerView from '../components/CustomerView.vue';
//import CustomerView from '../components/ChangePasswordView.vue';


const routes = [
  { path: '/bills', component: BillView },
  // Define other routes as necessary
  { path: '/payments/:id', component: PaymentView},
  { path: '/dashboard', component: DashboardView},
  { path: '/customers/:id',component: CustomerView},
  { path: '/change-password', component: () => import('../components/ChangePasswordView.vue'),},
];

const router = createRouter({
  history: createWebHistory(), // use createWebHistory for history mode
  routes,
});

export default router;
