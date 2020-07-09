const selectedButton = (tmp, className) => {
  const tabs = document.querySelectorAll(`.${className}`)

  tabs.forEach(item => {
    item.classList.remove('selected')
    tmp.classList.add('selected')
  })
}

export const hoverTabs = () => {
  const tabs = [...document.querySelectorAll('.js-tab')]
  if (!tabs) return

  tabs.forEach(item => {
    item.addEventListener('mouseover', () => {
      selectedButton(item, 'js-tab')

      const contentItem = document.querySelector(`.${item.dataset.tab}`)
      selectedButton(contentItem, 'js-content')
    })
  })
}

export const handleTabsLink = () => {
  const menuLinkList = [...document.querySelectorAll('.js-link-menu')]
  if (!menuLinkList) return

  menuLinkList.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      selectedButton(item, 'js-link-menu')

      const contentItem = document.querySelector(`.${item.dataset.tab}`)
      if (!contentItem) return

      selectedButton(contentItem, 'js-row')
    })
  })
}
