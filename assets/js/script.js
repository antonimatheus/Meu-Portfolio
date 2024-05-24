const sunny1 = document.getElementById("sunny1");
const sunny2 = document.getElementById("sunny2");

const android1 = document.getElementById("android1");
const android2 = document.getElementById("android2");

const interactive1 = document.getElementById("interactive1");
const interactive2 = document.getElementById("interactive2");

const login1= document.getElementById("login1");
const login2= document.getElementById("login2");

const desk1 = document.getElementById("desk1");
const mob1 = document.getElementById("mob1");

const desk2 = document.getElementById("desk2");
const mob2 = document.getElementById("mob2");

const desk3 = document.getElementById("desk3");
const mob3 = document.getElementById("mob3");

const desk4 = document.getElementById("desk4");
const mob4 = document.getElementById("mob4")

desk1.addEventListener("click", function() {
  sunny1.style.display = 'flex'
  sunny2.style.display = 'none'
})  

mob1.addEventListener("click", function() {
  sunny1.style.display = 'none'
  sunny2.style.display = 'flex'
});

desk2.addEventListener("click", function() {
  android1.style.display = 'flex'
  android2.style.display = 'none'
});

mob2.addEventListener("click", function() {
  android1.style.display = 'none'
  android2.style.display = 'flex'
});

desk3.addEventListener("click", function() {
  login1.style.display = 'flex'
  login2.style.display = 'none'
});

mob3.addEventListener("click", function() {
  login1.style.display = 'none'
  login2.style.display = 'flex'
});

desk4.addEventListener("click", function() {
  interactive1.style.display = 'flex' 
  interactive2.style.display = 'none' 
});

mob4.addEventListener("click", function() {
  interactive1.style.display = 'none' 
  interactive2.style.display = 'flex' 
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    navbar.style.backgroundColor = '#8E2800';
  } else {
    navbar.style.backgroundColor = ''; 
  }
});

const Up = document.getElementById('Up');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    Up.style.display = 'flex';
  } else {
    Up.style.display = 'none'; 
  }
});


let burger = document.getElementById("burger")
let navDesktop = document.getElementById("navDesktop")

function resize() {
  var burger = document.getElementById('burger');
  if (window.innerWidth >= 800) {
    burger.style.display = 'none';
    navDesktop.style.display = 'flex';
  } else {
    burger.style.display = 'flex';
    navDesktop.style.display = 'none';
  }
}

// Adicionar ouvinte de evento para o redimensionamento da janela
window.onresize = resize;

// Chamar a função resize para definir o estado inicial
resize();


let burgerIcon = document.getElementById("burgerIcon");
        let burgerList = document.getElementById("burgerList");
        let openIcon = document.getElementById("openIcon");
        let closeIcon = document.getElementById("closeIcon");

        function burgerIconClick() {
            burgerList.classList.toggle("show");
            if (burgerList.classList.contains("show")) {
                openIcon.style.display = 'none';
                closeIcon.style.display = 'flex';
            } else {
                openIcon.style.display = 'flex';
                closeIcon.style.display = 'none';
            }
        
}

