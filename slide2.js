let slideIndex = 1;

showSlide(slideIndex);

function plusSlide2(n) {
    showSlide((slideIndex += n));
}
function currentSlide2(n) {
    showSlide((slideIndex = n));
    
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll('#Slide2')
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