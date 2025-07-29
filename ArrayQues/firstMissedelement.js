const arr = [1,-3,-4, 2 ,0];
let missed=[],count = 1; 

for(let i=0;i<arr.length;i++)
{   
    let temp;
    for(let j=i+1;j<arr.length;j++)
    {
      if(arr[i]>arr[j])
    {
       temp=arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
    }   
    }
    missed.push(i)
}
console.log(arr);
console.log(missed);

for(let i=0;i<arr.length;i++)
{   
    
    if(arr[i]>0)
    {
        if(missed[count]!=arr[i])
        {
            console.log(missed[count]);
            count++;
        }
    }
}
