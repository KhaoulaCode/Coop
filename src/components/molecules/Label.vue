<script setup>
    import "../../assets/styles/components/molecules/label.scss"
    import Tag from "../atoms/Tag.vue"
    const props = defineProps({
        channel: Object,
    })
</script>

<template>
    <router-link :to="{name: 'conversation', params: {id :channel.id}}">
        <div class="coop-label">

            <h2>{{channel.label}}</h2>
            <Tag :text="channel.topic"/>
        </div>    
    </router-link>
</template>