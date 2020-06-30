// Scroll page
export const scrollPage = () => {
  window.onscroll = () => {
    const header = document.querySelector('.js-header')
    if (!header) return

    window.pageYOffset >= 150 ? header.classList.add('is-active') : header.classList.remove('is-active')
  }
}

// Search icon bar
export const searchBar = () => {
  const searchIcon = document.querySelector('.js-search-icon')
  const modal = document.querySelector('.js-modal')
  if (!searchIcon && !modal) return

  searchIcon.addEventListener('click', () => {
    modal.classList.add('is-active')
  })
}

// Close modal search
export const closeModal = () => {
  const modal = document.querySelector('.js-modal')
  if (!modal) return

  modal.addEventListener('click', e => {
    e.target === modal && modal.classList.remove('is-active')
  })
}
