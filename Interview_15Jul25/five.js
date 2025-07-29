const arr = [12, 45, 1, 90, 45, 67];
let fmax = arr[0], smax = arr[1], temp;

if(fmax<smax)
{
    temp = fmax;
    fmax = smax;
    smax = temp;
}
// console.log(fmax+" "+smax);
for(let i = 2 ; i< arr.length ; i++ )
{
    if(arr[i]>fmax)
    {
    temp = arr[i];
    arr[i]= fmax;
    fmax = temp;
    }
}
console.log(smax);