const imagens = document.querySelectorAll(".carrossel img");
const btnPrev = document.querySelector(".btn-carrossel-prev");
const btnNext = document.querySelector(".btn-carrossel-next");

let indiceAtual = 0;

function mostrarImagem(indice) {
  imagens.forEach((img) => img.classList.remove("ativa"));
  imagens[indice].classList.add("ativa");
}

mostrarImagem(indiceAtual);

btnNext.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
});

btnPrev.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indiceAtual);
});