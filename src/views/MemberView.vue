<script setup>
import { useMembresStore } from "@/stores/members";
import { useRoute } from 'vue-router'
import { onMounted, reactive } from "vue"
import { useSessionStore } from '@/stores/session';
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
            data.messages.filter(function( element ) {
                return element.member_id == session.connectUser.id;
            })
            data.messages.sort((a, b)=>{
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
            <p>{{message.message}} posté par</p> 
            <RouterLink :to="'/user/' + members.getMembre(message.member_id).id">{{members.getMembre(message.member_id).fullname }}</RouterLink>
        </li>
    </ul>
</template>