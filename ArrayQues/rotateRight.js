let arr = [1, 2, 3, 4, 5] , rotate = [], k=3;

for(let j=0;j<k ; j++)
{   
    rotate =[];
    let last = arr[0];
    for(let i=0;i<arr.length ; i++)
{
    if(i==(arr.length-1))
    {   
        rotate[arr.length-1] = last;
    }
    else
    {
        rotate[i] = arr[i+1];
    }
}
arr = rotate;
}
console.log(rotate);

