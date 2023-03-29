<template>
  <MenuFixo />
  <router-view></router-view>
</template>

<script>
import MenuFixo from './components/MenuFixo/MenuFixo.vue'

export default {
  name: 'App',
  components: {
    MenuFixo
  }
}
</script>

<style src="./assets/styles/_global.scss" lang="scss" />
