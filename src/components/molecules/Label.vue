<script setup>
    import "../../assets/styles/components/molecules/label.scss"
    import { useSessionStore } from '@/stores/session';
    import Button from "../atoms/Button.vue"
    import Tag from "../atoms/Tag.vue"
    const session = useSessionStore();
    const props = defineProps({
        channel: Object,
        drop: Function
    })


</script>

<template>
    <router-link :to="{name: 'conversation', params: {id :channel.id}}">
        <div class="coop-label">

            <h2>{{channel.label}}</h2>
            <Tag :text="channel.topic"/>
            <Button 
                type="text"
                content="supprimer"
                :callBack="e=>drop(channel.id, e)"
            />
            
        </div>    
    </router-link>
</template>