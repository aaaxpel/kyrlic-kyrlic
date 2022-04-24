<template>
  <div class="home">
    <h1>That's a home component</h1>
    <router-link to="/auth">Авторизация</router-link>
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