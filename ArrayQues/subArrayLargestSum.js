const arr = [-2, -3, 4, -1, -2, 1, 5, -3] ,sub = [], sumAr = [];
let sum = 0;

for(let st = 0; st< arr.length ; st++)
{
   for(let en = st+1; en<= arr.length ; en++) 
   {
       let item = arr.slice(st,en);
         sub.push(item);
   }
}
// console.log(sub);
for(let i = 0; i <sub.length ; i++) 
   {
    //   console.log(sub[i]);
      let s = sub[i].reduce((a,c) => a + c, 0 )
      sumAr.push(s)
      if(sum<s)
      {
          sum = s;
      }
   }
   
 console.log(sumAr);
console.log(sum);