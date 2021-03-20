import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (str: string): number => {
    return R.match(/[aAeEiIoOuU]/g, str).length;
}

/* Question 2 */
export const runLengthEncoding : (str : string)=> string = str =>{
    let arr : string[] = stringToArray(str); 
    if (str.length>0)
    return rec(arr,arr[0],0,0,"");
    return "";
};

//------helper Recursive for 2-----------
const rec : (str : string[], last : string, current : number, counter : number, output :string )=> string = (str,last,current,counter,output) =>{
    if (current==str.length+1)
        return output;
    else if (last== str[current])
        return rec(str, last, current+1,counter+1,output);
    else if(counter==1)
        return rec(str, str[current], current+1, 1,output.concat(last));
    else return rec(str, str[current], current+1, 1,output.concat(last+counter));
}

// /* Question 3 */
export const isPaired = (str: string): boolean => {
    let stack: string[] = [];
    let parenthesesSymmetrical: boolean[] = [];
    parenthesesSymmetrical = R.insert(0, true, parenthesesSymmetrical);
    let sumOfParenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
    {
            if(thisChar === "("){ stack = R.insert(stack.length, "(", stack) }
            else if(thisChar === "["){ stack = R.insert(stack.length, "[", stack) }
            else if(thisChar === "{"){ stack = R.insert(stack.length, "{", stack) }
            else if(thisChar === ")"){
                if(stack[stack.length-1] === "(")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    parenthesesSymmetrical = R.insert(0, true, parenthesesSymmetrical);
            }
            else if(thisChar === "]"){
                if(stack[stack.length-1] === "[")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    parenthesesSymmetrical = R.insert(0, true, parenthesesSymmetrical);
            }
            else if (thisChar === "}"){
                if(stack[stack.length-1] === "{")
                    stack = R.remove(stack.length-1, 1, stack)
                else
                    parenthesesSymmetrical = R.insert(0, true, parenthesesSymmetrical);
            }
        return uptoPrevChar 
    }, 0);

    if(stack.length != 0)
        parenthesesSymmetrical[0] = false
    return parenthesesSymmetrical[0]
}