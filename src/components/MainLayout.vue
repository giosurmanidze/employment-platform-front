<script setup>
import { RouterView } from 'vue-router'
import NavBar from './NavBar.vue'
</script>

<template>
  <div>
    <nav-bar />
    <router-view />
    <!-- <footer v-if="authStore.authenticated" /> -->
  </div>
</template>
