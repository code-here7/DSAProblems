let str = "";

for(let i=1 ; i<=5 ; i++)
// for(let i=5 ; i>0 ; i--)
{
    for(let j=1 ; j<=i ; j++)
    {
    //   console.log(i+" " +j);
    str = str + "*";
    }
    console.log(str);
    str = "";
}