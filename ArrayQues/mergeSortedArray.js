const arr1 = [1, 3, 5], arr2 = [2, 4, 6];
const merge = [];

for(let i = 0 ; i< arr1.length ; i++)
{
    merge.push(arr1[i]);
}
for(let i = 0 ; i< arr2.length ; i++)
{
    merge.push(arr2[i]);
}
console.log(merge);
for(let i = 0 ; i< merge.length ; i++)
{
    let temp;
    // console.log(start);
    //  console.log("---");
    for(let j = i+1 ; j< merge.length ; j++)
{
//   console.log(merge[j]);
if(merge[i]>merge[j])
{
    temp = merge[i];
    merge[i] = merge[j];
    merge[j] = temp;
}
}
//  console.log("  ");
}
console.log(merge);