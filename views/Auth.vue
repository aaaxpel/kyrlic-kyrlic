<template>
  <h1>Страничка аутентификации с авторизацией и регистрацией</h1>
  <router-link to="/">Вернуться назад</router-link>

  <Authorization />
  <Registration />
  <router-view />

</template>

<script>
import Authorization from './components/Authorization'
import Registration from './components/Registration'

export default {
  name: 'AuthPage',
  components: {
    Authorization,
    Registration
  }
}
</script>

<style scoped>

</style>