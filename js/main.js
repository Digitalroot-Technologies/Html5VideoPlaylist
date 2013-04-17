$(function() {
    $(".playlist li").on("click", function() {
        var curPlaying = $(".playing");
        ClearPlaying();

        var nextPlaying = $(this);
        nextPlaying.addClass("playing");

        $("#videoarea").attr({
            "src": "vid/" + nextPlaying.attr("movieurl"),
            "autoplay": "autoplay"
        });
        ScrollToTop();
    });

    // Load first video on page.
    var curVideo = $(".playlist li").eq(0);
    curVideo.addClass("playing");
    $("#videoarea").attr({
        "src": "vid/" + curVideo.attr("movieurl")
    });
});

$(function() {
    $("#videoarea").bind('ended', function() {
        var curPlaying = $(".playing");
        var lastVideo = curPlaying.attr("lastvideo");

        if (lastVideo != "true")
        {
            ClearPlaying();

            var nextPlaying = curPlaying.next();
            nextPlaying.addClass("playing");

            var lastVideo = curPlaying.attr("lastvideo");

            $("#videoarea").attr({
                "src": "vid/" + nextPlaying.attr("movieurl"),
                "autoplay": "autoplay"
            });
        }
    });
});

function ClearPlaying()
{
    $(".playing").removeClass("playing");
}

function ScrollToTop()
{
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 200)
}