const str = '1245';
let flag = true;

for(let i = 0; i< str.length; i++)
{
  
        // console.log(isNaN(parseInt(str[i])));
        if(isNaN(parseInt(str[i])) == false)
      {
          flag = true;
      }
      else
      {
          flag = false;
          break;
      }
}
if(flag)
{
    console.log(true);
}
else
{
    console.log(false);
}

