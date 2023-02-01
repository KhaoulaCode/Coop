<script setup>
import { onMounted } from 'vue';
import {useSessionStore} from '../stores/session'
import Label from "../components/molecules/Label.vue"
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
    <h2><router-link to="/creer-conversation"> Créer une nouvelle conversation</router-link></h2>
    <ul>
      <li v-for="channel in channels">
        <Label :channel="channel"/>
      </li>
    </ul>
  </main>
</template>
