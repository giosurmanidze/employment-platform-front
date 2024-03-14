<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <ul
    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  >
    <li>
      <RouterLink
        to=""
        class="block py-2 px-3 md:p-0 text-gray-900 bg-orange_red_color rounded md:bg-transparent md:text-orange_red_color md:dark:text-blue-500"
        >მთავარი</RouterLink
      >
    </li>
    <li>
      <RouterLink
        to=""
        class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange_red_color md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >ვაკანსიები</RouterLink
      >
    </li>
    <li>
      <RouterLink
        to=""
        class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange_red_color d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >განათლება</RouterLink
      >
    </li>
    <li>
      <RouterLink
        to=""
        class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange_red_color md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >ფასები</RouterLink
      >
    </li>
  </ul>
</template>
