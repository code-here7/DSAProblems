const arr = [1 ,[ 2,[ 3, 4]], 4];
let newArr = [];

for (let i = 0 ; i < arr.length ; i++)
{
    if(typeof(arr[i]) == 'number')
    {
        // console.log(arr[i]);
        newArr.push(arr[i]);
    }
    else 
    {
        for(let j = 0 ; j < arr[i].length ; j++)
    {
        // console.log(arr[j]);
        if(typeof(arr[i][j]) == 'number')
    {
        // console.log(arr[i]);
        newArr.push(arr[i][j]);
    }
       else
       {
            // console.log(arr[i][j].slice(0,2));
            for(let k = 0 ; k < arr[i][j].length ; k++)
            {
                 if(typeof(arr[i][j][k]) == 'number')
    {
        // console.log(arr[i]);
        newArr.push(arr[i][j][k]);
    }
            }
       }
    }
    }
}

console.log(newArr);