
$(document).ready(function(){
    console.log("podcast alert")

    $("a#podcast_link").click(function(e) {
        console.log("dong")
        e.preventDefault();
        e.stopPropagation();

        var $link = $(this)

        $.ajax({
            url: $link.attr("href"),
            method: $link.attr("method"),
            success: function(response){
                console.log("ding")
                console.log(response)
                 $(".podcast_blurb").hide();
                 $("#godzilla_pic").hide();
                $("#podcast_title p").html(response.title);
                $("#podcast_content p").html(response.data_content);
                // $("#image").attr({"id": "writing_image", "src": response.image});

                // if($("#writing_image").length){
                //     console.log("ding")
                //     console.log("diiing")
                //     $("#writing_image").attr("src", response.image)
                // }
            }
        });

    });


});