<script setup>
import LoginModal from './LoginModal.vue'
import { useModalStore } from '@/stores/modal/useModalStore'

const modalStore = useModalStore()

const openModal = () => {
  modalStore.showLoginFormModal = true
  document.body.classList.add('no-scroll')
}
</script>

<template>
  <div class="w-full bg-gray-200 h-16">
    <button @click="openModal">Log in</button>
    <LoginModal />
  </div>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
