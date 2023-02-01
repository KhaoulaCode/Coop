<script setup>

const props = defineProps({
  type: String,
  content: String,
  callBack: Function,
})

</script>
<template>

    <button
        :class="'coop-button coop-button-' + type"
        @click="callBack"
        :type="type===submit ? 'submit' : ''"
    >    
        {{ content }}
    </button>




</template>