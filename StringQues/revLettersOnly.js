//Two pointer approach

str = "-a-bC-dEf-ghIj-";
let nstr = str.split(""),s = 0, e = nstr.length-1;

while(s<e)
{
   let temp;
   if(nstr[s]=="-")
   {
   s++;
   }
   else if(nstr[e]=="-")
   {
   e--;
   }
   else
   {
   temp = nstr[s];
   nstr[s] = nstr[e];
   nstr[e] = temp;
   s++;
   e--;
   }
}

console.log(nstr.join(""));
