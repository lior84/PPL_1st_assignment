import { insert, slice } from "ramda";
import * as R from "ramda";

const stringToArray = R.split("");

//#1
// const countVowels = (str: string): number => {
//     return str.match(/[aAeEiIoOuU]/g).length;
// }

// console.log(countVowels("This is SOME Text"));

//#3
// let isBalancedParenthesis = (str: string, parenthesesLeft: string, parenthesesRight: string,) => {
//     let wrongArrangement = false;
//     let sumOfOarenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
//     {
//         if(uptoPrevChar < 0)
//             wrongArrangement = true;
//         else 
//         {
//             if(thisChar === parenthesesLeft)
//                 return ++uptoPrevChar;
//             else if (thisChar === parenthesesRight) 
//                 return --uptoPrevChar;
//         }
//         return uptoPrevChar 
//     }, 0);
//     return wrongArrangement ? false : sumOfOarenthesesThatAreEqual;
// }

// let isPaired = (str: string) =>{
//     return isBalancedParenthesis(str, "(", ")") && isBalancedParenthesis(str, "[", "]") && isBalancedParenthesis(str, "{", "}");
// }

let isPaired = (str: string) =>{
    let stack: string[] = [];
    let flag = true;
    let sumOfOarenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
    {
            if(thisChar === "("){
                stack = R.insert(stack.length, "(", stack)
            }
            else if(thisChar === "["){
                stack = R.insert(stack.length, "[", stack)
            }
            else if(thisChar === "{"){
                stack = R.insert(stack.length, "{", stack)
            }
            else if(thisChar === ")"){
                if(stack[stack.length-1] === "("){
                    stack = R.remove(stack.length-1, 1, stack)
                }
                else{
                    flag = false;
                }
            }
            else if(thisChar === "]"){
                if(stack[stack.length-1] === "["){
                    stack = R.remove(stack.length-1, 1, stack)
                }
                else{
                    flag = false;
                }
            }
            else if (thisChar === "}"){
                if(stack[stack.length-1] === "{"){
                    stack = R.remove(stack.length-1, 1, stack)
                }
                else{
                    flag = false;
                }
            }
        return uptoPrevChar 
}, 0);
    if(stack.length != 0)
        flag = false
    console.log(stack);
    return flag
}


console.log(isPaired("Thi{{{{{}}}}}"))
