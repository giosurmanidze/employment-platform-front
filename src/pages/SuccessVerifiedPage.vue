<script setup>
import { onMounted } from "vue";
import { makeEmailVerifiedSubmit } from "@/services";
import { RouterLink } from "vue-router";

onMounted(() => {
  makeEmailVerifiedSubmit();
});
</script>

<template>
  <div class="flex justify-center gap-10 items-center h-[70vh] w-full bg-[#f8f7fa]">
    <div class="flex flex-col items-center">
      <span class="text-[#2F384D] font-black text-[40px]">
        გილოცავთ, თქვენი ანგარიში წარმატებით შეიქმნა!
      </span>
      <span class="text-[#2F384D] font-black text-[25px]">
        გადადით მთავარ გვერდზე და გაიარეთ ავტორიზაცია
        <RouterLink to="home" class="underline">მთავარი გვერდი</RouterLink>
      </span>
    </div>
  </div>
</template>
