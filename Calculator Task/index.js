

var str="";
function Display(val)
{

    if(val=='C')
    {
        str=""
        document.getElementById('TextBox').value=str;
    }
    else if(val=='X')
    {
        str=str.slice(0,-1);
        document.getElementById('TextBox').value=str;
    }
    else if(val=='=')
    {
        str=eval(str);
        document.getElementById('TextBox').value=str;
    }
    else
    {
     str+=val;
     document.getElementById('TextBox').value=str;
    }
}

