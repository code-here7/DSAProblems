const arr = [1, 3, 5], arr2 = [2, 4];
let sort = []
for(let i = 0 ; i < arr.length; i++)
{    
 sort.push(arr[i]);
}
for(let i = 0 ; i < arr2.length; i++)
{    
 sort.push(arr2[i]);
}
// console.log(sort);

for(let i = 0 ; i < sort.length; i++)
{ 
let temp;
 for(let j = i+1 ; j < sort.length; j++)
{    
 if(sort[i]>sort[j])
 {
     temp = sort[i];
     sort[i] = sort[j];
     sort[j] = temp;
 }
}
}
console.log(sort);