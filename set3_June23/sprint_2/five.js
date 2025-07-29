const arr = [-1, 0, 5, -3, 2, 0];
let a = 0, b = 0 , c = 0;
for(let i = 0 ; i < arr.length ; i++ )
{
    if(arr[i]< 0)
    {
        a = a + 1;
    }
    else if(arr[i]> 0)
    {
        b = b + 1;
    }
    else
    {
        c = c + 1;
    }
}

console.log(a);
console.log(b);
console.log(c);