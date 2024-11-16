let slideAtual = 0;

function moverCarrossel(direcao) {
    const carrossel = document.querySelector(".carrossel-items");
    const totalSlides = document.querySelectorAll(".carrossel-item").length;

    slideAtual += direcao;

    // Loop infinito
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    } else if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }

    const deslocamento = -slideAtual * 100; // 100% de largura para cada slide
    carrossel.style.transform = `translateX(${deslocamento}%)`;
}
