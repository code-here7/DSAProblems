const pattern = "abba", s = "dog cat cat fish";
let strP = pattern.split("");
let strS = s.split(" ");

if(strP.length != strS.length)
{
    console.log(false)
    return;
}

let ma = [],flag = true;
for(let i = 0; i< strP.length ; i++)
{
 let arr = [strP[i],strS[i]]
  ma.push(arr);
}
 let a = strS[0], b = strS[1];
// console.log(a);
for(let i = 0 ; i< ma.length; i++)
{
    if(ma[i][0]=='a')
    {
        if(a==ma[i][1])
        {
        // console.log(ma[i][1]);
        }
        else
        {
            flag = false;
        }
    }
    if(ma[i][0]=='b')
    {
        if(b==ma[i][1])
        {
            // console.log(ma[i][1]);
        }
        else
        {
            flag = false;
        }
    }
}

console.log(flag)