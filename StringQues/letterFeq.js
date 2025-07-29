const str = "java is a programming language";
let arr = str.split(""),freq=[],occ=[], flag = false;

for(let i = 0 ; i< arr.length; i++)
{
    if(arr[i]!= " ")
    {
    let s = arr[i];
    let c = 1;
    
    for(let j = i+1 ; j< arr.length; j++)
    {   
        if(s==arr[j])
        {
            c++;
        }
    }
    for(let k = 0 ; k<= occ.length; k++)
    {
        if(s==occ[k])
        {
            flag = true;
        }
    }
    if(flag == false)
    {
    freq.push(s+"-"+c);
    occ.push(s); 
    }
    else
    {
        flag = false;
    }
    
    }
}
console.log(freq);