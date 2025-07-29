const arr1 = [1, 2, 4, 6], arr2 = [2, 4, 5, 6];
let inter = [];

for(let i = 0 ; i< arr1.length ;i++ )
{    
for(let j = 0 ; j< arr2.length ;j++ )
{
    if(arr1[i]==arr2[j])
    {
        inter.push(arr1[i]);
    }
}

}
console.log(inter);