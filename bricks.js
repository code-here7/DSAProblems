const maxCol = [3,3,3,3,3,4];
const inp = [];

for(let i=0; i< maxCol.length ; i++)
{
let a = parseInt(prompt("Enter number of Blank brick in "+i+"th Row: "));
    if(a<=maxCol[i])
    {
        inp.push(a);
    }
    else
    {
        console.log("No. can not be greater than "+maxCol[i]+" Enter again: ")
        let a = parseInt(prompt(i+"th row : "));
        inp.push(a);
    }
}
console.log(inp);
const rem = [];

for(let i=0; i< maxCol.length ; i++)
{
    let temp =  maxCol[i] - inp[i];
    rem.push(temp);
}
// console.log(rem);
const totalFilledBricks = rem.reduce((acc,val) => acc+val,0);
console.log(totalFilledBricks);
