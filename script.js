// Fundo com corações
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Carrossel de fotos
const carouselInner = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = 4;
  }
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < 4) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function nextSlide() {
  if (currentIndex < 4) {
    // 4 é o índice da última imagem (5 imagens no total)
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Inicia a transição automática
setInterval(nextSlide, 4000);
