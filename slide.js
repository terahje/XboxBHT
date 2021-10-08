let slideIndex = 1;

showSlide(slideIndex);

function plusSlide(n) {
    showSlide((slideIndex += n));
}
function currentSlide(n) {
    showSlide((slideIndex = n));
    
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll('#Slide')
    console.log(slides);
    if(n > slides.length){
        slideIndex = 1;
    }
    if (n <1){
        slideIndex = slides.length;
    }

    slides.forEach(function(slide) {
        slide.style.display = "none"
    });

    slides[slideIndex - 1].style.display = "block";
    
}