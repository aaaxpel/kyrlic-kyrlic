<template>
  <h1>Компонент с регистрацией</h1>
  <form action="/" method="post">
    <!-- Информация о Вас -->
    <input type="text" name="surname" placeholder="Фамилия" required>
    <input type="text" name="name" placeholder="Имя" required>
    <input type="text" name="lastName" placeholder="Отчество" required>
    <input type="email" name="mail" placeholder="Почта" required>
    <input type="password" name="pass" minlength="8" maxlength="32" placeholder="Пароль" required>
    <input type="password" name="passConfirmation" minlength="8" maxlength="32" placeholder="Подтверждение пароля" required>

    <!-- Подтверждение Вашей личности -->
    <input type="text" name="series" placeholder="Серия и номер паспорта" required>
    <input type="date" name="date" placeholder="Дата выдачи паспорта" required>
    <input type="text" name="givenBy" placeholder="Кем выдан" required>

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