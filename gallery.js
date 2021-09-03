function clickedImage(card) {
    buttonMoveRight = document.getElementById('button-right');
    buttonMoveLeft = document.getElementById('button-left');

    buttonMoveLeft.classList.toggle('hidden');
    buttonMoveRight.classList.toggle('hidden');

    document.body.classList.toggle('gallery-active');

    card.classList.toggle('preview');

    console.log('image clicked');
}

$(document).keyup(function(e) {
    if (e.key === "Escape" && document.body.classList.contains('gallery-active')) { 
        buttonMoveLeft.classList.toggle('hidden');
        buttonMoveRight.classList.toggle('hidden');
        document.body.classList.remove('gallery-active');
        var cards = document.querySelectorAll('.card'); 
        cards.forEach(card => {
            if(card.classList.contains('preview')) {
                card.classList.remove('preview');
                return;
            }
        });
   }
});

function sameParent(button, card) {
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