const str1 = 'abc', str2 = 'abc';
let flag = true;

for(let i = 0 ; i<str1.length -1 ; i++)
{
 if(str1[i]==str2[i])
 {
     flag = true;
 }
 else 
 {
     flag = false;
     break;
 }
}

if(flag)
{
    console.log(true);
}
else
{
    console.log(false);
}

