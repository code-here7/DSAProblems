const arr1 = [1, 2, 3, 4], arr2 = [2, 4, 6, 8];
const intrsct = [];

for(let i = 0 ; i< arr1.length ; i++)
{
    let num = arr1[i];
    for(let j = 0 ; j< arr2.length ; j++)
    {
       if(arr2[j]===num)
       {
           intrsct.push(arr2[j]);
       }
    }
}

console.log(intrsct);