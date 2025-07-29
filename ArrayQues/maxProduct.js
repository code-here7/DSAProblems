const arr = [1, 10, 2, 4, 9, 3];
let maxp = 1;


for (let i = 1; i < arr.length; i++)
{
  let ele = arr[i];
  for (let j = i+1; j < arr.length; j++)
  {
  let prod  = arr[i]*arr[j];
  if(prod>maxp)
  {
    maxp = prod;
  }
  }
}

console.log(maxp);
