const  str = "Debug Shala";
let str1 = "" , str2 = "", newindex , revStr = "";


for(let i=0; i< str.length; i++)
{
// console.log(str.charAt(i));
newindex = i+1;
if(str.charAt(i)==" ")
{
break;
}
str1 = str1 + str[i];
}

// console.log(str1.length);
rev(str1);


for(let i=newindex; i< str.length; i++)
{
// console.log(str.charAt(i));
str2 = str2 + str[i];
}

// console.log(str2.length);
rev(str2);


function rev(charc)
{
    // console.log(charc);
for(let i=charc.length-1 ; i>=0 ; i--)
{
revStr = revStr + charc[i];
}
revStr = revStr + " ";
}

console.log(revStr);