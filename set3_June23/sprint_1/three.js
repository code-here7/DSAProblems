const str = "education";
let str2 = "";

for(let i = 0 ; i<str.length; i++)
{
    if(str[i] != 'a')
    {
        console.log(str[i]);
        str2 = str2 + str2[i];
        
    }
    else
    { 
        console.log(str[i]);
        str2 = str2 + "*";
    }
    
}

console.log(str2);