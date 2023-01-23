<script setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { useSessionStore } from '@/stores/session';
import { useMembresStore } from "@/stores/members"

const route = useRoute();
const session = useSessionStore();
const members = useMembresStore();
members.chargerMembres();

let data = reactive({
    channel: {}, //details de la conversation choisie
    message: [] ,//messages postés dans cette conversation
    msg: ""
})


function send(){
    console.log(data.msg)
    api.post(`channels/${route.params.id}/posts?token=${session.connectUser.token}`,{body: {
        channel_id: route.params.id,
        member_id: session.connectUser.id,
        message: data.msg
    }})
    .then(response =>{
        data.message.push(response)
    })
};
 
function drop(id) {
    api.delete(`channels/${route.params.id}/posts/${id}?token=${session.connectUser.token}`)
    .then(() => {
        data.message = data.message.filter(function( element ) {
            return element.id !== id;
        });
    });
}

onMounted(()=>{
    api.get(`channels/${route.params.id}?token=${session.connectUser.token}`)
    .then(response =>{
        console.log("resp : " ,response)
        data.channel = response;
    })

    api.get(`channels/${route.params.id}/posts?token=${session.connectUser.token}`)
    .then(response =>{
        data.message = response.reverse();
    })
})

</script>

<template>
    <h1 class="title">{{data.channel.topic}}</h1>
    <p class="subtitle">{{data.channel.label}}</p>
    <input v-model="data.msg" type="text" placeholder="Entrez un commentaire"/>
    <button @click="send">Envoyer</button>
    <ul>
        <li v-for="message in data.message">
            <p>{{message.message}} posté par</p> 
            <RouterLink :to="'/user/' + members.getMembre(message.member_id).id">{{members.getMembre(message.member_id).fullname }}</RouterLink>
            <br/><button @click="()=>drop(message.id)">supprimer</button>
        </li>
    </ul>
</template>