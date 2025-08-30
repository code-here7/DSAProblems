let str = "";

for(let i=1 ; i<=5 ; i++)
{
    for(let j=5 ; j>=1 ; j--)
    {
        if(j>i)
        {
            str = str + " ";
        }
        else
        {
            str = str + "*";
        }
    }
    console.log(str);
    str = "";
}