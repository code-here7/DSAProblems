const arr = [1, 2, 2, 3, 3, 3, 4];
let arr2 = [arr[0]];
let head = 0;
freq = {};

for(i=1;i<arr.length;i++)
{
    if(arr2[head]!=arr[i])
    {
        arr2.push(arr[i]);
        head = head + 1;
    }
}
// console.log(arr2);


for(i=0;i<arr2.length;i++)
{
    let ele = arr2[i];count = 0;
    for(j=0;j<arr.length;j++)
    {
        if(ele==arr[j])
        {
            count++;
        }
    }
 
    freq[ele] = count;
}

console.log(freq);