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

function toggleMenu() {
    const buttonToggle = document.querySelector('#menu-toggle')
    const menuElement = document.querySelector('#main-menu')
    const aToggle = document.querySelector('.a-toggle')
    const container = document.querySelector('.container')
    
    if(buttonToggle.classList.contains('active')) {
        menuElement.classList.remove('toggled')
        buttonToggle.classList.remove('active')
        aToggle.classList.remove('visible')
        container.classList.remove('active')
    } else {
        menuElement.classList.add('toggled')
        buttonToggle.classList.add('active')
        aToggle.classList.add('visible')
        container.classList.add('active')
    }
}

// function to close menu on click outside
// document.addEventListener('click', (event) => {
//     const flyoutElement = document.querySelector('.menu');
//     let clickedElement = event.target;
//     var menuToggle = document.querySelector('.button');
//     do {
//         if(clickedElement == menuToggle) {
//             return;
//         }
//         if(clickedElement == flyoutElement) {
//             return;
//         } 
//         clickedElement = clickedElement.parentNode;
//     } while(clickedElement);
//     if(flyoutElement.classList.contains('toggled')) {
//         toggleMenu();
//     }
// });