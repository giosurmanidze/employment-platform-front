<script setup>
import AlertModal from "@/components/AlertModal.vue";
import TextField from "@/components/TextField.vue";
import { useForgorPasswordSubmit } from "@/services";
import { useModalStore } from "@/stores/modal/useModalStore";
import { Form } from "vee-validate";

const { submit, Error } = useForgorPasswordSubmit();
const { toggleShowErrorMessageModal } = useModalStore();
const modalStore = useModalStore();
</script>

<template>
  <div class="flex justify-center items-center h-[80vh] bg-[#f8f7fa]">
    <div class="text-[40px]">
      <pre class="text-[#2F384D] font-black">
        გთხოვთ შეიყვანეთ 
        თქვენი არსებული ელ.ფოსტა 
        და აღადგინეთ პაროლი 
      </pre>
    </div>
    <div class="w-1/2 ml-10 flex items-center relative">
      <Transition name="bounce">
        <AlertModal
          classes="right-30 top-[-6rem] absolute"
          v-if="modalStore.showErrorMessageModal"
          :alertUpdate="toggleShowErrorMessageModal"
          :bottom_locale_text="Error"
        />
      </Transition>
      <Form
        @submit="submit"
        v-slot="{ errors, meta }"
        class="w-[30rem] h-[15rem] bg-[#f8f7fa] flex flex-col items-center gap-4 border-2 border-gray-100 shadow-md rounded-3xl py-5"
      >
        <h1 class="text-xl">აღადგინე პაროლი</h1>
        <TextField
          name="email"
          type="text"
          label="მიუთითეთ ელ.ფოსტა"
          rules="required"
          :has-error="errors.username"
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
