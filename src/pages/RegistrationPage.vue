<script setup>
import TextField from "@/components/TextField.vue";
import { useRegisterSubmit } from "@/services";
import { Form } from "vee-validate";
import { useModalStore } from "@/stores/modal/useModalStore";
import AlertModal from "@/components/AlertModal.vue";

const { submit } = useRegisterSubmit();
const { toggleShowSuccessSentEmailModal } = useModalStore();
const modalStore = useModalStore();
</script>

<template>
  <div
    class="flex sm:flex-col lg:flex-row lg:items-center justify-start sm:gap-5 lg:gap-20 w-full h-[80vh] bg-white"
  >
    <div
      class="sm:text-[1.625rem] lg:text-[2.5rem] lg:w-1/2 flex lg:justify-end sm:justify-center sm:px-5 lg:p-0"
    >
      <span class="text-main_text_color font-black lg:w-[30rem] sm:w-[35rem]">
        მოძებნე შენზე მორგებული სამსახური შენთან ახლოს
      </span>
    </div>
    <div class="lg:w-1/2 flex relative lg:justify-start sm:justify-center sm:px-5 lg:p-0">
      <Form
        @submit="submit"
        v-slot="{ errors, meta }"
        class="lg:w-[30rem] sm:w-[35rem] h-auto bg-form_bg_color flex flex-col items-center gap-4 border-2 border-gray-100 shadow-md rounded-3xl py-5"
      >
        <Transition name="bounce">
          <AlertModal
            classes="right-[25rem] top-[-3rem] absolute bg-[#71ea71]"
            v-if="modalStore.showSuccessSentEmailModal"
            :alertUpdate="toggleShowSuccessSentEmailModal"
            bottom_locale_text="გთხოვთ შეამოწმოთ თქვენი ელ.ფოსტა"
          />
        </Transition>
        <h1 class="text-xl">გაიარეთ რეგისტრაცია</h1>
        <TextField
          name="username"
          type="text"
          label="მომხმარებლის სახელი"
          :show-error="true"
          rules="required|min:8"
          :has-error="errors.username"
        />
        <TextField
          name="email"
          type="text"
          label="შეიყვანეთ ელ.ფოსტა"
          :show-error="true"
          rules="required|min:8"
          :has-error="errors.email"
        />
        <TextField
          name="password"
          type="password"
          label="პაროლი"
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
            class="bg-main_bg_color text-white m-0 block h-14 rounded-2xl w-full"
          >
            რეგისტრაცია
          </button>
        </div>
        <div class="flex w-[90%] text-[0.825rem] font-medium">
          <span class="text-secondary_text_color">გაქვს ანგარიში?</span>
          <button
            type="button"
            @click="moveToRegisterPage"
            class="text-main_text_color pl-1 underline cursor-pointer"
          >
            შესვლა
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
