//var element=document.getElementById

$(document).ready(
    function() {
        $("button.main-nav").click(function() {
            $("#show").css('display','none');
            $(".mobile-nav").fadeIn(50);
            $("#hide").show();
            _grid.style.height = (window.innerHeight - 200) + "px";
            _grid.style.width = (window.innerWidth - 400) + "px";
  
        });
        $("button.Close").click(function() {
            $("#hide").css('display','none');
            $(".mobile-nav").fadeOut(50);
            $("#show").show();
            _grid.style.height = (window.innerHeight - 200) + "px";
            _grid.style.width = (window.innerWidth - 100) + "px";
        });
    });


//    function sortMenuList(){
//         var cl = document.getElementById('menulist');
//         var clTexts = new Array();

//         for(i = 2; i < cl.length; i++)
//         {
//             clTexts[i-2] =
//                 cl.options[i].text.toUpperCase() + "," +
//                 cl.options[i].text + "," +
//                 cl.options[i].value;
//         }

//         clTexts.sort();

//         for(i = 2; i < cl.length; i++)
//         {
//             var parts = clTexts[i-2].split(',');
            
//             cl.options[i].text = parts[1];
//             cl.options[i].value = parts[2];
//         }
//    }