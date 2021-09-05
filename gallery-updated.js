const cards = document.querySelectorAll('.card');

function getFirstImage() {
    return cards[0];
}

function getLastImage() {
    return cards[cards.length - 1];
}

function getCurrentImage() {
    var currentImage;

    cards.forEach(card => {
        if(card.classList.contains('preview')) currentImage = card;
    });

    return currentImage;
}

// returns true when a section is extended ( more images are shown )
// returns false when in section shown should be only three ( 3 ) first images
// as an argument the function takes one card which needs to be checked
function imagesState(cardToCheck) {

    var showLessButtons = document.querySelectorAll('.show-less-button');
    var state;

    showLessButtons.forEach(buttonElement => {
        if(buttonElement.classList.contains('hide')) {
            // most of the images in section ( parent ) should be hidden
            state = false;
        } else {
            // most of the images in section ( parent ) should be shown
            state = true; 
        }
    });

    return state;
}

function getNextImage() {
    for(var i = 0; i < cards.length; i++) if(cards[i] === getCurrentImage()) return cards[++i];
}

function getPreviousImage() {
    for(var i = 0; i < cards.length; i++) if(cards[i] === getCurrentImage()) return cards[--i];
}

// all logic related to buttons controlling gallery slider
function toggleButtons() {
    var buttonMoveLeft = document.getElementById('button-left');
    var buttonMoveRight = document.getElementById('button-right');

    buttonMoveLeft.classList.add('hidden');
    buttonMoveRight.classList.add('hidden');

    if(document.body.classList.contains('gallery-active')) {
        // button move left
        if(getFirstImage() === getCurrentImage()) {
            // if the first image is currently in preview mode
            buttonMoveLeft.classList.add('hidden');
        } else {
            buttonMoveLeft.classList.remove('hidden');
        }

        // button move right 
        if(getLastImage() === getCurrentImage()) {
            // if the last image is currently in preview mode
            buttonMoveRight.classList.add('hidden');
        } else {
            buttonMoveRight.classList.remove('hidden');
        }
    }
}

function clickedImage(image) {
    image.classList.toggle('preview');

    var title = document.getElementById('section-title-banner');
    title.innerHTML = '';
    title.classList.remove('active');

    // hide the images if necessary
    if(!imagesState(image) && document.body.classList.contains('gallery-active')) {
        cards.forEach(card => {
            if(card.classList.contains('shown')) {
                card.classList.remove('shown');
                card.classList.add('hidden');
            }
        });
    }

    document.body.classList.toggle('gallery-active');

    toggleButtons();
}

function showMore(button) {
    var showLessButtons = document.querySelectorAll('.show-less-button');
    var counter = 0;

    // remove hidden class from all the cards in section ( parent ) starting from 3nd one ( 2nd index )
    cards.forEach(card => {
        if(card.parentNode.parentNode === button.parentNode) {
            card.classList.remove('hidden');
            if(counter > 2) card.classList.add('shown');
            counter++;
        }
    });

    button.classList.add('hide');

    // change button from 'show more' to 'show less' only in parent
    showLessButtons.forEach(showLessButton => {
        if(showLessButton.parentNode === button.parentNode) {
            showLessButton.classList.remove('hide');
        }
    });
}

function showLess(button) {
    var showMoreButtons = document.querySelectorAll('.show-more-button');

    // add hidden class to all the cards in section ( parent ) starting from 3nd one ( 2nd index )
    cards.forEach(card => {
        if(card.parentNode.parentNode === button.parentNode && card.classList.contains('shown')) {
            card.classList.remove('shown');
            card.classList.add('hidden');
        }
    });

    button.classList.add('hide');

    // change button from 'show less' to 'show more' only in parent
    showMoreButtons.forEach(showMoreButton => {
        if(showMoreButton.parentNode === button.parentNode) {
            showMoreButton.classList.remove('hide');
        }
    });
}

function nextImage() {
    for(i = 0; i < cards.length; i++) {
        if(cards[i] === getCurrentImage()) {
            getCurrentImage().classList.remove('preview');

            if(!imagesState(cards[i])) {
                // if cards are in hidden state
                if(cards[i+1].classList.contains('hidden')) {
                    cards[i+1].classList.remove('hidden');
                    cards[i+1].classList.add('shown');
                }
            }

            // if section is about to change
            if(cards[i+1].parentNode.parentNode.id != cards[i].parentNode.parentNode.id) {
                // section changed
                // section id ( title ) --> var text
                var text = cards[i+1].parentNode.parentNode.id;
                
                var title = document.getElementById('section-title-banner');

                title.innerHTML = text;
                $('#section-title-banner').addClass('active').delay(2000).queue(function() {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
            } else {
                // section hasn's changed
                var title = document.getElementById('section-title-banner');
                title.classList.remove('active');
                title.innerHTML = '';
            }

            cards[++i].classList.add('preview');
            break;
        }
    }
    toggleButtons();
}

function previousImage() {
    for(i = 0; i < cards.length; i++) {
        if(cards[i] === getCurrentImage()) {
            getCurrentImage().classList.remove('preview');

            if(!imagesState(cards[i])) {
                // if cards are in hidden state
                if(cards[i-1].classList.contains('hidden')) {
                    cards[i-1].classList.remove('hidden');
                    cards[i-1].classList.add('shown');
                }
            }

            // if section is about to change
            if(cards[i-1].parentNode.parentNode.id != cards[i].parentNode.parentNode.id) {
                // section changed
                // section id ( title ) --> var text
                var text = cards[i-1].parentNode.parentNode.id;

                var title = document.getElementById('section-title-banner');

                title.innerHTML = text;
                $('#section-title-banner').addClass('active').delay(2000).queue(function() {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
            } else {
                // section hasn's changed
                var title = document.getElementById('section-title-banner');
                title.classList.remove('active');
                title.innerHTML = '';
            }

            cards[--i].classList.add('preview');
            break;
        }
    }
    toggleButtons();
}