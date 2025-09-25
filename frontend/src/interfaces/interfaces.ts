export interface IButton {
    onClick:()=> void | null;
    className?:string;
}

export interface IInputField{
    title:string;
    type?:string;
    name?:string;
    onChange?:( e: React.ChangeEvent<HTMLInputElement>)=> void | null;
    disabled?:boolean;
    placeholder?:string;
    value?:string;
}