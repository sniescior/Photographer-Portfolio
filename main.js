$(window).on('scroll', () => {
    if(document.querySelector('.menu').classList.contains('toggled')) toggleMenu();

    if($(window).scrollTop() > 55) {
        menu.classList.add('scrolled');
    } else {
        if(!menu.classList.contains('bg-white')) menu.classList.remove('scrolled');
    }
});

// hide navbar on scroll if necessary
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top > 300) {
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        } else {
            $('.smart-scroll').removeClass('scrolled-up').removeClass('scrolled-down');
        }
    });
}

var container = document.querySelector('.container');
let menu = document.querySelector('.main-header');

// $(window).on('scroll', () => {
//     if($(window).scrollTop() > 55) {
//         menu.classList.add('scrolled');
//     } else {
//         if(!menu.classList.contains('bg-white')) menu.classList.remove('scrolled');
//     }
// });

function toggleMenu() {
    var menuToggle = document.querySelector('.menu');
    var container = document.querySelector('.container');
    var button  = document.querySelector('.button');
    var nav = document.querySelector('.main-header');
    var toggle = document.querySelector('.toggle');
    var aToggle = document.querySelector('.a-toggle');

    aToggle.classList.toggle('visible');
    container.classList.toggle('active');
    nav.classList.toggle('active');

    // toggle menu and move the whole container
    menuToggle.classList.toggle('toggled');

    // change button icon
    if(button.classList.contains('icon-menu')) {
        button.classList.remove('icon-menu');
        button.classList.add('icon-cancel');
    } else {
        button.classList.remove('icon-cancel');
        button.classList.add('icon-menu');
    }
}

// function to close menu on click outside
document.addEventListener('click', (event) => {
    const flyoutElement = document.querySelector('.menu');
    let clickedElement = event.target;
    var menuToggle = document.querySelector('.button');
    do {
        if(clickedElement == menuToggle) {
            return;
        }
        if(clickedElement == flyoutElement) {
            return;
        } 
        clickedElement = clickedElement.parentNode;
    } while(clickedElement);
    if(flyoutElement.classList.contains('toggled')) {
        toggleMenu();
    }
});