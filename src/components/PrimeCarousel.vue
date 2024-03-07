<script setup>
import { useVacancyStore } from '@/stores/vacancy/useVacancyStore'
import { storeToRefs } from 'pinia'
import Carousel from 'primevue/carousel'
import { onMounted } from 'vue'

const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 4, numScroll: 4 },
  { breakpoint: '768px', numVisible: 2, numScroll: 2 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
]

const { getVacancies } = useVacancyStore()
const { vacancies } = storeToRefs(useVacancyStore())

onMounted(() => {
  getVacancies()
})

const backendImageUrl = import.meta.env.VITE_IMAGE_URL
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
        <div class="mb-3 bg-primary h-[17rem] rounded-2xl p-3 flex flex-col gap-5 text-white">
          <div class="relative mx-auto w-full flex justify-between items-center">
            <img
              :src="`${backendImageUrl + slotProps.data.creator.image}`"
              :alt="slotProps.data.image"
              class="w-[5rem] h-[5rem] rounded-full"
            />
            <span class="text-sm">7მარ-6აპრ</span>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p class="text-sm">{{ slotProps.data.creator.name }}</p>
              <p>{{ slotProps.data.title }}</p>
            </div>
            <span>{{ slotProps.data.creator.address }}</span>
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>
