import React from "react";

export interface AvatarListItem {
    avatar:React.ReactNode,
    primaryText:string | React.ReactNode,
    secondaryText?:string,
    href?:string
}

export interface HorizontalAvatarListItem {
    avatar:React.ReactNode,
    betweenIcon?:React.ReactNode,
    primaryText:string,
    secondaryText?:string,
}
