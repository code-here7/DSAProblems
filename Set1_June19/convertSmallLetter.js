const str = "a1b2c3";
let nwStr = "";

for(let i=0;i<str.length;i++)
{
    if(isNaN(parseInt(str[i])))
    {
        // console.log(str[i]);
        nwStr = nwStr + str[i];
    }
    else
    {
       let c = parseInt(str[i])-1;
       while(c>0)
       {
         nwStr = nwStr + str[i-1];
         c--;
       }
    }
}


console.log(nwStr);