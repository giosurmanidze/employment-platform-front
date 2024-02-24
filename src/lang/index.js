import { createI18n } from 'vue-i18n'
import * as authEn from './en/auth.json'
import * as authka from './ka/auth.json'

const i18n = createI18n({
  locale: 'ka',
  legacy: false,
  messages: {
    en: {
      ...authEn
    },
    ka: {
      ...authka
    }
  }
})

export default i18n
