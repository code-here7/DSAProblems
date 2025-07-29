const str =  "hello world happy";
let word = "", words = [], nwStr = "";

for(let i = 0 ; i< str.length ; i++)
{
        // console.log(str[i].toUpperCase());
        if(str[i]!=" ")
        {  
          if(word == " " || word == "")
          {
            word = word + str[i].toUpperCase();
            console.log(i+" "+word);
          }
          else
          {
           word = word + str[i];
           console.log(i+" "+word);
          }
        }
        else
        {
          words.push(word);
          word = " ";
        }
        if(i == str.length-1 )
        {
          words.push(word);
          word = " ";
        }
}

// console.log(words);

for(let i = 0 ; i< words.length ; i++)
{
  nwStr = nwStr + words[i];
}
console.log(nwStr);
