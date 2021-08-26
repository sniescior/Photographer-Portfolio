function toggleMenu() {

    var menuToggle = document.querySelector('.menu');
    var container = document.querySelector('.container');
    var button  = document.querySelector('.button');

    // toggle menu and move the whole container
    menuToggle.classList.toggle('toggled');
    container.classList.toggle('active');

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
