const str = "Python3";
let flag = true;

for(let i = 0 ; i<str.length; i++)
{
     console.log(isNaN(parseInt(str[i])));
    if(isNaN(parseInt(str[i])) != true)
    {
        flag = false;
    }
    
}

if(flag)
{
    console.log("String have only chars");
}
else
{
    console.log("String have numbers too");
}