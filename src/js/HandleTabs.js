const selectedButton = (tmp, className) => {
  const tabs = document.querySelectorAll(`.${className}`)
  if (!tabs) return

  tabs.forEach(item => {
    item.classList.remove('selected')
    tmp.classList.add('selected')
  })
}

export const hoverTabs = () => {
  const tabs = [...document.querySelectorAll('.js-tab')]

  tabs.forEach(item => {
    item.addEventListener('mouseover', () => {
      selectedButton(item, 'js-tab')
    })
  })
}

export const handleTabsLink = () => {
  const testList = [...document.querySelectorAll('.js-link-menu')]

  testList.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      selectedButton(item, 'js-link-menu')
    })
  })
}
