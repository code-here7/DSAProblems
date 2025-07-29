const str = "abcabcbb";
let nwstr = "", arr = [];

for(let i=0;i<str.length;i++)
{    
    let head = i;
    for(let j=head;j<str.length;j++)
    {
    nwstr = nwstr + str[j];
    arr.push(nwstr);
    }
    nwstr = "";
    
}
console.log(arr);