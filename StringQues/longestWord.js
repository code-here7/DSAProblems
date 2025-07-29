const str = "I am learning programming";
words =[] , word = "" ,c = 0,lword = "", maxC = 0;

for(i = 0 ; i<str.length ; i++)
{
    if(str[i]!=" ")
    {
        word = word + str[i];
        c++;
    }
    else
    {
        words.push(word);
           if(maxC < c)
        {
           lword = word;
           maxC = c; 
        }
        word = "";
        c = 0;
    }
    if(i == str.length-1)
    {
        words.push(word);
           if(maxC < c)
        {
           lword = word;
           maxC = c; 
        }
        word = "";
        c = 0;
    }
}
console.log(lword);
