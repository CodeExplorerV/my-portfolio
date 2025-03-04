$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars"); // Ensure menu icon switches back
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-bars fa-times"); // Toggle menu icon between ☰ and ✖
    });
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
    });

    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });

    document.querySelector(".home-content a").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".menu li a[href='#Practice Projects']").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#MyWork").scrollIntoView({ behavior: "smooth" });
    });
});





