const str =   "my_name_is_joe";
let words = [], word = "", nwstr = "";

for(let i=0; i< str.length ; i++)
{
    if(str[i]!="_")
    {
        word = word + str[i];
    }
    else
    {
        words.push(word);
        word = "";
    }
    if(i==str.length-1)
    {
        words.push(word);
        word = "";
    }
}
// console.log(words);

for(let i=0; i< words.length ; i++)
{
    nwstr = nwstr + words[i] + " ";
}

console.log(nwstr);
