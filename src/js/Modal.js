// Search icon bar to open modal
export const searchBar = () => {
  const searchIconList = [...document.querySelectorAll('.js-search-icon')]
  const modal = document.querySelector('.js-modal')
  if (!searchIconList.length && !modal) return

  searchIconList.forEach(item => {
    item.addEventListener('click', e => {
      modal.classList.add('is-active')
    })
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
