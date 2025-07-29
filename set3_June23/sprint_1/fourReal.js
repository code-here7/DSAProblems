const str = "balloon";
let frq = [] , occ = [];

for(let i = 0 ; i<str.length; i++)
{
    let s = str[i], c= 1, flag = true;
     for(let j = i+1 ; j<str.length; j++)
    {
        if(s==str[j])
        {
        c = c+1;
        }
    }
    for(let k = 0 ; k< occ.length; k++)
    {
        if(s==occ[k])
        {
        flag = false;
        }
    }
    if(flag)
    {
       frq.push(s+":"+c); 
       occ.push(s); 
    }
}
console.log(frq);
