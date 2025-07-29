const arr = [20,10,30, 20, 30, 20], target = 30;
let fIndex = 0;

for(let i = 0; i < arr.length ; i++)
{
if(target == arr[i])
{
fIndex = i;
break;
}
}

console.log("First index of the target is:"+fIndex);