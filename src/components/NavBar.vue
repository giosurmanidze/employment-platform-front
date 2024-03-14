<script setup>
import { ref } from "vue";
import NavbarLinks from "./NavbarLinks.vue";
import BurgerIcon from "@/assets/icons/BurgerIcon.vue";
import LoginModal from "./LoginModal.vue";
import { useModalStore } from "@/stores/modal/useModalStore";

const modalStore = useModalStore();
const isOpen = ref(false);
const darkMode = ref(false);

const openModal = () => {
  modalStore.showLoginFormModal = true;
  document.body.classList.add("no-scroll");
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const toggleMode = () => {
  darkMode.value = !darkMode.value;
};
</script>

<template>
  <nav>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >EmploWeb</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-4">
        <button
          class="hover:bg-primary sm:hidden lg:block z-50 hover:text-white border-[2px] text-sm border-primary text-primary rounded-lg px-2"
        >
          ვაკანსიის დამატება
        </button>

        <button
          @click="openModal"
          type="button"
          class="hover:text-white text-orange_red_color hover:bg-orange_red_color border-[2px] border-orange_red_color z-50 hover:opacity-90 rounded-lg text-sm px-4 py-2 text-center"
        >
          შესვლა
        </button>
        <div class="flex items-center z-50 cursor-pointer">
          <img
            @click="toggleMode"
            width="20"
            v-if="darkMode"
            src="@/assets/images/moon.png"
          />
          <img @click="toggleMode" width="20" v-else src="@/assets/images/sun.png" />
        </div>
        <LoginModal />
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center z-30 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <BurgerIcon />
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="!isOpen && 'hidden'"
      >
        <NavbarLinks />
      </div>
    </div>
  </nav>
</template>
