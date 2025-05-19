window.onload = () => {
    var traditionalSwiper = new Swiper('.traditional-festival-container', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 25,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
            768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 15 },
            480: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 }
        }
    });

    AOS.init({ duration: 1000, once: true });

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
};