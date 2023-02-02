<script setup>
import { reactive } from "@vue/reactivity";

const user = useUserStore();
const data = reactive({
  members: []
})

onMounted(() => {
  api.get('members').then(response => {
    data.members = response
    console.log(data)
  })
})
</script>

<template>
  <h1>Liste des membres</h1>
  <ul>
    <li v-for="member in data.members">
      <p>{{ member.fullname }}</p>
      <p>Email : {{ member.email }}</p>
      <p>Membre inscrit depuis le {{ member.created_at }} </p>
    </li>
  </ul>

</template>

<style>
</style>
