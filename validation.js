function validation() {
    var text = document.getElementById('text');
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    console.log(email);
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
    } else {
        text.innerHTML = 'Please enter a valid email address';
        text.style.color = '#ff0000'
        form.classList.remove('valid');
        form.classList.add('invalid');
    }

    if(email == '') {
        text.innerHTML = '';
        form.classList.remove('valid');
        form.classList.remove('invalid');
    }
}