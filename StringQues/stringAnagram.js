const str1 = "silent", str2 = "listen";
let flag = true;

if(str1.length !== str2.length)
{
    flag = false;
}
else
{
for (let i = 0 ; i<str1.length ; i++)
{   
    let temp = false;
    for (let j = 0 ; j<str2.length ; j++)
    {
        if(str1[i]===str2[j])
        {
          temp = true;  
        }
    }
    if(temp == false)
    {
        flag = false;
    }
}
for (let i = 0 ; i<str2.length ; i++)
{   
    let temp = false;
    for (let j = 0 ; j<str1.length ; j++)
    {
        if(str2[i]===str1[j])
        {
          temp = true;  
        }
    }
    if(temp == false)
    {
        flag = false;
    }
}
}

if(flag)
{
    console.log("String is anagram");
}
else
{
    console.log("String is not anagram");
}