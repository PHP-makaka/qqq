


 function Complete()
        {

          
          var Elem=document.Sel1.Family.value;
           if (Elem != String(Number(Elem))) {
            alert("Введите число!!!")}
            else{
              $('.qaq').fadeIn(1001);
              var sum= 5*Elem;
          //    alert("Итоог: "+sum+"$");
              document.getElementsByClassName("qaq")[0].innerHTML = "Итог:"+sum+"$"
            }            
            $('.qaq').fadeOut(5000);
           }
           