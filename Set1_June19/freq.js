const arr =  [1, 2, 2, 3];
let frq = [], occ = [] , flag = false;

for(let i = 0; i< arr.length ; i++)
{
    let s = arr[i], c = 1;
    for(let j = i+1; j< arr.length ; j++)
    {
        if(s==arr[j])
        {
            c++;
        }
    }
       for(let k = 0; k<= occ.length ; k++)
    {
        if(s==occ[k])
            {
              flag = true;
              break;
            }
        
    }
    if(!flag)
    {
    frq.push(s+":"+c);
    occ.push(s);
    }
    else
    {
        flag = false;
    }
}

console.log(frq);