let str = 'The Quick Brown Fox';
str = str.split("");
// console.log(typeof(str));

for(let i = 0 ; i< str.length ; i++)
{
    // console.log(str[i]+""+str[i].toUpperCase())
 if(str[i] === str[i].toUpperCase())
 {
     str[i] =  str[i].toLowerCase();
    //  console.log(str[i].toLowerCase());
 }
 else
 { 
     str[i] = str[i].toUpperCase()
    //  console.log(str[i].toUpperCase());
 }
}
str = str.toString();
str = str.replace(/,/g, '');
console.log(str);
