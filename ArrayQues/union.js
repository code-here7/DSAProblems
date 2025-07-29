const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const union = [];

for(let i = 0 ; i< arr1.length ; i++)
{
    union.push(arr1[i]);
}
for(let i = 0 ; i< arr2.length ; i++)
{
    union.push(arr2[i]);
}
console.log(union);