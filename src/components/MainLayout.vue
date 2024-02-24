<script setup>
import { RouterView } from "vue-router";
import AppNavbar from "./AppNavbar.vue";
</script>

<template>
  <div>
    <app-navbar />
    <router-view />
    <!-- <footer v-if="authStore.authenticated" /> -->
  </div>
</template>
