<script setup>
import {useSessionStore} from '../stores/session.js'
const session = useSessionStore()
let mail = "boulhdir@gmail.com"
let pass = 'azertyuiop'

const LoginUser = ()=>{
  session.LoginUser(mail, pass)
}

</script>

<template>
    <h1>Coop 2022</h1>
    <h2>Se connecter</h2>
    <form class="col is-offset-4" @submit.prevent="LoginUser">
        <label for="email">Email : </label>
        <input type="text" id="email" v-model="mail" placeholder="Mail"/><br/>
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" v-model="pass" placeholder="Mot de passe"/><br/>
        <button type="submit">Se connecter</button><br/>
        <RouterLink to="/register">Créer un compte</RouterLink>
        
    </form>
</template>

<style></style>