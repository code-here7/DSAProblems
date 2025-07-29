const arr = [1, 2, 2, 3, 4, 4, 5];
let un = [], occ = [];
for(let i = 0 ; i < arr.length ; i++ )
{    
    let s = arr[i], c = 1; flag = true;
    for(let j = i+1 ; j < arr.length ; j++ )
    {
        if(s == arr[j])
        {
            c = c+1;
        }
    }
    // console.log(c);
    for(let k = 0 ; k < occ.length ; k++)
    {
        if(s == arr[k])
        {
            flag = false;
            break;
        }
    }
    
    if(flag == true)
    {
        occ.push(s);
        un.push(s+":"+c);
    }
    else
    {
        flag = true ;
    }
    
}
console.log(un)
console.log(occ)