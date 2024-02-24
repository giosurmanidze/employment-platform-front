<script setup>
import { ref } from 'vue'
import TextField from '@/components/TextField.vue'
import { Form } from 'vee-validate'
import { useLoginSubmit } from '@/services/index'

const showModal = ref(false)

const { submit, Error } = useLoginSubmit()

const openModal = () => {
  showModal.value = true
  document.body.classList.add('no-scroll')
}

const closeModal = () => {
  showModal.value = false
  document.body.classList.remove('no-scroll')
  Error.value = ''
}
</script>

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
        <Form
          @submit="submit"
          v-slot="{ errors, meta }"
          class="flex flex-col items-center justify-center mt-4 gap-1"
        >
          <text-field
            name="username"
            type="text"
            label="username"
            rules="required"
            :error="Error"
            :has-error="errors.username"
          />
          <text-field
            name="password"
            type="password"
            rules="required"
            label="password"
            :has-error="errors.password"
          />
          <div
            class="flex w-[90%] font-medium text-[#8f9b9a] text-[0.775rem] underline cursor-pointer"
          >
            დაგავიწყდა პაროლი?
          </div>
          <div class="relative mt-1 mb-3 w-[90%]">
            <button
              type="submit"
              :disabled="!meta.valid"
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
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
