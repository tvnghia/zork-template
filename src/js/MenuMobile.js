// Buton Menu collapse in mobile device
export const toggleCollapse = () => {
  const collapseAction = document.querySelector('.js-collapse-action')
  const collapse = document.querySelector('.js-collapse')
  if (!collapse || !collapseAction) return

  collapseAction.addEventListener('click', () => {
    collapseAction.classList.toggle('is-active')
    collapse.classList.toggle('is-active')
  })
}

// toggle collapseItem
export const toggleSubCollapse = () => {
  const collapseItem = [...document.querySelectorAll('.js-collapse-item')]
  if (!collapseItem.length) return

  collapseItem.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('is-active')
      item.querySelector('.js-collapse-icon').classList.toggle('is-active')
    })
  })
}
