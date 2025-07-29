const arr = [1, 2, 3, 4, 5], k = 2;
let arr1= arr, rotate= [], m = arr.length-1;


for(let l = 0; l < k; l++)
{
let s = arr1[0];
for(let i = 0; i < arr.length; i++)
{  
    if(i == m)
    {   
    rotate[m] = s;
    }
    else
    {
    rotate[i] = arr1[i+1];
    }
}
arr1 = rotate;
}


console.log(rotate);