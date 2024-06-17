// For image sliding
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("imges");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1 }
    if(n < 1) {slideIndex = slides.length}
    for(i =0;i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(i = 0 ; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active","")
    }
    slides[slideIndex - 1].style.display="block";
    dots[slideIndex - 1].className += "active";
}

// for validating form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';
    
    if (name === '') {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Name field cannot be empty.';
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    
    if (message === '') {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Message field cannot be empty.';
        return false;
    }
    
    return true;
}