const str = "madam";
let arr = str.split("");
let s = 0, l = arr.length-1, flag = true;

// console.log(s+" "+l);
for(let i = 0 ; i < arr.length ; i++)
{  
    if(arr[s]==arr[l])
    {
       s++;
       l--;
    }
    else
    {
        flag = false;
    }
}

if(flag)
{
   console.log("PAlindrom") ;
}
else
{
    console.log("not PAlindrom") ;
}