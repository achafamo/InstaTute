window.sr = ScrollReveal();
sr.reveal('.foo'), {
    duration: 200
    , scale: 0.9
};
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggler").click();
        }
    });
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    $('#apply').on('click', function () {        
			console.log("here")
			render js: "window.location = '#{new_user_registration_path}'";
	
        /*$.amaran({
            content: {
                bgcolor: '#06222E'
                , color: '#fff'
                , message: 'Coming Soon!'
            }
            , theme: 'colorful'
        });*/
    });
    $('#apply2').on('click', function () {
        //window.location = "http://instatute.org/security_check/";
			render js: "window.location = '#{new_user_registration_path}'";        
	/*$.amaran({
            content: {
                bgcolor: '#06222E'
                , color: '#fff'
                , message: 'Coming Soon!'
            }
            , theme: 'colorful'
        });*/
    });
    $('#apply3').on('click', function () {
			//window.location = "http://instatute.org/security_check/";
			render js: "window.location = '#{new_user_registration_path}'";        
			/*$.amaran({
            content: {
                bgcolor: '#06222E'
                , color: '#fff'
                , message: 'Coming Soon!'
            }
            , theme: 'colorful'
        });*/
    });
});
