$(document).ready(function () {
    //=========== Show and hide mobile menu
    $("#nav-toggle").click(function () {
        $(".navMenu").addClass("showMenu")
    })

    $("#nav-close").click(function () {
        $(".navMenu").removeClass("showMenu")
    })

    //=========== Remove mobile menu
    $(".navLink").click(function (){
        $(".navMenu").removeClass("showMenu")
    })

    //=========== Navbar scroll hover
    $(document).scroll(function(){
        $scroll = $(this).scrollTop();
        $scroll >= 40 ? $("header").addClass("shadowHeader") : $("header").removeClass("shadowHeader") 
    })

    //=========== Send Email
    const contactForm = $("#contactForm");
    const contactMessage = $("#contactMessage");
    
    const sendEmail = function (e) {
        e.preventDefault();
    
        emailjs.sendForm("service_zigg75r", "template_77f4psa", "#contactForm", "73tJrj5bT1MJZqEOQ")
            .then(function () {
                contactMessage.text("Message sent successfully ✅");
    
                setTimeout(function () {
                    contactMessage.text("");
                }, 5000);
    
                contactForm[0].reset();
            }, function (error) {
                console.error("EmailJS Error:", error);
                contactMessage.text("Message not sent (service error) ❌");
            });
    };
    
    // Attach event listener
    contactForm.submit(sendEmail);

    //===========  Show Scroll Up 
    $(document).scroll(function(){
        $scroll = $(this).scrollTop();
        $scrollBtn = $(".scrollUp");
        $scroll >= 350 ? $scrollBtn.addClass("showScrollUp") : $scrollBtn.removeClass("showScrollUp")
    })

    //=========== Scroll sections active link
    const $sections = $(".section[id]");

    const scrollActive = function () {
        const $scrollDown = $(window).scrollTop();

        $sections.each(function (index, value) {
            const $section = $(value);
            const $sectionHeight = $section.outerHeight();
            const $sectionTop = $section.offset().top - 58;
            const $sectionId = $section.attr("id");
            const $sectionClass = $('.navMenu a[href="#' + $sectionId + '"]');

            if ($scrollDown > $sectionTop && $scrollDown <= $sectionTop + $sectionHeight) {
                $sectionClass.addClass("activeLink");
            } else {
                $sectionClass.removeClass("activeLink");
            }
        });
    };

    $(window).scroll(scrollActive);

    //=========== Dark light theme
    $themeButton = $("#theme-button");
    $darkTheme = "darkTheme";
    $iconTheme = "ri-sun-line";

    $selectedTheme =localStorage.getItem("selected-theme");
    $selectedIcon = localStorage.getItem("selected-icon");

    $getCurrentTheme = () => $('body').hasClass($darkTheme) ? 'dark' : 'light';
    $getCurrenttIcon = () => $('body').hasClass($iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    if($selectedTheme){
        $('body').toggleClass($darkTheme, $selectedTheme === 'dark');
        $themeButton.toggleClass($iconTheme, $selectedIcon === 'ri-moon-line');
    }

    $themeButton.click(function(){
        $('body').toggleClass($darkTheme);
        $themeButton.toggleClass($iconTheme);


        localStorage.setItem("selected-theme", $getCurrentTheme())
        localStorage.setItem("selected-icon", $getCurrenttIcon())
    })

    
    //=============== SCROLL REVEAL ANIMATION 
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay:400,
        reset: true
    })

    sr.reveal(`.homePerfil, .aboutImage, .contactMail`, {origin:'right'})
    sr.reveal(`.homeName, .homeInfo, .aboutContainer .section__title-2 , .aboutInfo, .contactSocial, .contactData`, {origin:'left'})

    
    sr.reveal(`.servicesCard, .projectsCard`, {interval:100})
})