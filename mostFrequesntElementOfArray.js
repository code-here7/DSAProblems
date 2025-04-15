let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 0, Item ,freq = 0, ele;

while(arr.length > 0)
{
 for(let i=0;i<arr.length;i++)
{   
    Item = arr[0];
    if(arr[i]==Item)
    {
        count = count + 1;
    }
}

if(freq<count)
{
    freq = count;
    ele = Item;
}

count = 0 ;
arr = arr.filter((x) => x!=Item)  
}


console.log(ele+" ("+ freq + " times )");