<script setup>
import "../../assets/styles/components/section/nav.scss"
import Button from "../atoms/Button.vue"
import { useSessionStore } from '@/stores/session';
const session = useSessionStore();

const logout = ()=>{
  session.logout()
}

</script>

<template>
  <nav class="coop-nav">
    <div>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/list-member">Liste des membres</RouterLink> |
      <RouterLink to="/creer-conversation">Creer conversation</RouterLink>
    </div>
    <div>
      <div v-if="session.connectUser.token">
        <Button type="text" content="Se déconnecter" :callBack="logout"/> 
      </div>
      <div v-else>
        <Button type="link" content="Se connecter" to="/login"/> 
        <Button type="link" content="Créer un compte" to="/register"/> 
      </div>
    </div>
  </nav>
</template>
