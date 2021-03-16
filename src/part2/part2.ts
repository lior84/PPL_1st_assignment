import { insert, slice } from "ramda";
import * as R from "ramda";

const stringToArray = R.split("");

//#1
const countVowels = (str: string): number => {
    return R.match(/[aAeEiIoOuU]/g, str).length;
}

//#3
let isPaired = (str: string) =>{
    let stack: string[] = [];
    let flag = true;
    let sumOfOarenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
    {
            if(thisChar === "("){ stack = R.insert(stack.length, "(", stack) }
            else if(thisChar === "["){ stack = R.insert(stack.length, "[", stack) }
            else if(thisChar === "{"){ stack = R.insert(stack.length, "{", stack) }
            else if(thisChar === ")"){
                if(stack[stack.length-1] === "(")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    flag = false;
            }
            else if(thisChar === "]"){
                if(stack[stack.length-1] === "[")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    flag = false;
            }
            else if (thisChar === "}"){
                if(stack[stack.length-1] === "{")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    flag = false;
            }
        return uptoPrevChar 
    }, 0);

    if(stack.length != 0)
        flag = false
    console.log(stack);
    return flag
}

//tests #1
console.log(countVowels("This is SOME Texti"));
//tests #3
//console.log(isPaired("Thi{{{[{{}}}}}"))
