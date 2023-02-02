<script setup>
import Button from "../atoms/Button.vue"
import "../../assets/styles/components/molecules/commentField.scss"
    const props = defineProps({
        data: Object,
        send: Function,
    })
</script>

<template>
    <div class="coop-comment-field">

    <input v-model="data.msg" type="text" placeholder="Entrez un commentaire"/>
        <Button 
            :callBack="send"
            content="Envoyer"
            type="text"
        />
    </div>
</template>