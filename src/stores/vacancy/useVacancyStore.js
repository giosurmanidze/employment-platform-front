import { defineStore } from 'pinia'
import { getVacancies } from './actions';

export const useVacancyStore = defineStore('useVacancyStore', {
  state: () => ({
    vacancies: []
  }),
  actions: {
    getVacancies
  }
})
