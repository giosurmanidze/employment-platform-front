import { confirmed, email, max, min, required } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

defineRule('required', required)
defineRule('email', email)
defineRule('confirmed', confirmed)
defineRule('min', min)
defineRule('max', max)

defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return 'passwords must match'
})
