<script setup>

// provide('global', useGlobal());
// provide('router', useRouter());
// provide('router', useRouter());

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/creer-conversation">creer conversation</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/register">Créer un compte</RouterLink>
    
  </nav>
 

  <RouterView />
</template>

<style scoped>
</style>
