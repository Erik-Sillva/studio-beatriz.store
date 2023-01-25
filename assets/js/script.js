// // Toggle Menu
// let menutoggle = document.querySelector('.toggle');
// let containerNav = document.querySelector('.container-nav');

// menutoggle.addEventListener("click", () => {
//     menutoggle.classList.toggle('active-menu');

//     if (window.screen.width <= 1000) {
//         if (menutoggle.classList.contains('active-menu')) {
//             containerNav.style.left = '0'
//         } else {
//             containerNav.style.left = '-12em'
//         }
//     }
// });

// // Carrousel
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3.5,
//     spaceBetween: 19,
//     freeMode: true,

//     breakpoints: {
//         320: {
//             slidesPerView: 1.6,
//         },

//         768: {
//             slidesPerView: 2.2,
//         },

//         900: {
//             slidesPerView: 2.8,
//         },

//         1200: {
//             slidesPerView: 3.5,
//         },
//     },
// });

const openWindow = (penteado, valorAtual, valorNormal) => {
    if (window.location.href === 'http://127.0.0.1:5500/index.html') {
        window.location.assign('http://127.0.0.1:5500/agendar-horario.html')
    }
    setTimeout(() => {
        info(penteado, valorAtual, valorNormal)
    }, 5000);
}

function info(a, b, c) {
    if (window.location.href === 'http://127.0.0.1:5500/agendar-horario.html') {
        console.log('Deu certo');
    } else {
        console.log('Deu errado');
    }
}