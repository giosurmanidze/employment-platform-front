<template>
  <div class="w-full bg-gray-200 h-16">
    <button @click="openModal">Log in</button>
    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex justify-center bg-gray-500 bg-opacity-50"
      @click="closeModal"
    >
      <div class="bg-white pt-4 rounded-2xl h-[23rem] w-[32rem] mt-10" @click.stop>
        <div class="flex flex-col items-center">
          <div class="w-[90%] flex justify-between">
            <h2 class="text-[#326563] font-bold">ავტორიზაცია</h2>
            <button @click.stop="closeModal">
              <img src="@/assets/images/cross.png" />
            </button>
          </div>
          <div class="h-[1px] bg-gray-200 w-full mt-4"></div>
        </div>

        <!-- input fields -->
        <div class="flex flex-col items-center justify-center mt-4 gap-1">
          <div class="relative mb-3 w-[90%]">
            <input
              type="email"
              class="peer m-0 block h-[58px] rounded-xl w-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label
              for="floatingInput"
              class="pointer-events-none text-sm font-medium absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >მომხმარებელის სახელი / ელ.ფოსტა</label
            >
          </div>

          <div class="relative mb-3 w-[90%]">
            <input
              type="email"
              class="peer m-0 block h-[58px] rounded-xl w-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label
              for="floatingInput"
              class="pointer-events-none text-sm font-medium absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >პაროლი</label
            >
          </div>
          <div
            class="flex w-[90%] font-medium text-[#8f9b9a] text-[0.775rem] underline cursor-pointer"
          >
            დაგავიწყდა პაროლი?
          </div>
          <div class="relative mt-1 mb-3 w-[90%]">
            <button
              type="submit"
              class="bg-[#326563] text-white opacity-70 m-0 block h-[58px] rounded-xl w-full"
            >
              ავტორიზაცია
            </button>
          </div>
          <div class="flex w-[90%] text-[0.825rem] font-medium">
            <span class="text-[#8f9b9a]">არ გაქვს ანგარიში?</span>
            <span class="text-[#326563] pl-1 underline cursor-pointer"
              >გაიარე რეგისტრაცია და შექმენი პროფილი</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("no-scroll");
};
</script>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
