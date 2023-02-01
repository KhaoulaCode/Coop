<script setup>
import "../../assets/styles/components/atoms/button.scss"
const props = defineProps({
  type: String,
  content: String,
  callBack: Function,
  to: String,   
})

</script>
<template>

    <button v-if="type!=='link'"
        :class="'coop-button coop-button-' + type"
        @click="callBack"
        :type="type===submit ? 'submit' : ''"
    >    
        
        {{ content }}
        
    </button>

    <button 
        :class="'coop-button coop-button-' + type"
        v-if="type==='link'"
    >
        <RouterLink :to="to" class="bi-button-text">{{ content }}</RouterLink>
    </button>


</template>