<template>
  <h1>Компонент с авторизацией</h1>
  <p>Текст какой-то</p>
  <form action="" method="post">
    <input type="email" name="mail" placeholder="Почта" required>
    <input type="password" name="pass" placeholder="Пароль" required>
    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'AuthorizationComponent'
}
</script>

<style scoped>

</style>