let a = [0,1,2,3,4], sum = 0; 


// for( let i = 0 ; i < a.length; i++)
// {
//     a[i] = a[i] * a[i];
//     // console.log(a[i]);
//     sum = sum + a[i];
// }

// console.log(a);
// console.log(sum);

a = a.map((x) => x*x);
console.log(a);
a = a.reduce((val,acc) =>val + acc,0)
console.log(a);