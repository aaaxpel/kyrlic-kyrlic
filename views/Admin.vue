<template>
  <h1>Админская страничка с редактированием и удалением</h1>
  <router-link to="/">Вернуться назад</router-link>
  <!-- Через v-for можно будет сделать много их -->
  <Ticket />
</template>

<script>
import Ticket from './components/Ticket'

export default {
  name: "AdminPage",
  components: {
    Ticket
  }
}
</script>

<style scoped>

</style>