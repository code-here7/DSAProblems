const str = "The sky is blue"
const arr = str.split(" ");
let newStr = "";


for (let i = arr.length-1 ; i>=0 ; i--)
{
    // console.log(arr[i]);
    newStr = newStr + arr[i] + " ";
}

console.log(newStr);