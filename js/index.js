 // Loading Screen Script
 window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        document.body.style.overflow = 'auto';
    }, 1500); // 3 seconds delay
});

// Initialize Swiper for Festival Slider
var festivalSwiper = new Swiper('.festival-slider', {
    slidesPerView: 2, // Chỉ hiển thị 1 slide tại một thời điểm
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

AOS.init({
    duration: 1000,
    once: true,
});

const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});