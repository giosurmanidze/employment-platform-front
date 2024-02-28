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
  <div class="flex justify-center gap-10 items-center h-[80vh] bg-[#f8f7fa]">
    <div>
      <pre class="text-[#2F384D] font-black text-[40px]">
        მოძებნე შენზე 
        მორგებული სამსახური
        შენთან ახლოს
      </pre>
    </div>
    <div class="w-1/2 ml-10 flex items-center">
      <Form
        @submit="submit"
        v-slot="{ errors, meta }"
        class="w-[30rem] h-[32rem] bg-[#f8f7fa] flex flex-col items-center gap-4 rounded-3xl py-5 relative"
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
            class="bg-[#5598d4] text-white m-0 block h-[58px] rounded-2xl w-full"
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
