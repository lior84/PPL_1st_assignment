import { State, bind } from "./state";

export type Queue = number[];

export const enqueue : (x:number) =>State<Queue,undefined> =(x:number)=>{
 return (initQ:Queue)=>{
 return [initQ.concat(x),undefined];
}
 };

export const dequeue :State<Queue,number> = (initQ:Queue)=> {
    return [initQ.slice(1),initQ[0]];
    };

export const queueManip = bind(dequeue, d1=>bind(enqueue(d1*2),()=>bind(enqueue(d1/3),()=>dequeue)));