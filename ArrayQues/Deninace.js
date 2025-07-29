const n = 89;
let str = n.toString(), sum = 0;

for(let i = 0 ; i < str.length ; i++)
{ 
    j = i+1;
    // console.log(str[i]);
    let x = Math.pow(str[i], j);
    // console.log(x);
    sum = sum + x;
}

 console.log(sum);
 
 if(n===sum)
 {
     console.log("The number is  desanice no.");
 }
 else
 {
     console.log("The number is not desanice no.");
 }
 

// const n = 598;
// let str = n.toString(), sum = 0 ;
// // console.log(str.length);

// for(let i = 0 ; i < str.length ; i++)
// { 
//     let x = 1;
//     for(let j = 0  ; j < i+1 ; j++)
//     {
//         // console.log(str[i]);
//       x = x * parseInt(str[i]);
//     }
//     //  console.log(x);
//      sum = sum + x;
// }

//  console.log(sum);
 
//  if(n===sum)
//  {
//      console.log("The number is  Disarium no.");
//  }
//  else
//  {
//      console.log("The number is not Disarium no.");
//  }
 
 