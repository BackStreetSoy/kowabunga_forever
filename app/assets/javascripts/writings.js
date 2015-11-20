$(document).ready(function(){
    console.log("ding")

    
    $("a#writing_link").click(function(e) {
        console.log("dong")
        e.preventDefault();
        e.stopPropagation();

        var $link = $(this)

        $.ajax({
            url: $link.attr("href"),
            method: $link.attr("method"),
            success: function(response){
                $(".welcome_blurb").hide();
                $("#writing_title p").html(response.title);
                $("#writing_content p").html(response.content);
                $("#writing_image").attr("src", response.image);

            }
        });

    });


});
