<script setup>
import TextField from "@/components/TextField.vue";
import { Form } from "vee-validate";
import { useLoginSubmit } from "@/services/index";
import { useModalStore } from "@/stores/modal/useModalStore";
import AlertModal from "./AlertModal.vue";
import { useRouter } from "vue-router";

const { submit, Error } = useLoginSubmit();
const router = useRouter();

const { toggleShowLoginErrorMessageModal } = useModalStore();
const modalStore = useModalStore();

const closeModal = () => {
  modalStore.showLoginFormModal = false;
  document.body.classList.remove("no-scroll");
  Error.value = "";
  modalStore.showLoginErrorMessageModal = false;
};

const moveToForgotPage = () => {
  modalStore.showLoginFormModal = false;
  router.push({ name: "forgotPassword" });
};
const moveToRegisterPage = () => {
  modalStore.showLoginFormModal = false;
  router.push({ name: "registration" });
};
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modalStore.showLoginFormModal"
      class="fixed inset-0 flex justify-center bg-black sm:p-3 md:pt-10 bg-opacity-60 z-50"
      @click="closeModal"
    >
      <div
        class="bg-white pt-4 rounded-2xl sm:h-[24rem] md:h-[23rem] w-[32rem]"
        @click.stop
      >
        <div class="flex flex-col items-center">
          <div class="w-[90%] flex justify-between">
            <h2 class="text-main_text_color font-bold">ავტორიზაცია</h2>
            <button @click.stop="closeModal">
              <img src="@/assets/images/cross.png" />
            </button>
          </div>
          <div class="md:h-[0.063rem] bg-gray-200 w-full mt-4"></div>
        </div>
        <Form
          @submit="submit"
          v-slot="{ errors, meta }"
          class="flex flex-col items-center justify-center mt-4 gap-1 relative"
        >
          <Transition name="bounce">
            <AlertModal
              classes="right-14 sm:top-[-5rem] md:top-[-6rem] absolute bg-error_modal_bg"
              v-if="modalStore.showLoginErrorMessageModal"
              :alertUpdate="toggleShowLoginErrorMessageModal"
              :bottom_locale_text="Error"
            />
          </Transition>
          <TextField
            name="username"
            type="text"
            label="მომხმარებლის სახელი / ელ.ფოსტა"
            rules="required"
            :error="Error"
            :has-error="errors.username"
          />
          <TextField
            name="password"
            type="password"
            rules="required"
            label="პაროლი"
            :has-error="errors.password"
          />
          <button
            @click="moveToForgotPage"
            type="button"
            to="forgotPassword"
            class="flex w-[90%] pl-2 font-medium text-secondary_text_color text-[0.775rem] underline cursor-pointer"
          >
            დაგავიწყდა პაროლი?
          </button>
          <div class="relative mt-1 mb-3 w-[90%]">
            <button
              type="submit"
              :disabled="!meta.valid"
              class="bg-primary text-white m-0 block h-14 rounded-2xl w-full"
            >
              ავტორიზაცია
            </button>
          </div>
          <div
            class="flex sm:flex-col sm:items-start md:flex-row justify-center w-[90%] text-[0.775rem] font-medium"
          >
            <span class="text-secondary_text_color pl-1">არ გაქვს ანგარიში?</span>
            <button
              type="button"
              @click="moveToRegisterPage"
              class="text-main_text_color pl-1 underline cursor-pointer"
            >
              გაიარე რეგისტრაცია და შექმენი პროფილი
            </button>
          </div>
        </Form>
      </div>
    </div>
  </Transition>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
