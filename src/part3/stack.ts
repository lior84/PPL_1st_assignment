import { State, bind } from "./state";

export type Stack = number[];

export const push : (x:number) =>State<Stack,undefined> =(x:number)=>{
    return (initS:Stack)=>{
    return [[x].concat(initS),undefined];
    }
   };

export const pop : State<Stack,number> =  (initS:Stack)=> {
    return [initS.slice(1),initS[0]];
    };

export const stackManip = bind(pop,p1=>bind(push((p1)*(p1)),()=>bind(pop,p3=>push(p3+p1))));
