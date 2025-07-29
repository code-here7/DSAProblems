const arr = ["flight", "fliwh", "flower"];

let pre = "" , word1 = arr[0], word2 = arr[1];

for(let k = 1 ; k < arr.length ; k++)
{
    let pre2 = "";
    console.log(word1+" "+word2);
    for(let i = 0 ; i < word1.length ; i++)
{
    if(word1[i] == word2[i])
    {
        // console.log(word1[i]+" "+word2[i]); 
        pre2 = pre2 + word1[i]
    }
    else
    {
        break;
    }
}
// console.log(pre2);
word1 = pre2;
word2 = arr[k+1];
pre = pre2;
}
console.log(pre);


// let pre = "", word1 = arr[0], word2 = arr[1] ;
// for(let i = 0 ; i < word1.length ; i++)
// {
//     if(word1[i] == word2[i])
//     {
//         // console.log(word1[i]+" "+word2[i]); 
//         pre = pre + word1[i]
//     }
//     else
//     {
//         break;
//     }
// }
// //  console.log(pre);
// let pre2 = "", word3 = arr[2];
// for(let i = 0 ; i < pre.length ; i++)
// {
//      if(pre[i] == word3[i])
//     {
//         // console.log(word1[i]+" "+word2[i]); 
//         pre2 = pre2 + word3[i]
//     }
//     else
//     {
//         break;
//     }
// }
//  console.log(pre2);

