const arr = [0, 1, 0, 3, 12];

for(let i = 0 ; i <arr.length ; i++)
{
    let min = arr[i], temp;
   for(let j = i+1 ; j <arr.length ; j++)
   {
       if(arr[i]<arr[j])
       {
           temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
   }
}

  console.log(arr);