<script setup>
import { onMounted } from 'vue';
import {useSessionStore} from '../stores/session'
import Label from "../components/molecules/Label.vue"
// const router = useRouter();
const session = useSessionStore();
const data = reactive({
  channels: []
})
onMounted(()=>{
  if(session.isValid()){
    api.get(`channels?token=${session.connectUser.token}`)
    .then(response => {
      data.channels = response;
    })
  }
})

function drop(id, e) {
        e.stopPropagation()
        e.preventDefault()
        api.delete(`channels/${id}?token=${session.connectUser.token}`)
        .then(() => {
        data.channels = data.channels.filter(function( element ) {
           return element.id !== id;
        });
    });
}

  </script>
<template>
  <main>
    <h1>Liste des conversations</h1>
    <h2><router-link to="/creer-conversation"> Créer une nouvelle conversation</router-link></h2>
    <ul>
      <li v-for="channel in data.channels">
        <Label :channel="channel" :drop="drop"/>
      
      </li>
    </ul>
  </main>
</template>
