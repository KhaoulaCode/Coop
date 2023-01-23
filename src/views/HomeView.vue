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
    <h2 class="title">Liste des conversations</h2>
    <h2 class="subtitle"><router-link to="/creer-conversation" Créer une nouvelle conversation></router-link></h2>
    <p>todo</p>
    <ul>
      <li class="box" v-for="channel in channels"><router-link :to="{name: 'conversation', params: {id :channel.id}}">
      <h2 class="title is-3" >{{channel.label}}</h2>
      <p class="subtitle">{{ channel.topic }}</p>
      </router-link>
      </li>

    </ul>
  </main>
</template>
