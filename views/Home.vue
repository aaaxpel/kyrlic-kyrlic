<template>
  <div class="home">
    <h1>Домашняя страничка</h1>
    <router-link to="/auth">Авторизация</router-link>

    <!-- Здесь можно отображение поменять через v-if -->
    <router-link to="/admin">Админская панель</router-link>

    <router-link to="/profile">Профиль</router-link>
    <router-link to="/profile">Профиль</router-link>
    <router-link to="/profile">Профиль</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>

</style>