<template>
  <h1>Страница с профилем пользователя</h1>
  <img>
  <h2>ФИО как-то передать сюда надо!!!</h2>
  <h2>И почту тоже!!!</h2>
  <h2>Ваши купленные билеты</h2>
  <!-- Снова-таки, здесь через v-for можно их много рендерить на страничке -->
  <Ticket />
</template>

<script>
import Ticket from '../views/components/Ticket'

export default {
  name: "ProfilePage",
  components: {
    Ticket
  }
}
</script>

<style scoped>

</style>