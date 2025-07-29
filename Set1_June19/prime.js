let prime = [];

for(let i = 2; i<=100; i++)
{
let n = i,flag = true;
for(let j = 2; j<n; j++)
{ 
    if(n%j == 0) 
    {
        flag = false;
    }
}

if(flag)
{
// console.log("Prime number");
prime.push(n);
}
}
 

console.log(prime);
