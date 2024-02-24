<script setup>
import { ErrorMessage, Field } from 'vee-validate'
import { computed, ref } from 'vue'
import ViewEye from '@/assets/icons/ViewEye.vue'
import HideEye from '@/assets/icons/HideEye.vue'

const hasInteracted = ref(false)
const showPassword = ref(false)
const props = defineProps({
  type: {
    type: String,
    required: false
  },
  rules: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  hasError: {
    type: String,
    required: false
  },
  showError: {
    type: Boolean,
    required: false
  }
})
const inputType = computed(() => (showPassword.value ? 'text' : props.type))
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="flex flex-col relative mb-3 w-[90%]">
    <Field
      class="peer m-0 block h-[58px] rounded-xl w-full border border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
      :class="{
        'border-red-500': hasError
      }"
      placeholder="name@example.com"
      :type="inputType"
      :rules="rules"
      :id="name"
      :name="name"
      :validate-on-input="true"
      @blur="hasInteracted = true"
    />
    <label
      :for="name"
      class="pointer-events-none text-sm font-medium absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >პაროლი</label
    >
    <ErrorMessage v-if="showError" :name="name" class="text-black xs:text-sm sm:text-base" />
    <span
      v-if="type === 'password'"
      :class="`absolute right-3 top-[1.325rem] cursor-pointer  ${
        ((!hasError && hasInteracted) || hasError) && 'right-8'
      }`"
      @click="togglePasswordVisibility"
    >
      <hide-eye v-if="!showPassword" />
      <view-eye v-if="showPassword" />
    </span>
  </div>
</template>
