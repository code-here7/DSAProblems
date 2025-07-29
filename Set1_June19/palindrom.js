const str = "madam";
let s = 0 , e = str.length -1, flag = true;
while(s<e)
{
    if(str[s] == str[e])
    {
        s++;
        e--;
    }
    else
    {
     flag = false;
     break;
    }
}

if(flag==true)
{
    console.log("String is palindrome");
}
else{
    console.log("String is not palindrome");
}