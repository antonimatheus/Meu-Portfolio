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
    scrollY > 0 ? "#271F14" : "";
  document.getElementById("Up").style.display = scrollY > 50 ? "flex" : "none";
});

// Redimensionamento da janela
function resize() {
  const burgerIconMenu = document.getElementById("burgerIcon");
  const burger = document.getElementById("burger");
  const navDesktop = document.getElementById("navDesktop");
  const displayState =
    window.innerWidth >= 800 ? ["none", "flex"] : ["flex", "none"];

  burgerIconMenu.style.display = displayState[0];
  burger.style.display = displayState[0];
  navDesktop.style.display = displayState[1];
}

window.onresize = resize;
resize();

// Icone do Burger
document.getElementById("burgerIcon").addEventListener("click", () => {
  const burgerList = document.getElementById("burgerList");
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");

  burgerList.classList.toggle("show");
  const isShown = burgerList.classList.contains("show");
  openIcon.style.display = isShown ? "none" : "flex";
  closeIcon.style.display = isShown ? "flex" : "none";
});

// Seleciona todas as imagens e a div de sobreposição
const images = document.querySelectorAll("#designImages img");
const overlay = document.getElementById("overlay");
const overlayImg = overlay.querySelector("img");

// Função para exibir a imagem em tela
images.forEach((image) => {
  image.addEventListener("click", () => {
    overlayImg.src = image.src; // Define a imagem clicada como fonte
    overlay.style.display = "flex"; // Exibe a sobreposição
  });
});

// Fechar a imagem ao clicar fora dela ou apertar ESC
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
  }
});
