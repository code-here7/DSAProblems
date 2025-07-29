const str = "banana";
let count = 0;
let arr = str.split("");

let c = prompt("Enter a character : ");
for(let i =0; i < arr.length ; i++)
{
    if(c == arr[i])
    {
        count++;
    }
}

if(count != 0)
{
   console.log(c+" appears "+count+" times.") 
}
else
    {
        console.log("No character exist in string");
    }
