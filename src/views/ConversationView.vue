<script setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { useSessionStore } from '@/stores/session';
import { useMembresStore } from "@/stores/members"
import Button from "../components/atoms/Button.vue"
import Post from "../components/molecules/Post.vue"
import CommentField from "../components/molecules/CommentField.vue"
import Tag from "../components/atoms/Tag.vue"
import "../assets/styles/components/pages/conversation.scss"
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
    <div class="coop-light-hero">
        <h1>{{data.channel.label}}</h1>
        <Tag :text="data.channel.topic"/>
    </div>
    <ul  style="margin-bottom:100px">
        <li v-for="message in data.message">
            <Post 
                :message="message"
                :drop="drop"
                :isEditable="true"
            />
        </li>
    </ul>
    <CommentField :data="data" :send="send"/>
</template>