let a = [1,2,3,4], sum = 0, pro = 1; 


for( let i = 0 ; i < a.length; i++)
{
   sum = sum + a[i];
   pro = pro * a[i]
}

console.log(sum);
console.log(pro);

// sum = a.reduce((val,acc) =>val + acc,0)
// console.log(sum);
// pro = a.reduce((val,acc) =>val * acc,1)
// console.log(pro);