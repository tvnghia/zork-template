// Buton Menu collapse in mobile device
export const toggleCollapseMenu = () => {
  const btnCollapse = document.querySelector('.js-collapse')
  const menu = document.querySelector('.js-menu')
  if (!menu || !btnCollapse) return

  btnCollapse.addEventListener('click', () => {
    btnCollapse.classList.toggle('is-active')
    menu.classList.toggle('is-active')
  })
}

// toggle submenu
export const toggleSubMenu = () => {
  const subMenu = [...document.querySelectorAll('.js-menu-item')]
  if (!subMenu.length) return

  subMenu.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('is-active')
    })
  })
}
