<script setup>
import { onMounted } from "vue";
import { makeEmailVerifiedSubmit } from "@/services";
import { RouterLink } from "vue-router";

onMounted(() => {
  makeEmailVerifiedSubmit();
});
</script>

<template>
  <div
    class="flex justify-center gap-10 sm:pl-5 lg:p-0 items-center h-[80vh] w-full bg-main_bg_color"
  >
    <div class="flex flex-col items-center md:w-[90%]">
      <span class="text-main_text_color font-black text-[2.5rem]">
        გილოცავთ, თქვენი ანგარიში წარმატებით შეიქმნა!
      </span>
      <span class="text-main_text_color font-black sm:text-[1.625rem]">
        გადადით მთავარ გვერდზე და გაიარეთ ავტორიზაცია
        <RouterLink to="home" class="underline">მთავარი გვერდი</RouterLink>
      </span>
    </div>
  </div>
</template>
