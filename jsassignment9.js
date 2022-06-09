    let number=null,secondNumber,displayValue=null,sum=0,a=0,s=0,m=0,d=0,r=0;
    function submit(){
        Input=1;
    }
    function input(value){
            if(number==null)
               {
                   number=String(value);
               }
            else
                {   
                    number=number+value;
                }
            if(displayValue==null)
                displayValue=String(value);  
            else
                displayValue=displayValue+value;      
            document.getElementById("expression").innerHTML=displayValue;
    }


    function addition()
    {   
        displayValue=displayValue+" + ";
        a=1;
        if(s==1)
            {subtraction();} 
        s=m=d=0;
        if(r==0)
        {secondNumber=parseInt(number);
        document.getElementById("expression").innerHTML=displayValue;
        console.log(sum,secondNumber);
        sum=parseInt(sum)+secondNumber;
        document.getElementById("result").innerHTML=sum;
        number=null;    
        }
        else
            {   r=0;
                document.getElementById("expression").innerHTML=displayValue;
                number=null;
            }
    }
    function subtraction()
    {   
        displayValue=displayValue+" - ";
 
        a=m=d=0;
        s=1;
        if(r==0)
        {secondNumber=parseInt(number);
        document.getElementById("expression").innerHTML=displayValue;
        console.log("sub",sum,secondNumber);
        if(sum==0)
            sum=secondNumber;
        else    
            sum=parseInt(sum)-secondNumber;
        document.getElementById("result").innerHTML=sum;
        number=null;
        }
        else
            {   r=0;
                document.getElementById("expression").innerHTML=displayValue;
                number=null;
            }
    }
    function multiplication()
    {   
        displayValue=displayValue+" * ";
 
        a=s=d=0;
        m=1;
        if(r==0)
        {secondNumber=parseInt(number);
        document.getElementById("expression").innerHTML=displayValue;
        console.log("sub",sum,secondNumber);
        if(sum==0)
            sum=secondNumber;
        else    
            sum=parseInt(sum)*secondNumber;
        document.getElementById("result").innerHTML=sum;
        number=null;
        }
        else
            {   r=0;
                document.getElementById("expression").innerHTML=displayValue;
                number=null;
            }
    }
    function division()
    {   
        displayValue=displayValue+" / ";
 
        a=s=m=0;
        d=1;
        if(r==0)
        {secondNumber=parseInt(number);
            if(secondNumber!=0)
            {    
                document.getElementById("expression").innerHTML=displayValue;
                console.log("sub",sum,secondNumber);
                if(sum==0)
                    sum=secondNumber;
                else    
                    sum=parseInt(sum)/secondNumber;
                document.getElementById("result").innerHTML=sum;
                number=null;
            }
            else
            {
                document.getElementById("expression").innerHTML="exception";
            }
        }
        else
            {   r=0;
                document.getElementById("expression").innerHTML=displayValue;
                number=null;
            }
    }
    function result()
    {
        if(a==1)
            {addition();}    
        if(s==1)
            {subtraction();}   
        if(m==1)
            {multiplication();} 
        if(d==1)
            {division();}                   
        displayValue=String(sum);
        document.getElementById("expression").innerHTML=displayValue;
        number=sum;
        r=1;
    }

    function clean()
    {
        displayValue=null;
        number=null;
        secondNumber=null;
        sum=null;
        a=s=m=d=r=0;
        document.getElementById("result").innerHTML=sum;
        document.getElementById("expression").innerHTML=displayValue;
        sum=0;
    }