const arr = [1, 2, 3, 2, 1];
let m = arr.length-1;
let l = arr[0],r = arr[m], palin = true;
for (let i = 0;i < arr.length ; i++)
{ 
  l = arr[i];
//   console.log(l);
  r = arr[m];
//   console.log(arr[m]);
  m--;
//   console.log(l+" "+r);
  if(l!== r)
  {
      palin = false;
  }
}

if(palin == true)
{
    console.log(palin);
}
else
{
    console.log(palin);
}
