const arr = [10, 5, 8, 12, 3];
let min = arr[0], smin = arr[1];
 let temp;
 if(min>smin)
 {
   temp = min;
   min = smin;
   smin = temp;
 }
// console.log(min);
// console.log(smin);

for(let i = 2 ; i < arr.length ; i++)
{
  
    // console.log(arr[i]);
    if(arr[i]<min)
    {
        min = arr[i];
    }
    else if(arr[i]<smin)
    {
          smin = arr[i];
    }
    
}

  
  console.log(smin);