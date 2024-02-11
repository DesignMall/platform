export interface Player{
    Player_Name: string
    Player_Number: string
}
export interface NameDimensions {
    Xposition: number
    Yposition: number
    Size: number
    Arc?: number
    Font?: string
}
export interface NumberDimensions{
    X: number
    Y: number
    size: number
    Font?: string
}

export interface OptionsCarp{
    key?: number
    name:string
    images:string[]
    clicked?: boolean
}

export interface Dropdown{
    name:string
    images?: string[]
}

export interface Nodes{
    children: React.ReactNode
}