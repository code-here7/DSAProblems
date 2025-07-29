const str1 = "listen", str2 = "silent";
let flag = true;

for(let i =0; i< str1.length; i++)
{
   if(str1.length != str2.length) 
    {
     flag = false;
     break;
    } 
   for(let j =0; j< str2.length; j++)
{
if(str1[i]==str2[j])
{
// console.log(j);
flag = true;
break;
}
else
{
    flag = false;
}
}
if(!flag)
{
    break;
}
}

if(flag)
{
    console.log("Anagram");
    
}
else
{
    console.log("Not an Anagram");
    
}


