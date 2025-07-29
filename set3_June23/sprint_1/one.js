const str = "placement";
let c = 0;

for(let i = 0 ; i< str.length; i++)
{
   
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'  || str[i] == 'u')
    {
        c = c+1;
    }
    
}

console.log(c);