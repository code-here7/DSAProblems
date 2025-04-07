const str = "aaabbbc";
let act = str.split("");
let arr = []
let copy = [];
arr.push(act[0]);

for( i = 1 ; i < act.length ; i++)
{
    if(act[i] == "a")
    {
        copy.push(act[i]);
    }
    if(act[i] == "b")
    {
        arr.push(act[i]);
        let temp = copy.pop();
        arr.push(temp);
    }
    if(act[i] == "c")
    {
        arr.push(act[i]);
    }
}

    console.log(copy);
    console.log(arr.join(''));
