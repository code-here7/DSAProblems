const str = "madam";
let s = 0, l = str.length - 1, flag = true;

for(let i = 0 ; i< str.length; i++)
{
    if(str[s]==str[l])
    {
        s++;
        l--;
    }
    else
    {
        flag = false;
    }
}

if(flag)
{
    console.log("Palindrom");
}