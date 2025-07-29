const arr = [2, 3, 10, 6, 4, 8, 1] ;
let maxDiff = 0;
for(let i = 0 ; i< arr.length ; i++)
{
    let ele = arr[i];
    for(let j = i+1 ; j< arr.length ; j++)
    {   
        let Diff = arr[j] - ele;
        if(maxDiff< Diff)
        {
            maxDiff = Diff
        }
        // console.log(ele+" "+arr[j]+" "+ele+" "+Diff);
    }
}
console.log(maxDiff);