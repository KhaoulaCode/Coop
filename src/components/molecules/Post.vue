<script setup>
    import "../../assets/styles/components/molecules/post.scss"
    import { useMembresStore } from "@/stores/members"
    import Button from "../atoms/Button.vue"
    const members = useMembresStore();

    const props = defineProps({
        message: Object,
        drop: Function,
        isEditable: Boolean
    })

</script>

<template>
<div class="coop-post">
    <p>{{message.message}}</p> 
    <div v-if="isEditable">

    <p class="post-by">
        Posté par
        <RouterLink :to="'/user/' + members.getMembre(message.member_id).id">{{members.getMembre(message.member_id).fullname }}</RouterLink>
        le {{message.created_at}}
    </p>

    <Button 
        :callBack="()=>drop(message.id)"
        content="Supprimer"
        type="text"
    />
    </div>
    </div>
</template>