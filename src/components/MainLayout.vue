<script setup>
import { RouterView } from "vue-router";
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
</script>

<template>
  <div>
    <app-navbar />
    <router-view />
    <app-footer />
  </div>
</template>
./AppNavar.vue
