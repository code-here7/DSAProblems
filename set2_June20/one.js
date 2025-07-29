const str = 'Hello World Python';
let words = [], word = "";

for(let i = 0; i< str.length; i++)
{
    // console.log(str[i]);
    if(str[i]!= " ")
    {
        word = word + str[i];
    }
}

console.log(word);

