import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ka from '@vee-validate/i18n/dist/locale/ka.json'

configure({
  generateMessage: localize({
    en: {
      messages: {
        ...en.messages,
        confirm_password: 'passwords must match'
      },
      names: {
        password_confirmation: 'confirm password'
      }
    },
    ka: {
      messages: {
        ...ka.messages,
        confirm_password: '{field} უნდა ემთხვეოდეს პაროლს'
      },
      names: {
        password_confirmation: 'პაროლის გამეორება',
        confirm_password: 'განმეორებით პაროლი'
      }
    }
  })
})
