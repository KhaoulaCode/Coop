<script setup>
import {useSessionStore} from '../stores/session.js'
import Button from "../components/atoms/Button.vue"
const session = useSessionStore()
  let name = "khaoula"
  let email = "boulhdir@gmail.com"
  let password = "azertyuiop"


  const validForm = ()=>{
    api.post('members',{
      body: {
        fullname: name,
        email: email,
        password: password,
      }
    }).then(session.LoginUser(email, password))
  }
  


</script>

<template>
    <div>
      <h1>Créer un compte</h1>
      <form @submit.prevent="validForm">
        <input type="text" id="name" v-model="name" placeholder="Nom"/>
        <input type="text" id="email" v-model="email" placeholder="Mail"/>
        <input type="password" id="password" v-model="password" placeholder="Mot de passe"/><br/>
        <Button
          type="submit"
          content="Créer un compte"
        />
      </form>
    </div>
</template>

<style></style>
