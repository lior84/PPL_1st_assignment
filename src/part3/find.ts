//import { ok } from "node:assert";
import { prepend } from "ramda";
import { Result, makeFailure, makeOk, bind, either, isOk } from "../lib/result";

// ------------------------------------Part3--------------------------------------------


/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}


// --------------------------------Quastion a------------------------------------------

export const findResult = <T>(pred: (x: T) => boolean, a: T[]):Result<T>=> {
    let b : T[] = a.filter(item => {return pred(item)});
    if (b.length==0)
    return makeFailure("No element found.");
    else return makeOk(b[0]);
}



/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

// --------------------------------Quastion b------------------------------------------

export const returnSquaredIfFoundEven_v2 =(a: number[]): Result<number> => {
     try {
         let r: Result<number>= bind(findResult( x => x % 2 === 0, a),y=>makeOk(y*y));
         return r;
    } catch (e) {
        return makeFailure("No element found.");
    }
}

// --------------------------------Quastion c------------------------------------------

export const returnSquaredIfFoundEven_v3 :(a: number[])=> number = (a: number[]): number => {
    let r: number= either(findResult( x => x % 2 === 0, a),y=>y*y, x=> -1);
    return r;
}
