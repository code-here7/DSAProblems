const n = 5;
for(let i = 1; i <= n ; i++)
{
let str = "";
if(i%2 !== 0)
{
for(let j = 1; j <= i ; j++)
{
str = str + "*";
}
console.log(str);
}
}