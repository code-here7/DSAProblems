const a = 2 , b = 3;

function calc (a,b,op) 
{
    if(op == "+")
    {
        return a+b;
    }
    else if(op == "-")
    {
        if(a>b) {return a-b;}
        else {return b-a;}
    }
    else if(op == "*")
    {
        return a*b;
    }
    else (op == "/")
    {
          if(a>b) {return a/b;}
        else {return b/a;}
    }
}

let res = calc(a,b,"/");
// let res = calc(a,b,"+");
// let res = calc(a,b,"-");
// let res = calc(a,b,"*");
console.log(res);