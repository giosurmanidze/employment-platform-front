import axios from '@/config/axios'

export function getVacancies() {
  axios.get('/vacancies').then((response) => {
    this.vacancies = response.data.data
  })
}
