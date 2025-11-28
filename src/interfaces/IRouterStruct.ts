import type { Component } from 'vue'

interface IChildrenStruct {
  path: string
  name: string
  component: () => Promise<{ default: Component }>
}

export interface IRouterStruct {
  index: string
  path: string
  name: string
  redirect?: string
  component: () => Promise<{ default: Component }>
  children: IChildrenStruct[]
}
