const arr = [1, 2, 2, 3, 4, 4, 5];
let arr2 = [];
arr2.push(arr[0]);
let head = 0;

for(let i = 1; i< arr.length; i++)
{    

    if(arr2[head]!=arr[i])
    {
        arr2.push(arr[i]);
        head = head + 1;
    }
}

console.log(arr2);