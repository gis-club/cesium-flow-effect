import type { IBreadcrumbRouterStruct } from './BreadcrumbRouterStruct'

interface IChildrenStruct {
    path: string,
    name: string,
    meta?: IBreadcrumbRouterStruct | undefined,
    component: () => Promise<typeof import('*.vue')>
}

export interface IRouterStruct {
    index: string,
    path: string,
    name: string,
    redirect?: string,
    component: () => Promise<typeof import('*.vue')>
    children: IChildrenStruct[]
}
