<template>
  <h1>Страница со всеми билетиками</h1>
  <!-- Снова-таки, здесь через v-for можно их много рендерить на страничке -->
  <Ticket />
</template>

<script>
import Ticket from '../views/components/Ticket'

export default {
  name: "AllTickets",
  components: {
    Ticket
  }
}
</script>

<style scoped>

</style>