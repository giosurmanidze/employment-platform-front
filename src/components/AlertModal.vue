<template>
  <div
    v-if="showAlert"
    class="p-3 text-alert_text_color z-10 h-16 w-72 flex rounded-sm"
    :class="classes"
  >
    <section class="flex justify-between">
      <div class="cursor-pointer">
        <CrossIcon @click="alertUpdate(false)" />
      </div>
    </section>
    <section>
      <p class="ml-10 text-white text-sm">{{ bottom_locale_text }} !</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CrossIcon from "@/assets/icons/CrossIcon.vue";

defineProps({
  classes: { required: true, type: String },
  top_locale_text: {
    type: String,
  },
  bottom_locale_text: {
    type: String,
  },
  alertUpdate: {
    type: Function,
  },
});
const showAlert = ref(true);
</script>
