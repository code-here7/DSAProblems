const arr = [3, 5, 1, 7, 9]
let maxP = 1;
for(let i = 0 ; i < arr.length ; i++ )
{
    let o = arr[i];
    for(let j = i+1 ; j < arr.length ; j++ )
    {
        let t = arr[j];
        let p = o * t;
        // console.log(p);
        if(p > maxP )
        {
            maxP = p;
        }
    }
    
}

console.log(maxP);