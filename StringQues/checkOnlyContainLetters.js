const str = "Code123";
let arr = str.split("") , flag = true;

for(let i=0; i< arr.length ; i++)
{
    // console.log(parseInt(arr[i]));
    if (!isNaN(arr[i]))
    {
        flag = false;
        break;
    }
    
}
if(flag == true)
{
    console.log("The string do not contain numbers");
}
else
{
    console.log("The string contain numbers");
}