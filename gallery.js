function clickedImage() {
    // function to do something when user clicks an image
    console.log('image clicked');
}

function sameParent(button, card) {
    // button.parentNode.id
    if(button.parentNode === card.parentNode.parentNode) return true;
    return false;
}

function showMore(button) {

    var cards = document.querySelectorAll('.card');
    var showLessButtons = document.querySelectorAll('.show-less-button');

    let counter = 0;

    cards.forEach(card => {
        if(sameParent(button, card)) {
            card.classList.remove('hidden');
            if(counter > 2) card.classList.add('shown');

            counter++;
        }
    });

    // console.log(button.className);

    button.classList.add('hide');

    showLessButtons.forEach(showLessButton => {
        if(showLessButton.parentNode === button.parentNode) {
            showLessButton.classList.remove('hide');
        }
    });
}

function showLess(button) {

    var cards = document.querySelectorAll('.card');
    var showMoreButtons = document.querySelectorAll('.show-more-button');

    cards.forEach(card => {
        if(sameParent(button, card) && card.classList.contains('shown')) {
            card.classList.remove('shown');
            card.classList.add('hidden');
        }
    });

    button.classList.add('hide');

    showMoreButtons.forEach(showMoreButton => {
        if(showMoreButton.parentNode === button.parentNode) {
            showMoreButton.classList.remove('hide');
        }
    });
}