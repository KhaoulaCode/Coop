<script setup>
// import {useRouter} from 'vue-router';
import {useSessionStore} from '@/stores/session';
// import { reactive } from 'vue';

const session = useSessionStore();
let topic = "";
let label = "";

const createChannel = ()=>{

    api.post("channels", {
        body: {
            topic:topic,
            label: label,
            token: session.connectUser.token    
        }
    })
}
</script>

<template>
    <div>
        <form @submit.prevent="createChannel">
            <input type="text" v-model="topic" placeholder="Sujet">
            <input type="text" v-model="label" placeholder="Etiquette">
            <button type="submit">Créer une conversation</button>
        </form>
    </div>
</template>