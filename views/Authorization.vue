<template>
  <a href="/">Вернуться назад</a>
  <h1>That's an authorization component!</h1>
  <p>Текст какой-то</p>
  <form action="/" method="post">
    <input type="email" name="mail" required>
    <input type="password" name="pass" required>
    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'AuthorizationPage'
}
</script>

<style scoped>

</style>