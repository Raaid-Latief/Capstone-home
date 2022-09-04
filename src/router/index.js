import { createRouter, createWebHistory } from "vue-router";
import LoginView from '@/views/LoginView.vue'
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("../views/ProgramsView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  {
    path: "/plans",
    name: "plans",
    component: () => import("../views/Plans.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: ()=> import("../views/AdminView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: ()=> import("../views/LoginView.vue"),
  },
  {   
    path: "/register",
    name: "register",
    component: ()=> import("../views/RegisterView.vue"),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/adminProgram',
    name: 'adminProgram',
    component: () => import('../views/AdminProgramsView.vue')
  },
  {
    path: '/adminUser',
    name: 'adminUser',
    component: () => import('../views/AdminUsersView.vue')
  }


];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;