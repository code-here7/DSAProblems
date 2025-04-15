let arr = [53,32,19,48,25,56];


for(let j = 0; j< arr.length ; j++)
{
for(let i = 0; i< arr.length ; i++)
{
    let temp;
    if(arr[i]>arr[i+1])
    {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}    
}


console.log(arr);