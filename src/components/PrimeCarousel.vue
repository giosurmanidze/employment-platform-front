<script setup>
import Carousel from "primevue/carousel";
import { ref } from "vue";

const vacancies = ref([
  {
    name: "Product 1",
    image: "image_1.avif",
  },
  {
    name: "Product 1",
    image: "image_1.avif",
  },
  {
    name: "Product 1",
    image: "image_1.avif",
  },
  {
    name: "Product 1",
    image: "image_1.avif",
  },
  {
    name: "Product 1",
    image: "image_1.avif",
  },
]);

const responsiveOptions = [
  { breakpoint: "1024px", numVisible: 4, numScroll: 4 },
  { breakpoint: "768px", numVisible: 2, numScroll: 2 },
  { breakpoint: "560px", numVisible: 1, numScroll: 1 },
];
</script>

<template>
  <Carousel
    :value="vacancies"
    :numVisible="4"
    :numScroll="4"
    :responsiveOptions="responsiveOptions"
  >
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2b p-3 h-full">
        <div
          class="mb-3 bg-[#649c9e] h-[15rem] rounded-2xl p-3 flex flex-col gap-5 text-white"
        >
          <div class="relative mx-auto w-full flex justify-between items-center">
            <img
              src="../assets/images/image_1.avif"
              alt="Image"
              class="w-[5rem] h-[5rem] rounded-full"
            />
            <div>{{ slotProps.data.name }}</div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p class="text-sm">კომპანიის სახელი</p>
              <p>ვაკანსიის დასახელება</p>
            </div>
            <span>მისამართი</span>
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>
