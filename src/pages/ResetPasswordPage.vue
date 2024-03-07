<script setup>
import TextField from "@/components/TextField.vue";
import { useResetPasswordSubmit } from "@/services";
import { Form } from "vee-validate";

const { submit } = useResetPasswordSubmit();
</script>

<template>
  <div
    class="flex sm:flex-col lg:flex-row lg:items-center justify-center sm:gap-10 lg:gap-20 w-full h-[80vh] bg-white"
  >
    <div
      class="sm:text-[1.625rem] lg:text-[2.5rem] lg:w-1/2 flex lg:justify-end sm:justify-center sm:px-5 lg:p-0"
    >
      <span
        class="text-main_text_color font-black lg:w-[30rem] sm:w-[35rem] sm:text-center lg:text-left"
      >
        გთხოვთ შეიყვანეთ ახალი პაროლი, რომლითაც შემდეგში ისარგებლებთ
      </span>
    </div>
    <div class="lg:w-1/2 flex relative lg:justify-start sm:justify-center sm:px-5 lg:p-0">
      <Form
        @submit="submit"
        v-slot="{ errors, meta }"
        class="lg:w-[30rem] sm:w-[35rem] h-auto bg-form_bg_color flex flex-col items-center gap-4 border-2 border-gray-100 shadow-md rounded-3xl py-5"
      >
        <h1 class="text-xl">შეიყვანეთ ახალი პაროლი</h1>
        <TextField
          name="password"
          type="password"
          label="ახალი პაროლი"
          :show-error="true"
          rules="required|min:8"
          :has-error="errors.password"
        />
        <TextField
          name="password_confirmation"
          type="password"
          label="გაიმეორეთ პაროლი"
          :show-error="true"
          rules="required|confirmed:password"
          :has-error="errors.password_confirmation"
        />
        <div class="relative mt-1 mb-3 w-[90%]">
          <button
            type="submit"
            :disabled="!meta.valid"
            class="bg-primary text-white m-0 block h-14 rounded-2xl w-full"
          >
            გაგზავნა
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
