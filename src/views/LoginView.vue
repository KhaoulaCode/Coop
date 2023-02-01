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
    <form @submit.prevent="LoginUser">
        <input type="text" id="email" v-model="mail" placeholder="Email"/>
        <input type="password" id="password" v-model="pass" placeholder="Mot de passe"/>
        <Button
          type="submit"
          content="Se connecter"
          :callBack="LoginUser"
        /> 
        <Button
          type="link"
          content="Créer un compte"
          to="/register"
        /> 
        
    </form>
</template>

<style></style>