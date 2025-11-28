
export interface INavigationStruct {
    id: string;
    name: string;
    path: string;
    icon?: string;
}

export interface INavigation {
    items: INavigationStruct[];
    url: {
        [key:string]: string; // value: path
    } | null
}
