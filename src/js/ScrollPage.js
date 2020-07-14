// btn scroll top
const scrollToTop = () => {
  const btnScroll = document.querySelector('.js-scroll-top')
  if (!btnScroll) return

  window.pageYOffset >= 100 ? btnScroll.classList.add('is-active') : btnScroll.classList.remove('is-active')
}

// tranform header when scroll page
const tranformHeader = () => {
  const header = document.querySelector('.js-header')
  if (!header) return

  window.pageYOffset >= 150 ? header.classList.add('is-active') : header.classList.remove('is-active')
}

export const scrollPage = () => {
  window.onscroll = () => {
    scrollToTop()
    tranformHeader()
  }
}
