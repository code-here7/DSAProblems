const arr = [1, 2, 3, 4, 5];
let ele = 3, pos ;
for (let i = 0;i < arr.length ; i++)
{   
    if(ele===arr[i])
    {
        pos = i ;
        
    }
}
if(pos)
{
    console.log(ele+" found at position :"+pos);
}
 else
    {
        console.log("No such element exist");
    }