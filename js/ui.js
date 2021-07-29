$(document).ready(function(){
    $("header").addClass("start");
    $("header .menu_wrap .menu").click(function(){
        $("header").addClass("clicked");
        var page = $(this).attr("data-page");
        $("#content"+page).addClass("clicked");
        $("aside").addClass("clicked");
    });
    $("aside .home_button").click(function(){
        $("header").removeClass("clicked");
        $(".content").removeClass("clicked");
        $("aside").removeClass("clicked");
        $(".content_page").removeClass("clicked");
    });
    $("header .menu_wrap nav ul li.menu").hover(function(){
        $("header .menu_wrap nav ul li.menu").css("transition-delay","0s");
    });
    $("aside nav ul li.sidemenu a").click(function(){
        $(".content_page").removeClass("clicked");
        var page = $(this).attr("data-page");
        $(".content").removeClass("clicked");
        $("#content"+page).addClass("clicked");
    });
    $(".content .content_list .page_link").click(function(){
        $(".content_page").addClass("clicked");
        var liurl = $(this).data("url");
        $(".content_page").html();
        $.ajax({
            type: 'get',
            url: liurl,
            dataType: 'html',
            success: function(data){
                $(".content_page").html(data);
            }
        });
    });
});