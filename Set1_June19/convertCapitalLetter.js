const str = "A3B3C4";
let nwstr = "";
for(let i=0 ; i< str.length ; i++)
{
    // console.log(parseInt(str[i]));
    if(isNaN(parseInt(str[i])))
    {
        nwstr = nwstr + str[i];
    }
    else
    {
        let c = parseInt(str[i])-1;
        while(c>0)
        {
             nwstr = nwstr + str[i-1];
             c--;
        }
    }
}

console.log(nwstr);