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

// Mensagem
const sendWhatsAppButton = (penteado, valorAtual, valorNormal) => {
    let date = new Date()
    let currentHour = date.getHours();

    if (currentHour >= 1 && currentHour <= 9) {
        currentHour = '0' + currentHour
    }

    if (currentHour >= 01 && currentHour < 12) {

        if (valorNormal == false) {
            var message = `Olá, bom dia! Quais os horários disponíveis?
Modelo: ${penteado}
Valor: ${valorAtual}`;
        } else {
            var message = `Olá, bom dia! Quais os horários disponíveis?
Modelo: ${penteado}
Valor com acessórios: ${valorAtual}
Valor sem acessórios: ${valorNormal}`;
        }

    } else if(currentHour >= 12 && currentHour < 18) {
        if (valorNormal == false) {
            var message = `Olá, boa tarde! Quais os horários disponíveis?
Modelo: ${penteado}
Valor do catálogo: ${valorAtual}`;
        } else {
            var message = `Olá, boa tarde! Quais os horários disponíveis?
Modelo: ${penteado}
Valor do catálogo: ${valorAtual}
Valor sem acessórios: ${valorNormal}`;
        }

    } else {
        if (valorNormal == false) {
            var message = `Olá, boa noite! Quais os horários disponíveis?
Modelo: ${penteado}
Valor do catálogo: ${valorAtual}`;

        } else {
            var message = `Olá, boa noite! Quais os horários disponíveis?
Modelo: ${penteado}
Valor do catálogo: ${valorAtual}
Valor sem acessórios: ${valorNormal}`;
        }
    }

    var encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5587996430390?text=${encodeURIComponent(message)}`, '_blank', 'width=600,height=800');
}