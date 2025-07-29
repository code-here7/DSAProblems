const str =  "abmmmccd";
let fchar = "";

for(let i=0; i<= str.length ; i++)
{
    let s = str[i], c = 1;
    for(let j =i+1; j< str.length ; j++)
    {   
        if(s==str[j])
        { 
            c = c+1;
        }
    }
    if(c>1)
    {
        fchar = s;
        break;
    }
}
console.log(fchar);