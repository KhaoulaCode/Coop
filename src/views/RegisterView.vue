<script setup>
import {useSessionStore} from '../stores/session.js'
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

      <h1>Coop</h1>
      <h2>Créer un compte</h2>
      <form class="col is-offset-4" @submit.prevent="validForm">
        <label for="name">Nom : </label>
        <input type="text" id="name" v-model="name" placeholder="Nom"/>
        <label for="email">Mail : </label><br/>
        <input type="text" id="email" v-model="email" placeholder="Mail"/>
        <label for="password">Mot de passe : </label><br/>
        <input type="password" id="password" v-model="password" placeholder="Mot de passe"/><br/>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
</template>

<style></style>
