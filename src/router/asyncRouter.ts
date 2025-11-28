import { useNavigationStore } from '@/store/navigationStore'
import { nextTick, type Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import type { IRouterStruct } from '@/interfaces/IRouterStruct'
import defualut from '@/assets/default.png'
const picture = import.meta.glob('../assets/images/**/*.png')
const gif = import.meta.glob('../assets/images/**/*.gif')

export const getComponents = () => {
  // 自动注入路由
  const pages = import.meta.glob('@/pages/**/*.vue')
  const autoRoutesAnimation = setPages(pages)
  return autoRoutesAnimation
}

const setPages = (modules: Record<string, () => Promise<unknown>>): Array<RouteRecordRaw> => {
  const autoRoutesAnimation = Object.keys(modules)
    .filter((item) => !item.includes('components'))
    .filter((item) => {
      const str = item.split('/')
      const name = str[str.length - 1]!.split('.')[0]

      if (str[3] !== name) {
        return false
      }
      return true
    })
    .map((item) => {
      const str = item.split('/')
      const path = `/${str[3]}/${str[4]}`
      const name = str[str.length - 1]!.split('.')[0]
      const index = uuidv4()
      return {
        index,
        path: path,
        name,
        component: () => import('../layouts/BlankLayout.vue'),
        children: [
          {
            path: path,
            name: name + index,
            component: modules[item] as () => Promise<{ default: Component }>,
          },
        ],
      }
    })

  setIconPath(autoRoutesAnimation as IRouterStruct[])

  return autoRoutesAnimation
}

const setIconPath = (routers: Array<IRouterStruct>) => {
  const imgs = Object.keys(picture).map((item) => {
    return item
  })
  const gifs = Object.keys(gif).map((item) => {
    return item
  })
  const list = imgs.concat(gifs)

  nextTick(() => {
    const store = useNavigationStore()
    routers.forEach((route) => {
      const image = list.find((item) => item.includes(route.name))

      let flag = false
      if (image) {
        const split = image.split('/')
        flag = split[split.length - 1]!.split('.')[0] === route.name
      }

      const obj = {
        id: route.index,
        path: route.path,
        name: route.name,
        icon: flag ? new URL(image as string, import.meta.url).href : defualut,
      }

      store.setItem(obj)
    })
  })
}
