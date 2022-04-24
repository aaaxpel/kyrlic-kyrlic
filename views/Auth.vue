<template>
  <Authorization />
  <Registration />
  <router-view />
</template>

<script>
import Authorization from './Authorization'
import Registration from './Registration'

export default {
  name: 'AuthComponent',
  components: {
    Authorization,
    Registration
  }
}
</script>

<style scoped>

</style>