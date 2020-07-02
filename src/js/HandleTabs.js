const selectedButton = tmp => {
  const tab = document.querySelectorAll('.js-tab')
  if (!tab) return

  tab.forEach(item => {
    item.classList.remove('selected')
    tmp.classList.add('selected')
  })
}

export const hover = () => {
  const tab = [...document.querySelectorAll('.js-tab')]

  tab.forEach(item => {
    item.addEventListener('mouseover', () => {
      selectedButton(item)
    })
  })
}
