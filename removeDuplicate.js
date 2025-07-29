let arr = [1, 1, 2, 2, 4, 5, 4];
let Item;


// let newArr = new Set(arr);
// console.log(newArr);

for (let i = 0 ; i < arr.length ; i++)
{
    Item = arr[i];
    console.log(Item);
  for (let j = i+1 ; j < arr.length ; j++)
  {
       if(Item == arr[j])
       {
          arr.splice(j,1);
          j--;

        //method 2:
        // delete arr[j];

        //tradional method 3:
        // for (let k = j ; k < arr.length ; k++)
        //   {
        //    arr[k] = arr[k+1];
        //   }
        //    arr.length = arr.length - 1 ;
        //    j--;
           
       }
  }
}

console.log(arr);


//Traditional Deletion:
let array = [1, 1, 2, 2, 4, 5, 4];

for (let i = 0 ; i < array.length ; i++)
{
  
  if(i == 3)
  {
     for (let j = i ; j < array.length ; j++)
     {
      array[j] = array[j+1];
      array.length = array.length - 1 ;
     }
     
  }
}

console.log(array);