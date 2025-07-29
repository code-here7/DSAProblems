const str1 = "waterbottle", str2 = "erbottlewat";
let str = "",flag = true;

for(let i = str1.length-1 ; i >=0 ; i--)
{
    // console.log(str1[i]);
    str = str + str1[i];
}
// console.log(str);
for(let i = 0 ; i < str.length ; i++)
{   
    if(str[i]!=str2[i])
    {
        console.log(str[i]+" "+str2[i]);
        flag = false;
        break;
    }
}
console.log(flag);    
