const arr = [1,1,2,2,3,4,4];
let un=[], flag = false;

un.push(arr[0]);

for(let i = 1 ; i< arr.length ; i++)
{
    let ele = arr[i];
    for(let j = 0 ; j< un.length ; j++)
    {
        if(ele == un[j])
        {
            flag = true;
        }
    }
    if(!flag)
    {
        un.push(ele);
    }
    else
    {
        flag = false;
    }
}

console.log(un);
