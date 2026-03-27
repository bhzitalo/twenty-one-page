const imagens = document.querySelectorAll(".carrossel img");
const btnPrev = document.querySelector(".btn-carrossel-prev");
const btnNext = document.querySelector(".btn-carrossel-next");

let indiceAtual = 0;

// Evita erro se não houver imagens
if (imagens.length > 0) {

  function mostrarImagem(indice) {
    imagens.forEach((img) => img.classList.remove("ativa"));
    imagens[indice].classList.add("ativa");
  }

  mostrarImagem(indiceAtual);

  // Só adiciona evento se o botão existir
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      mostrarImagem(indiceAtual);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem(indiceAtual);
    });
  }
}

// Função de voltar
function voltarPagina() {
  window.history.back();
}