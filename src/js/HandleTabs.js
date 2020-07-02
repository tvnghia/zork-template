const selectedButton = tmp => {
  document.querySelectorAll('.js-tab').forEach(item => {
    item.classList.remove('selected')
    tmp.classList.add('selected')
  })
}

export const hover = () => {
  const test = [...document.querySelectorAll('.js-tab')]

  test.forEach(item => {
    item.addEventListener('mouseover', () => {
      selectedButton(item)
    })
  })
}
