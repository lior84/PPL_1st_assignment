<<<<<<< HEAD
import { insert, slice } from "ramda";
=======
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
import * as R from "ramda";

const stringToArray = R.split("");

<<<<<<< HEAD
//#1
const countVowels = (str: string): number => {
    return R.match(/[aAeEiIoOuU]/g, str).length;
}

//#3
let isPaired = (str: string) =>{
    let stack: string[] = [];
    let flag = true;
    let sumOfOarenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
=======
/* Question 1 */
export const countVowels = (str: string): number => {
    return R.match(/[aAeEiIoOuU]/g, str).length;
}

/* Question 2 */
export const runLengthEncoding = (str : string): string=>{
    let arr : string[] = stringToArray(str); 
    return rec(arr,arr[0],0,0,"");
};

export const rec : (str : string[], last : string, current : number, counter : number, output :string )=> string = (str,last,current,counter,output) =>{
    if (current==str.length+1)
        return output;
    else if (last== str[current])
        return rec(str, last, current+1,counter+1,output);
    else return rec(str, str[current], current+1, 1,output.concat(last+counter));
}

// /* Question 3 */
export const isPaired = (str: string) =>{
    let stack: string[] = [];
    let parenthesesSymmetrical = true;
    let sumOfParenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
    {
            if(thisChar === "("){ stack = R.insert(stack.length, "(", stack) }
            else if(thisChar === "["){ stack = R.insert(stack.length, "[", stack) }
            else if(thisChar === "{"){ stack = R.insert(stack.length, "{", stack) }
            else if(thisChar === ")"){
                if(stack[stack.length-1] === "(")
                    stack = R.remove(stack.length-1, 1, stack)
                else
<<<<<<< HEAD
                    flag = false;
=======
                parenthesesSymmetrical = false;
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
            }
            else if(thisChar === "]"){
                if(stack[stack.length-1] === "[")
                    stack = R.remove(stack.length-1, 1, stack)
                else
<<<<<<< HEAD
                    flag = false;
=======
                parenthesesSymmetrical = false;
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
            }
            else if (thisChar === "}"){
                if(stack[stack.length-1] === "{")
                    stack = R.remove(stack.length-1, 1, stack)
                else
<<<<<<< HEAD
                    flag = false;
=======
                parenthesesSymmetrical = false;
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
            }
        return uptoPrevChar 
    }, 0);

    if(stack.length != 0)
<<<<<<< HEAD
        flag = false
    console.log(stack);
    return flag
}

//tests #1
console.log(countVowels("This is SOME Texti"));
//tests #3
//console.log(isPaired("Thi{{{[{{}}}}}"))
=======
        parenthesesSymmetrical = false
    //console.log(stack);
    return parenthesesSymmetrical
}

//tests #1
//console.log(countVowels("This is SOME Texti"));
//tests #3
//console.log(isPaired("Thi{{{{{}}}}}"))
//check
let s :string = "fffnjkjjjjkkk";
console.log(runLengthEncoding(s));
>>>>>>> part 2-q1,2,3 are done, q2 should not print 1
