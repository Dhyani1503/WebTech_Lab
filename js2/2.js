function do_calc()
{

    let x,y,res,opr;
    x=prompt("Type first:")
    y=prompt("Type second number");
    opr=prompt("Type an Operator");

    
    if(oper=="+"){
        res=Number(x)+Number(y);
      }
      else if(oper=!null){
        res="Error"
      }
      else if(x=!null){
        res="Error"
      }
      else if(y=!null){
        res="Error"
      }
      else if(oper=="/"){
        res=Number(x)/Number(y);
      }
      else if(oper=="*"){
        res=Number(x)*Number(y);
      }
      else if(oper=="-"){
        res=Number(x)-Number(y);
      }
      
      return res;
        }
    document.getElementById("res").innerHTML =do_calc();
    
}
