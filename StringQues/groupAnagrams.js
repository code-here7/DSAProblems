const arr = ["eat","tea","tan","ate","nat","bat"];
let grp = {}

for(let k = 0 ; k <arr.length ; k++)
{
  let val = arr[k];
  let tr = arr[k] ;
  let str = tr.split("");

for(let i = 0 ; i <str.length ; i++)
{   
    let temp;
    for(let j = i+1 ; j <str.length ; j++)
    {
       if(str[i]>str[j])
       {
           temp = str[i];
           str[i] = str[j];
           str[j] = temp;
       }
    }
}

let sortVal = str.join("");

if(grp[sortVal])
{
    grp[sortVal].push(val)
}
else
{
    grp[sortVal] = [val];
}
}

console.log(Object.values(grp));


