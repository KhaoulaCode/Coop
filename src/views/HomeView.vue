<script setup>
import { onMounted } from 'vue';
import {useSessionStore} from '../stores/session'

// const router = useRouter();
const session = useSessionStore();
const channels = ref([])
onMounted(()=>{
  if(session.isValid()){
    api.get(`channels?token=${session.connectUser.token}`)
    .then(response => {
      channels.value = response;
    })
  }
})

</script>
  
<template>
  <main>
    <h1>Liste des conversations</h1>
    <h2 class="subtitle"><router-link to="/creer-conversation" Créer une nouvelle conversation></router-link></h2>
    <p>todo</p>
    <ul>
      <li class="box" v-for="channel in channels"><router-link :to="{name: 'conversation', params: {id :channel.id}}">
      <h1 class="title is-3" >{{channel.label}}</h1>
      <p class="subtitle">{{ channel.topic }}</p>
      </router-link>
      </li>

    </ul>
  </main>
</template>
