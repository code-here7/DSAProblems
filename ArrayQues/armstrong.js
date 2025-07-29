let num = 153 , digit = 0 , sum = 0;
num = "" + num ;
// console.log(typeof(num));

for(let i=0; i< num.length ; i++ )
{
    // console.log(num[i]);
    digit++;
}

for(let i=0; i< num.length ; i++ )
{
  sum = sum + Math.pow(num[i],digit);
//   console.log(sum)
}
`   `
if(sum===parseInt(num))
{
    console.log("The number is armstrong no.");
   
}
else
{
    console.log("The number is not an armstrong no.");
}