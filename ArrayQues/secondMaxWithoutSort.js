const arr = [2,1,88,45,65,8];
// const arr = [10,20,15,15];
let Max , secMax;

if(arr[0]<arr[1])
{
  Max = arr[1];
  secMax = arr[0];
}
else 
{
    Max = arr[0];
  secMax = arr[1]; 
}
// console.log(Max+" "+secMax);

for(let i = 2; i<arr.length ; i++)
{
    // console.log(arr[i]);
    if(arr[i] > Max )
    {   
        temp = Max
        Max = arr[i];
        secMax = temp;
    }
    else if(arr[i] > secMax )
    {   
        secMax = arr[i];
    }
    
}

console.log(Max+" "+secMax);