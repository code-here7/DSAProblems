const arr = [1, 2, 3, 4, 2, 3, 5];
const duplicate = [];
for(let i = 0; i< arr.length; i++)
{
    let num = arr[i]
    for(let j = i+1; j< arr.length; j++)
    {
        if(num===arr[j])
        {
            
                    duplicate.push(arr[j]);
            
            
        }
    }
}

console.log(duplicate);