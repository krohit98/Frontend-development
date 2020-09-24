const nums=document.getElementsByClassName("number");
const oprs=document.getElementsByClassName("operation");
const input=document.getElementById("display");
for(num of nums)
{num.addEventListener("click",insertNum);}
for(op of oprs)
{op.addEventListener("click",insertOp);}
function insertNum(e){
let number=e.target.innerHTML;
input.value+=number;
}
function insertOp(g){
    let operator=g.target.innerHTML;
    let val=input.value;
    if(operator=='C')
    {
        input.value="";
        return;
    }
    if(operator=='=')
    {
        val=val.replace('x','*');
        input.value=eval(val);
        return;
    }
    if(val=="")
    {input.value=0+operator;}
    else if(val[val.length-1].search(/\+|x|\/|-/)!=-1)
    {alert('Enter a number!');}
    else
    {input.value+=operator;}
}