<template>
  <h1>Страница с корзиной</h1>
  <!-- Снова-таки, здесь через v-for можно их много рендерить на страничке -->
  <Ticket />
</template>

<script>
import Ticket from '../views/components/Ticket'

export default {
  name: "CartPage",
  components: {
    Ticket
  }
}
</script>

<style scoped>

</style>