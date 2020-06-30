// Slide auto show image
let init = 0
export const showSlides = () => {
  const slides = [...document.querySelectorAll('.mySlides')]
  const dots = [...document.querySelectorAll('.slideshow__dot')]

  slides.forEach(item => {
    item.style.display = 'none'
  })

  init++

  init > slides.length && (init = 1)

  dots.forEach(dot => {
    dot.classList.remove('active')
  })

  slides[init - 1].style.display = 'block'
  dots[init - 1].classList.add('active')
  setTimeout(showSlides, 2000)
}
