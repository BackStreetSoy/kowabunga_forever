$(document).ready(function(){


    $(".murdered_family_link").mouseover(function(event){

        $("img").css({"-webkit-filter": "grayscale(100%)",
            "z-index": "-9999999999999999999999999px",
            "-webkit-transition": "all 0.5s ease-in-out",
            "-moz-transition": "all 0.5s ease-in-out",
            "-o-transition": "all 0.5s ease-in-out",
            "-ms-transition": "all 0.5s ease-in-out",
            "transition": "all 0.5s ease-in-out"})
    })


    $(".murdered_family_link").mouseout(function(event){

        $("img").css({"webkit-filter": "grayscale(0%)",
    "z-index": "-9999999999999999999999999px",
    "-webkit-transition": "all 0.9s ease-in-out",
    "-moz-transition": "all 0.9s ease-in-out",
    "-o-transition": "all 0.9s ease-in-out",
    "-ms-transition": "all 0.9s ease-in-out",
    "transition": "all 0.9s ease-in-out"})



    });

});