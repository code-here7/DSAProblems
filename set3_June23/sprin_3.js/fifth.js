const arr1 =  [1, 2, 3, 4], arr2 = [3, 4, 1, 2];
let flag = true, rot = [], l = arr1.length-1;

console.log(l);
for(let i = 0 ; i< arr1.length ;i++ )
{    
if(i == l)
{
    rot[l] = arr1[0];
}
else
{
     rot[i] = arr1[i+1];
}
console.log(rot);
if(rot != arr2)
{
    flag = false;
}
}
if(flag)
{
   console.log(true);
}
else
{
 console.log(false);   
}