// Agrupando IDs relacionados
const ids = {
  sunny: ['sunny1', 'sunny2'],
  android: ['android1', 'android2'],
  login: ['login1', 'login2'],
  interactive: ['interactive1', 'interactive2'],
  desk: ['desk1', 'desk2', 'desk3', 'desk4'],
  mob: ['mob1', 'mob2', 'mob3', 'mob4']
};

// Função para manipular display
function toggleDisplay(desk, mob, section) {
  document.getElementById(desk).addEventListener('click', () => {
    document.getElementById(ids[section][0]).style.display = 'flex';
    document.getElementById(ids[section][1]).style.display = 'none';
  });

  document.getElementById(mob).addEventListener('click', () => {
    document.getElementById(ids[section][0]).style.display = 'none';
    document.getElementById(ids[section][1]).style.display = 'flex';
  });
}

// Aplicando a função
toggleDisplay(ids.desk[0], ids.mob[0], 'sunny');
toggleDisplay(ids.desk[1], ids.mob[1], 'android');
toggleDisplay(ids.desk[2], ids.mob[2], 'login');
toggleDisplay(ids.desk[3], ids.mob[3], 'interactive');

// Observador de interseção
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Navbar e botão 'Up'
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.getElementById('navbar').style.backgroundColor = scrollY > 0 ? '#8E2800' : '';
  document.getElementById('Up').style.display = scrollY > 50 ? 'flex' : 'none';
});

// Redimensionamento da janela
function resize() {
  const burgerIconMenu = document.getElementById('burgerIcon');
  const burger = document.getElementById('burger');
  const navDesktop = document.getElementById('navDesktop');
  const displayState = window.innerWidth >= 800 ? ['none', 'flex'] : ['flex', 'none'];
  
  burgerIconMenu.style.display = displayState[0];
  burger.style.display = displayState[0];
  navDesktop.style.display = displayState[1];
}

window.onresize = resize;
resize();

// Icone do Burger
document.getElementById('burgerIcon').addEventListener('click', () => {
  const burgerList = document.getElementById('burgerList');
  const openIcon = document.getElementById('openIcon');
  const closeIcon = document.getElementById('closeIcon');

  burgerList.classList.toggle('show');
  const isShown = burgerList.classList.contains('show');
  openIcon.style.display = isShown ? 'none' : 'flex';
  closeIcon.style.display = isShown ? 'flex' : 'none';
});
