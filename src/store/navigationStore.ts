import { defineStore } from 'pinia'
import type { INavigation, INavigationStruct } from '@/interfaces/INavigationStruct'
import _ from 'lodash'

const store: INavigation = {
  items: [] as INavigationStruct[],
  url: null,
}

export const useNavigationStore = defineStore('navigationStore', {
  state: () => store,
  getters: {
    getItems(state): INavigationStruct[] {
      return state.items
    },
    getUrls(state): {
      [key: string]: string
    } | null {
      return state.url
    },
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setItem(payload: INavigationStruct) {
      this.items.push(payload)
    },
    removeItem(payload: INavigationStruct) {
      this.items.splice(this.items.indexOf(payload), 1)
    },
    setUrl(payload: { [key: string]: string }) {
      this.url = _.merge(this.url, payload)
    },
  },
})
