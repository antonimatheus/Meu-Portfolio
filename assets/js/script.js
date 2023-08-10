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
