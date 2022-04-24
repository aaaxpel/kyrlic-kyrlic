<template>
  <h1>Страничка аутентификации с авторизацией и регистрацией</h1>

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