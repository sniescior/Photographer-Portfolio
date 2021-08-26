function toggleMenu() {

    var menuToggle = document.querySelector('.menu');
    var header = document.querySelector('.main-header');
    var container = document.querySelector('.container');
    var gallery = document.querySelector('.gallery');
    var button  = document.querySelector('.button');
    var buttonToggle  = document.querySelector('.toggle');

    menuToggle.classList.toggle('toggled');
    container.classList.toggle('active');
    gallery.classList.toggle('active');
    if(!header.classList.contains('scrolled')) {
        header.classList.toggle('toggled');
    } else {
        buttonToggle.classList.toggle('click');
    }

    if(button.classList.contains('icon-menu')) {
        button.classList.remove('icon-menu');
        button.classList.add('icon-cancel');
    } else {
        button.classList.remove('icon-cancel');
        button.classList.add('icon-menu');
    }
}

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

var wrapper = document.querySelector('.wrapper');
var menu = document.querySelector('.menu');

wrapper.addEventListener('scroll', () => {
    let header = document.querySelector('.main-header');

    // started scrolling
    if(wrapper.scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    } 

    // scrolled to the bottom
    // if(wrapper.scrollTop === window.innerHeight) {} 

    if(header.classList.contains('scrolled')) {
        if(menu.classList.contains('toggled')) toggleMenu();
    } else {
        if(menu.classList.contains('toggled')) toggleMenu();
    }
});

