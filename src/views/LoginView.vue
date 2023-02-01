<script setup>
import {useSessionStore} from '../stores/session.js'
import Button from "../components/atoms/Button.vue"
const session = useSessionStore()
let mail = "boulhdir@gmail.com"
let pass = 'azertyuiop'

const LoginUser = ()=>{
  session.LoginUser(mail, pass)
}

</script>

<template>
    <h1>Se connecter</h1>
    <form class="col is-offset-4" @submit.prevent="LoginUser">
        <label for="email">Email : </label>
        <input type="text" id="email" v-model="mail" placeholder="Mail"/><br/>
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" v-model="pass" placeholder="Mot de passe"/><br/>
        <Button
          type="submit"
          content="Se connecter"
          :callBack="LoginUser"
        /> 
        <RouterLink to="/register">Créer un compte</RouterLink>
        
    </form>
</template>

<style></style>