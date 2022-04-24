<template>
  <h1>That's a registration component</h1>
  <form action="/" method="post">
    <!-- Информация о Вас -->
    <input type="text" name="name" required>
    <input type="text" name="surname" required>
    <input type="text" name="lastName" required>
    <input type="email" name="mail" required>
    <input type="password" name="pass" minlength="8" maxlength="32" required>
    <input type="password" name="passConfirmation" required>

    <!-- Подтверждение Вашей личности -->
    <input type="text" name="series" required>
    <input type="date" name="date" required>
    <input type="text" name="givenBy" required>

    <p>Здесь текст какой-то будет</p>
    <button type="submit">Зарегистрироваться!</button>
  </form>
</template>

<script>
export default {
  name: 'RegistrationComponent'
}
</script>

<style scoped>

</style>