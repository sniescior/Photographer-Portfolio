function clickedImage() {
    console.log('image clicked');
}

function sameParent(button, card) {
    if(button.parentNode.id == card.parentNode.parentNode.id) {
        return true;
    }
    return false;
}

function showMore(button) {

    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if(sameParent(button, card)) {
            card.classList.remove('hidden');
            card.classList.add('shown');
        }
    });
}