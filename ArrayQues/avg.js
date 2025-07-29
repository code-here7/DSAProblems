const arr = [10, 20, 30, 40, 50];
let avg, count = 0 ,sum = 0;
for (let i = 0;i < arr.length ; i++)
{   
    sum = sum + arr[i];
    count++;
}

avg = (sum/count)
console.log(sum);
console.log(count);
console.log(avg);