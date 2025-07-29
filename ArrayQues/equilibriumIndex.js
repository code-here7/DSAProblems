const arr = [-7, 1, 2, 5, -4, 3, 0];
let index = parseInt(arr.length/2), lsum = 0, rsum = 0;

function check(index)
{
    for(let i = 0 ; i< index ; i++)
{
    // console.log(arr[i]);
    lsum = lsum + arr[i];
}
for(let i = (index+1) ; i< arr.length ; i++)
{
    // console.log(arr[i]);
    rsum = rsum + arr[i];
}
console.log(index+" "+lsum+" "+rsum);
}

check(index);

if(lsum === rsum)
{
    console.log("Equilibrium index is: ",index)
}
else if(lsum < rsum)
{
  while(index>0)
  {
      index = index - 1;
      check(index);
  }
}
else
{
  while(index<arr.length - 1)
  {
      index = index - 1;
      check(index);
  }
}