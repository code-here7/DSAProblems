const str = "Here I am";
let arr= [], word = "", revStr = "";

for(let i = 0; i < str.length; i++ )
{
if(str[i]!=" ")
{
    word = word + str[i];
}
else
{
    arr.push(word);
    word = "";
}
if(i==str.length-1)
{
    arr.push(word);
    word = "";
}
}

// console.log(arr);
// console.log(word)

for(let i = arr.length-1 ; i >=0 ; i-- )
{
    revStr = revStr + arr[i] + " ";
}

console.log(revStr)