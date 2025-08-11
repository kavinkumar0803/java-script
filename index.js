while(true){
var a=parseInt((prompt("Enter First Number")));
var b=parseInt((prompt("Enter Second  Number")));
var op=prompt("Enter Operator");
var res;
if (op==='+'){
    res=a+b;
    document.getElementById('output').innerHTML+='output is '+res;
        break;
}
else if(op==="-"){
    res=a-b;
     document.getElementById('output').innerHTML+='output is '+res;
        break;
}
else if(op==="*"){
    res=a*b;
     document.getElementById('output').innerHTML+='output is '+res;
        break;
}
else if(op==="/"){
    res=a/b;
     document.getElementById('output').innerHTML+='output is '+res;
        break;
}
else{
    res='invalid operator';
}
}
