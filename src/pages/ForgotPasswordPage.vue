<script setup>
import AlertModal from "@/components/AlertModal.vue";
import TextField from "@/components/TextField.vue";
import { useForgorPasswordSubmit } from "@/services";
import { useModalStore } from "@/stores/modal/useModalStore";
import { Form } from "vee-validate";

const { submit, Error, Success } = useForgorPasswordSubmit();
const modalStore = useModalStore();

const {
  toggleShowForgotErrorMessageModal,
  toggleShowSuccessMessageModal,
} = useModalStore();
</script>

<template>
  <div
    class="flex sm:flex-col lg:flex-row lg:items-center justify-center sm:gap-10 lg:gap-20 w-full h-[80vh] bg-white"
  >
    <div
      class="sm:text-[25px] lg:text-[40px] lg:w-1/2 flex lg:justify-end sm:justify-center sm:px-5 lg:p-0"
    >
      <span class="text-[#2F384D] font-black lg:w-[30rem] sm:w-[35rem]">
        გთხოვთ შეიყვანეთ თქვენი არსებული ელ.ფოსტა და აღადგინეთ პაროლი
      </span>
    </div>
    <div class="lg:w-1/2 flex relative lg:justify-start sm:justify-center sm:px-5 lg:p-0">
      <Transition name="bounce">
        <AlertModal
          classes="right-30 top-[-6rem] absolute bg-[#EA7171]"
          v-if="modalStore.showPasswordErrorMessageModal"
          :alertUpdate="toggleShowForgotErrorMessageModal"
          :bottom_locale_text="Error"
        />
      </Transition>
      <Transition name="bounce">
        <AlertModal
          classes="right-30 top-[-6rem] absolute bg-[#71ea71]"
          v-if="modalStore.showSuccessMessageModal"
          :alertUpdate="toggleShowSuccessMessageModal"
          :bottom_locale_text="Success"
        />
      </Transition>
      <Form
        @submit="submit"
        v-slot="{ errors, meta }"
        class="lg:w-[30rem] sm:w-[35rem] h-[25rem] bg-[#f8f7fa] flex flex-col items-center gap-4 border-2 border-gray-100 shadow-md rounded-3xl py-5"
      >
        <h1 class="text-xl">აღადგინე პაროლი</h1>
        <TextField
          name="email"
          type="text"
          label="მიუთითეთ ელ.ფოსტა"
          rules="required|email"
          :has-error="errors.email"
        />
        <div class="relative mt-1 mb-3 w-[90%]">
          <button
            type="submit"
            :disabled="!meta.valid"
            class="bg-[#5598d4] text-white m-0 block h-[58px] rounded-2xl w-full"
          >
            გაგზავნა
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
