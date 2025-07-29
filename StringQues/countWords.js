const str =  "this is test";
words =[] , word = "" ,c = 0;

for(i = 0 ; i<str.length ; i++)
{
    if(str[i]!=" ")
    {
        word = word + str[i];
    }
    else
    {
        words.push(word);
        word = "";
        c++;
    }
    if(i == str.length-1)
    {
        words.push(word);
        word = "";
        c++;
    }
}
console.log(words);
console.log(c);
