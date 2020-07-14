const scrollToTop = () => {
  const btnScroll = document.querySelector('.js-scroll-top')
  if (!btnScroll) return

  window.pageYOffset >= 100 ? btnScroll.classList.add('is-active') : btnScroll.classList.remove('is-active')
}

export const scrollPage = () => {
  window.onscroll = () => {
    scrollToTop()
  }
}
