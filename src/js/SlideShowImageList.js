import { selectedButton } from './HandleTabs'

// Slide auto show image
let init = 0
export const showSlides = () => {
  const slides = [...document.querySelectorAll('.js-fade')]
  const dots = [...document.querySelectorAll('.js-dot')]
  if (!slides.length || !dots.length) return

  slides.forEach(item => {
    item.style.display = 'none'
  })

  init++

  init > slides.length && (init = 1)

  dots.forEach(dot => {
    dot.classList.remove('is-active')
  })

  slides[init - 1].style.display = 'block'
  dots[init - 1].classList.add('is-active')
  setTimeout(showSlides, 2000)
}

export const test = () => {
  const dots = [...document.querySelectorAll('.js-dot')]
  if (!dots.length) return

  dots.forEach(dot => {
    selectedButton(dot, 'js-dot')
  })
}
