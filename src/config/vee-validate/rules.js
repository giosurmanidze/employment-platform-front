import { confirmed, email, max, min, required } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

defineRule('required', required)
defineRule('email', email);
defineRule('confirmed', confirmed);
defineRule('min', min);
defineRule('max', max);