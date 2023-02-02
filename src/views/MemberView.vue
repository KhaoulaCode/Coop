<script setup>
import { useMembresStore } from "@/stores/members";
import { useRoute } from 'vue-router'
import { onMounted, reactive } from "vue"
import { useSessionStore } from '@/stores/session';
import Post from "../components/molecules/Post.vue"
const session = useSessionStore();


const route = useRoute();
const members = useMembresStore();
members.chargerMembres().then(()=>{
    data.member = members.getMembre(route.params.id)
})

api.get(`channels?token=${session.connectUser.token}`).then(conversations => {
    conversations.forEach(conv => {
        api.get(`channels/${conv.id}/posts?token=${session.connectUser.token}`).then(msg => {
            data.messages.push(...msg)
            data.messages = data.messages.filter(function( element ) {
                return element.member_id === session.connectUser.member.id;
            })
            data.messages = data.messages.sort((a, b)=>{
                return  new Date(a.created_at).getTime() > new Date(b.created_at).getTime() ? -1 : 1;
            })

            data.messages = data.messages.slice(0, 10)
        })
    });
})

const data = reactive({
    member : {},
    messages: [],
})
</script>
<template>
    <p>{{ data.member.fullname }}</p>
    <p>Email : {{ data.member.email }}</p>
    <p>Membre inscrit depuis le {{ data.member.created_at }} </p>
    <p>Messages : </p>
    <ul>
        <li v-for="message in data.messages">
            <Post 
                :message="message"
                :drop="drop"
                :isEditable="false"
            />
        </li>
    </ul>
</template>