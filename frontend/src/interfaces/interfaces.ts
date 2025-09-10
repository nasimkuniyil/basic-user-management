export interface IButton {
    onClick:()=> void | null;
    className?:string;
}

export interface IInputField{
    title:string;
    type?:string;
    onChange?:()=>void | null;
    disabled?:boolean;
    placeholder?:string;
    value?:string
}