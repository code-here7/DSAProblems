const arr1 = [1, 2, 3],arr2 = [2, 3, 4];
let com = [] ;
for(let i =0 ; i< arr1.length; i++)
{
    for(let j =0 ; j< arr2.length; j++)
    {
        if(arr1[i]==arr2[j])
        {
            com.push(arr1[i]);
        }
    }
}

console.log(com);