const b1 = document.getElementById("body1")
const b2 = document.getElementById("body2")
const br = document.getElementById("br")
const us = document.getElementById("us")

br.addEventListener("click", function() {
  b1.style.display = 'none'
  b2.style.display = 'block'
})

us.addEventListener("click", function() {
  b1.style.display = 'block'
  b2.style.display = 'none'
})


const imgBlock1 = document.getElementById("imgBlock1");
const imgBlock2 = document.getElementById("imgBlock2");
const imgBlock3 = document.getElementById("imgBlock3");
const imgBlock4 = document.getElementById("imgBlock4");
const imgBlock12 = document.getElementById("imgBlock12");
const imgBlock22 = document.getElementById("imgBlock22");
const imgBlock32 = document.getElementById("imgBlock32");
const imgBlock42 = document.getElementById("imgBlock42");

const desk1 = document.getElementById("desk1");
const mob1 = document.getElementById("mob1");
const desk2 = document.getElementById("desk2");
const mob2 = document.getElementById("mob2");
const desk3 = document.getElementById("desk3");
const mob3 = document.getElementById("mob3");
const desk4 = document.getElementById("desk4");
//const mob4 = document.getElementById("mob4");

const desk12 = document.getElementById("desk12");
const mob12 = document.getElementById("mob12");
const desk22 = document.getElementById("desk22");
const mob22 = document.getElementById("mob22");
const desk32 = document.getElementById("desk32");
const mob32 = document.getElementById("mob32");
const desk42 = document.getElementById("desk42");
//const mob4 = document.getElementById("mob4");

desk1.addEventListener("click", function() {
  imgBlock1.innerHTML = '<img src="assets/images/sunnyside-desktop.png" alt="Desktop Image" />';
})  

mob1.addEventListener("click", function() {
  imgBlock1.innerHTML = '<img src="assets/images/sunnyside-mobile.png" alt="Mobile Image" />';
});

desk2.addEventListener("click", function() {
  imgBlock2.innerHTML = '<img src="assets/images/android-desktop.png" alt="Desktop Image" />';
});

mob2.addEventListener("click", function() {
  imgBlock2.innerHTML = '<img src="assets/images/android-mobile.png" alt="Mobile Image" />';
});

desk3.addEventListener("click", function() {
  imgBlock3.innerHTML = '<img src="assets/images/interactive-component-desktop.png" alt="Desktop Image" />';
});

mob3.addEventListener("click", function() {
  imgBlock3.innerHTML = '<img src="assets/images/interactive-component-mobile.png" alt="Mobile Image" />';
  
});

desk4.addEventListener("click", function() {
  imgBlock4.innerHTML = '<img src="assets/images/login-light-dark-desktop.png" alt="Desktop Image" />';
});

//mob4.addEventListener("click", function() {
//  imgBlock4.innerHTML = '<img src="" alt="Mobile Image" />';
//});



desk12.addEventListener("click", function() {
  imgBlock12.innerHTML = '<img src="assets/images/sunnyside-desktop.png" alt="Desktop Image" />';
})  

mob12.addEventListener("click", function() {
  imgBlock12.innerHTML = '<img src="assets/images/sunnyside-mobile.png" alt="Mobile Image" />';
});

desk22.addEventListener("click", function() {
  imgBlock22.innerHTML = '<img src="assets/images/android-desktop.png" alt="Desktop Image" />';
});

mob22.addEventListener("click", function() {
  imgBlock22.innerHTML = '<img src="assets/images/android-mobile.png" alt="Mobile Image" />';
  
});

desk32.addEventListener("click", function() {
  imgBlock32.innerHTML = '<img src="assets/images/interactive-component-desktop.png" alt="Desktop Image" />';
});

mob32.addEventListener("click", function() {
  imgBlock32.innerHTML = '<img src="assets/images/interactive-component-mobile.png" alt="Mobile Image" />';
  
});

desk42.addEventListener("click", function() {
  imgBlock42.innerHTML = '<img src="assets/images/login-light-dark-desktop.png" alt="Desktop Image" />';
});

//mob42.addEventListener("click", function() {
//  imgBlock42.innerHTML = '<img src="" alt="Mobile Image" />';
//});


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
