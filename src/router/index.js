import { createRouter, createWebHistory } from 'vue-router'; // For Vue 3
import BillView from '../components/BillView.vue';
import PaymentView from '../components/PaymentView.vue';
import DashboardView from '../components/DashboardView.vue';
import CustomerView from '../components/CustomerView.vue';
import LoginView from '../components/LoginView.vue';
import NotificationView from '../components/NotificationView.vue';
import WebPortalBills from '../components/WebPortalBill.vue';
import GenerateBillView from '../components/GenerateBillView.vue';
import RegistrationView from "@/components/RegistrationView.vue";



const routes = [
  { path: '/bills', component: BillView },
  // Define other routes as necessary
  { path: '/payments/:id', component: PaymentView},
  { path: '/dashboard', component: DashboardView},
  { path: '/customers/:id',component: CustomerView},
  { path: '/change-password', component: () => import('../components/ChangePasswordView.vue'),},
  { path: '/services', component: () => import('../components/ServicesView.vue'),},
  { path: '/login', component: LoginView},
  { path: '/notifications', component: NotificationView },
  { path: '/web/bills', component: WebPortalBills }, // Web portal bills screen
  { path: '/web/generate-bill', component: GenerateBillView }, // Generate bill screen
  { path: "/register", component: RegistrationView },
  //{ path: "*", redirect: "/login",},
];

const router = createRouter({
  history: createWebHistory(), // use createWebHistory for history mode
  routes,
});


export default router;
