import { defineStore } from 'pinia'

// App
export const useAppStore = defineStore('App', {
  persist: true,
  state: () => {
    return {
      count: 100,
      quantity: 10,
      menuState: 'menu-fold',
    }
  },
  getters: {
    countTotal(state) {
      return state.count * state.quantity
    },
  },

  actions: {
    menuStateChange() {
      if (this.menuState === 'menu-fold')
        this.menuState = 'menu-unfold'
      else
        this.menuState = 'menu-fold'
    },
    countChange() {
      this.count++
      this.quantity++
    },
  },
})
