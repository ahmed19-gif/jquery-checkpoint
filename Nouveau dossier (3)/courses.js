function bold(){
    var bol=document.getElementById("text");

    if (bol.style.fontWeight!="bold")
    {
        bol.style.fontWeight="bold";
    }
    else{ bol.style.fontWeight="normal";
}
    }
    function italique(){
        var ital=document.getElementById("text");
    
        if (ital.style.fontStyle!="italic")
        {
            ital.style.fontStyle="italic";
        }
        else{ ital.style.fontStyle="normal";
    }
        }
        function underlined(){
            var undr=document.getElementById("text");
        
            if (undr.style.textDecoration=="underline")
            {
                undr.style.textDecoration="none";
            }
            else{ undr.style.textDecoration="underline";
        }
            }
           function pixel(){
               document.getElementById("text").style.fontSize=document.getElementById("polic").value;
           }
           function azerty(){
               document.getElementById("text").style.fontFamily=document.getElementById("qsdf").value;
           }
           $(".box1 button").css("opacity","0");
  
           $(".box1").mouseenter(function(){
           $(this).css("opacity","0.5");
           $(this).find("button").css("opacity","1");
           }
           );
           $(".box1").mouseleave(function(){
            $(".box1").css("opacity","100");
            $(this).find("button").css("opacity","0");
           });
        
           