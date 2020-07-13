import { selectedButton } from './HandleTabs'

// Slide auto show image
let init = 0
export const showSlides = () => {
  const imgFadeList = [...document.querySelectorAll('.js-img-fade')]
  const dots = [...document.querySelectorAll('.js-dot')]
  if (!imgFadeList.length || !dots.length) return

  imgFadeList.forEach(item => {
    item.style.display = 'none'
  })

  init++

  init > imgFadeList.length && (init = 1)

  dots.forEach(dot => {
    dot.classList.remove('is-active')
  })

  imgFadeList[init - 1].style.display = 'block'
  dots[init - 1].classList.add('is-active')
  setTimeout(showSlides, 2000)
}

export const test = () => {
  const dots = [...document.querySelectorAll('.js-dot')]
  const imgFadeList = [...document.querySelectorAll('.js-img-fade')]
  if (!imgFadeList.length || !dots.length) return

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      imgFadeList.forEach(item => {
        item.style.display = 'none'
      })

      document.querySelector(`.${e.target.dataset.img}`).style.display = 'block'
      selectedButton(dot, 'js-dot')
    })
  })
}
