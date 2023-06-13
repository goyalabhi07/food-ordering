import { Foods } from "./food";

export class CartItems{
    id!:number;
    price!:number;
    name!:string;
    favourite:boolean =false;
    stars:number = 0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
    qty! : number;
}