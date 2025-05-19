window.onload = () => {
    var gallerySwiper = new Swiper('.gallery-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 1, spaceBetween: 0 },
            480: { slidesPerView: 1, spaceBetween: 0 }
        }
    });

    AOS.init({ duration: 1000, once: true });

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
};