<template>
  <h1>Билет №</h1>
  <form>
    <input type="text" name="from-location" placeholder="Откуда-место">
    <input type="date" name="from-date" placeholder="Откуда-дата">

    <input type="text" name="to-location" placeholder="Куда-место">
    <input type="date" name="to-date" placeholder="Куда-время">

    <input type="number" name="price" placeholder="Стоимость">

    <!-- Очень временные кнопки -->
    <button @click="redactTicket">Редактировать</button>
    <button @click="deleteTicket">Удалить</button>
  </form>
</template>

<script>
export default {
  name: "TicketComponent",
  methods: {
    redactTicket() {
      console.log('Редактирование')
    },
    deleteTicket() {
      console.log('Удаление')
    }
  }
}
</script>

<style scoped>

</style>