// Agrupando IDs relacionados
const ids = {
  sunny: ["project1Desk", "project1Mobile"],
  android: ["project2Desk", "project2Mobile"],
  login: ["project3Desk", "project3Mobile"],
  interactive: ["project4Desk", "project4Mobile"],
  desk: ["desk1", "desk2", "desk3", "desk4"],
  mob: ["mob1", "mob2", "mob3", "mob4"],
};

// Função para manipular display
function toggleDisplay(desk, mob, section) {
  document.getElementById(desk).addEventListener("click", () => {
    document.getElementById(ids[section][0]).style.display = "flex";
    document.getElementById(ids[section][1]).style.display = "none";
  });

  document.getElementById(mob).addEventListener("click", () => {
    document.getElementById(ids[section][0]).style.display = "none";
    document.getElementById(ids[section][1]).style.display = "flex";
  });
}

// Aplicando a função
toggleDisplay(ids.desk[0], ids.mob[0], "sunny");
toggleDisplay(ids.desk[1], ids.mob[1], "android");
toggleDisplay(ids.desk[2], ids.mob[2], "login");
toggleDisplay(ids.desk[3], ids.mob[3], "interactive");

// Observador de interseção
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// Navbar e botão 'Up'
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.getElementById("navbar").style.backgroundColor =
    scrollY > 0 ? "#333333" : "";
  document.getElementById("Up").style.display = scrollY > 50 ? "flex" : "";
});

// Seleciona todas as imagens dentro de .main--imgsPortfolio
let imagesportfolio = document.querySelectorAll("#designImages img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

// Função para exibir a imagem em tela cheia
imagesportfolio.forEach((image) => {
  image.addEventListener("click", () => {
    overlayImg.src = image.src; // Define a imagem clicada como fonte da imagem em tela cheia
    overlay.style.display = "flex"; // Exibe a sobreposição
  });
});

// Fechar a imagem ao clicar fora dela
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    // Verifica se o clique foi fora da imagem
    overlay.style.display = "none"; // Fecha o overlay
  }
});

const track = document.querySelector(".carousel-track");

// Duplicar os elementos corretamente com cloneNode
const items = [...track.children];
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

// Função que adiciona os eventos de clique
function addImageClickEvents() {
  const allImages = document.querySelectorAll("#designImages img");

  allImages.forEach((img) => {
    img.addEventListener("click", () => {
      overlay.style.display = "flex";
      overlayImg.src = img.src;
    });
  });
}

// Adiciona os eventos nas imagens originais e duplicadas
addImageClickEvents();
