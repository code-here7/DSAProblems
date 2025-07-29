let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let len = myArray.length;
let temp,i;

while(len>0)
{
    i = Math.floor(Math.random()*len);
    console.log(i);
    len--;
    temp = myArray[i];
    myArray[i] = myArray[len];
    myArray[len] = temp;
}

console.log(myArray);