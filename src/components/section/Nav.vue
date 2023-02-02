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
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/creer-conversation">creer conversation</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/register">Créer un compte</RouterLink>
    <Button v-if="session.isValid()" type="text" content="Se déconnecter" :callBack="logout"/> 
    <Button type="link" content="Se connecter" to="/login"/> 
    <Button type="link" content="Créer un compte" to="/register"/> 
  </nav>
</template>
