const arr1 = [1, 2, 3, 4], arr2 = [2, 4, 5, 6];
const diff = [];

for(let i = 0 ; i< arr1.length ; i++)
{
    let num = arr1[i], flag = false;
    for(let j = 0 ; j< arr2.length ; j++)
    {
       if(arr2[j]===num)
       {
          flag = true;
       }
    }
    if(flag===false)
    {
        diff.push(num);
    }
}
for(let i = 0 ; i< arr2.length ; i++)
{
    let num = arr2[i], flag = false;
    for(let j = 0 ; j< arr1.length ; j++)
    {
       if(arr1[j]===num)
       {
          flag = true;
       }
    }
    if(flag===false)
    {
        diff.push(num);
    }
}

console.log(diff);