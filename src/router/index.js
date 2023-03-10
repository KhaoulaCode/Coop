import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import creerConversation from '../views/creerConversationView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list-member',
      name: 'listMember',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MemberListView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/creerConversation',
      name: 'creerConversation',
      component: creerConversation
    },{
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: () => import('../views/ConversationView.vue')
    },
    {
      path: '/creer-conversation/',
      name: 'creer-conversation',
      component: () => import('../views/creerConversationView.vue')
    },{
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/MemberView.vue')
    }
  ]
})

export default router
