const arr = [4, 2, 9, 1, 5];
let min = arr[0];
for (let i = 1;i < arr.length ; i++)
{
    if(min>arr[i])
    {
        min = arr[i];
    }
}


console.log(min);