$(window).on('scroll', () => {
    if(document.querySelector('.menu').classList.contains('toggled')) toggleMenu();
});

function toggleMenu() {
    var menuToggle = document.querySelector('.menu');
    var container = document.querySelector('.container');
    var button  = document.querySelector('.button');
    var nav = document.querySelector('.main-header');
    var toggle = document.querySelector('.toggle');

    if($('.image-cards').length > 0) { // check if .image-cards exists in the doument
        if(scene.state() != 'DURING') {
            container.classList.toggle('active');
            nav.classList.toggle('active');
        }
        if(scene.state() == 'DURING') {
            toggle.classList.toggle('active');
        }
    } else {
        container.classList.toggle('active');
        toggle.classList.toggle('active');
    }

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

// animate portraits slider on scroll  

var tl = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();
var scrollMagicTo = $('#image-cards').outerWidth();
console.log(scrollMagicTo);
if(scrollMagicTo < 1000) {
    scrollMagicTo = scrollMagicTo*3 + $(window).outerWidth();
}

console.log(scrollMagicTo);

tl.from("#image-cards", 5, {x:0});
// tl.to("#image-cards", 50, {x:-($('#image-cards').outerWidth())});  // <--- this kinda works
tl.to("#image-cards", 50, {x:-((scrollMagicTo))});

const scene = new ScrollMagic.Scene({
    triggerElement: "#triggerElement",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".image-cards")
    .setTween(tl)
        .addTo(controller);
        

function updatePercentage() {
    tl.progress();
}