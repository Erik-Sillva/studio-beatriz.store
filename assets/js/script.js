// Toggle Menu
let menutoggle = document.querySelector('.toggle');
let containerNav = document.querySelector('.container-nav');

menutoggle.addEventListener("click", () => {
    menutoggle.classList.toggle('active-menu');

    if (window.screen.width <= 1000) {
        if (menutoggle.classList.contains('active-menu')) {
            containerNav.style.left = '0'
        } else {
            containerNav.style.left = '-12em'
        }
    }
});

// Carrousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,

    breakpoints: {
        320: {
            slidesPerView: 1.6,
        },

        768: {
            slidesPerView: 2.2,
        },

        900: {
            slidesPerView: 2.8,
        },

        1200: {
            slidesPerView: 3.5,
        },
    },
});

const openWindow = (penteado, valorAtual, valorNormal) => {
    window.open('agendar-horario.html', 'Agendar Horário', 'width=800,height=900')
    setTimeout(() => {
        info(penteado, valorAtual, valorNormal)
    }, 5000);
}

function info(penteado, valorAtual, valorNormal) {
    if (window.location.pathname === '/agendar-horario.html') {
        console.log(window.location.href)
        document.querySelector('.penteado').innerHTML = modelo;
        document.querySelector('.valor').innerHTML = valor;
    } else {
        console.log('Erro, URL encontrada: ', window.location.href)
    }
}