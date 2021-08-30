function toggleMenu() {

    var menuToggle = document.querySelector('.menu');
    var container = document.querySelector('.container');
    var button  = document.querySelector('.button');
    var nav = document.querySelector('.main-header');
    var toggle = document.querySelector('.toggle');

    if(scene.state() != 'DURING') {
        container.classList.toggle('active');
        nav.classList.toggle('active');
    }

    if(scene.state() == 'DURING') {
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

var x = $('#image-cards').innerWidth() + $(window.innerWidth);

tl.from("#image-cards", 5, {x:100});
tl.to("#image-cards", 50, {x:-($('#image-cards').innerWidth() + $('.container').innerWidth())});

const scene = new ScrollMagic.Scene({
    triggerElement: "#triggerElement",
    triggerHook: "onLeave",
    duration: $('#image-cards').width()
})
    .setPin(".image-cards")
    .setTween(tl)
        .addTo(controller);
        

function updatePercentage() {
    console.log($(window.innerWidth));
    console.log($('#image-cards').width());
    tl.progress();
}