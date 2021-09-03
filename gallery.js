var cards = document.querySelectorAll('.card');

function activeImage() {
    var counter = 0;
    var activeImageIndex = -1;

    cards.forEach(function(card) {
        if(card.classList.contains('preview')) {
            activeImageIndex = counter; // active image 'index'
        }
        if(activeImageIndex != -1) {
            return;
        }
        counter++;
    })
    return activeImageIndex;
}

function previousImage() {
    var previousImageIndex = activeImage() - 1;
    var buttonMoveLeft = document.getElementById('button-left');
    var buttonMoveRight = document.getElementById('button-right')
    var counter = 0;

    buttonMoveRight.classList.remove('hidden');

    if(previousImageIndex == 0) {
        buttonMoveLeft.classList.add('hidden');
    }

    cards.forEach(card => {
        if(counter == previousImageIndex) {
            card.classList.add('previous');
        }
        counter++;
    });

    cards.forEach(card => {
        if(card.classList.contains('next')) {
            card.classList.remove('next');
        }
        if(card.classList.contains('preview')) {
            card.classList.add('next');
            card.classList.remove('preview');
        }
        if(card.classList.contains('previous')) {
            card.classList.add('preview');
            if(card.classList.contains('hidden')) {
                card.classList.add('shown');
                card.classList.remove('hidden');
            }
            card.classList.remove('previous');
        }
    });
}

function nextImage() {
    var nextImageIndex = activeImage() + 1;
    var buttonMoveLeft = document.getElementById('button-left')
    var buttonMoveRight = document.getElementById('button-right')
    var counter = 0;

    buttonMoveLeft.classList.remove('hidden');

    if(nextImageIndex == cards.length - 1) {
        buttonMoveRight.classList.add('hidden');
    }

    cards.forEach(card => {
        if(counter == nextImageIndex) {
            card.classList.add('next');
        }
        counter++;
    });

    cards.forEach(card => {
        if(card.classList.contains('previous') && !card.classList.contains('preview')) {
            card.classList.remove('previous');
        }
        if(card.classList.contains('preview')) {
            if(card.classList.contains('shown')) {
                card.classList.add('hidden');
                card.classList.remove('shown');
            }
            card.classList.remove('preview');
            card.classList.add('previous');
        }
        if(card.classList.contains('next')) {
            if(card.classList.contains('hidden')) {
                card.classList.remove('hidden');
                card.classList.add('shown');
            }
            card.classList.add('preview');
            card.classList.remove('next');
        }
    });
}

function clickedImage(thisCard) {

    cards.forEach(card => {
        card.classList.remove('next');
        card.classList.remove('previous');
    });

    var showLessButtons = document.querySelectorAll('.show-less-button');

    buttonMoveRight = document.getElementById('button-right');
    buttonMoveLeft = document.getElementById('button-left');

    thisCard.classList.toggle('preview');

    if(activeImage() > 0) {
        buttonMoveLeft.classList.remove('hidden');
    }
    if(activeImage() == -1) {
        buttonMoveLeft.classList.add('hidden');
        buttonMoveRight.classList.add('hidden');
    }
    if(activeImage() < cards.length-1 && activeImage() != -1) {
        buttonMoveRight.classList.remove('hidden');
    }

    showLessButtons.forEach(buttonElement => {
        if(sameParent(buttonElement, thisCard)) {
            if(buttonElement.classList.contains('hide')) {
                // most of the images in parent should be hidden
                cards.forEach(card => {
                    if(card.classList.contains('shown') && card.parentNode === thisCard.parentNode) {
                        card.classList.remove('shown');
                        card.classList.add('hidden');
                    }
                })
            }
        }
    });

    document.body.classList.toggle('gallery-active');
}

$(document).keyup(function(e) {
    if (e.key === "Escape" && document.body.classList.contains('gallery-active')) { 
        buttonMoveLeft.classList.add('hidden');
        buttonMoveRight.classList.add('hidden');
        document.body.classList.remove('gallery-active');
        cards.forEach(card => {
            if(card.classList.contains('preview')) {
                activeImage();
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

    var showLessButtons = document.querySelectorAll('.show-less-button');
    var counter = 0;

    cards.forEach(card => {
        if(sameParent(button, card)) {
            card.classList.remove('hidden');
            if(counter > 2) card.classList.add('shown');
            counter++;
        }
    });

    button.classList.add('hide');

    showLessButtons.forEach(showLessButton => {
        if(showLessButton.parentNode === button.parentNode) {
            showLessButton.classList.remove('hide');
        }
    });
}

function showLess(button) {

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

function hideImages(card) {
    cards.forEach(element => {
        if(card.parentNode === element.parentNode) {
            if(element.classList.contains('shown')) {
                element.classList.remove('shown');
                element.classList.add('hidden');
            }
        }
    });
}