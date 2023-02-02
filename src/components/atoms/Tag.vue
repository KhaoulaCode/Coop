<script setup>
    import "../../assets/styles/components/atoms/tag.scss"
    const props = defineProps({
        text: String
    })
</script>
<template>
      <div :class="'bi-tag ' + className">{{ text }}</div>
</template>