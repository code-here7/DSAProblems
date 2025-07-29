const arr1 = [1, 2, 3],arr2 = ['a', 'b', 'c'];
let nwArr = [];

for(let i = 0 ; i< arr1.length; i++)
{
    nwArr.push(arr1[i]);
    nwArr.push(arr2[i]);
}

console.log(nwArr);