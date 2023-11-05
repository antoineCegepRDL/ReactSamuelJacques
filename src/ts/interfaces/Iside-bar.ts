export interface MenuGroup {
    id:string,
    title:string,
    type:string,
    children: any
}

export interface MenuCollapse extends MenuGroup {
    icon?:any,
    caption?:string
}

export interface MenuItemChildren {
    id:string,
    title:string,
    type:string,
    url:string,
    icon?:any,
    breadcrumbs: boolean,
    caption?:string,
    disabled?:boolean,
    target?:string
}