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

// Slide auto show image
let init = 0
export const showSlides = () => {
  const slides = [...document.querySelectorAll('.mySlides')]
  const dots = [...document.querySelectorAll('.slideshow__dot')]

  slides.forEach(item => {
    item.style.display = 'none'
  })

  init++

  init > slides.length && (init = 1)

  dots.forEach(dot => {
    dot.classList.remove('active')
  })

  slides[init - 1].style.display = 'block'
  dots[init - 1].classList.add('active')
  setTimeout(showSlides, 2000)
}

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

const changeBtnAddToCart = (btn) => {
  btn.innerHTML = 'View Cart'
  btn.disabled = true
}

const getCart = (item) => {
  const cart = document.querySelector('.js-cart')
  const noti = document.querySelector('.js-text-noti')
  const totalPrice = document.querySelector('.js-total-price')
  if (!cart || !noti || !totalPrice) return

  noti.style.display = 'none'
  totalPrice.style.display = 'block'
  const product = `
    <div class="card-horizontal u-text-highlight u-mb-10 u-pb-10 js-product">
      <img src="${item.querySelector('.js-img').src}" width="70" height="80" alt="">
      <div>
        <p class="u-prl-10 u-mb-10 u-text-bold-700">${item.querySelector('.js-product-name').innerHTML}</p>
        <small class="u-prl-10 js-product-price">${item.querySelector('.js-price').innerHTML}d</small>
        <span data-btn="${item.querySelector('.js-btn-cart').dataset.id}" class="card-horizontal__remove u-text-centered js-btn-remove">X</span>
      </div>
    </div>
  `

  cart.insertAdjacentHTML('afterbegin', product)
}

const countPrice = () => {
  const totalPrice = document.querySelector('.js-total-price')
  const priceList = [...document.querySelectorAll('.js-product-price')]
  const arrayPrice = priceList.map(item => parseInt(item.innerHTML, 10))
  const price = arrayPrice.reduce((accumulator, currentValue) => accumulator + currentValue,
    0)

  totalPrice.innerHTML = `SUBTOTAL: ${price}d`
}

export const countCart = () => {
  const cardItem = [...document.querySelectorAll('.js-card-item')]
  const counter = document.querySelector('.js-counter')
  if (!cardItem.length || !counter) return

  cardItem.forEach(item => {
    item.querySelector('.js-btn-cart').addEventListener('click', e => {
      counter.innerHTML++

      alert('Product added! Check in Cart!')

      changeBtnAddToCart(item.querySelector('.js-btn-cart'))

      getCart(item)

      countPrice()
    })
  })
}

export const removeProduct = () => {
  const cart = document.querySelector('.js-cart')
  const noti = document.querySelector('.js-text-noti')
  const totalPrice = document.querySelector('.js-total-price')
  const counter = document.querySelector('.js-counter')

  cart.addEventListener('click', e => {
    if (!e.target.classList.contains('js-btn-remove')) return

    const btnRemove = e.target.closest('.js-btn-remove')
    const btnCart = document.querySelector(`[data-id="${btnRemove.dataset.btn}"]`)

    btnCart.disabled = false
    btnCart.innerHTML = 'ADD TO CART'
    e.target.closest('.js-product').remove()

    if (cart.querySelectorAll('.js-product').length === 0) {
      noti.style.display = 'block'
      totalPrice.style.display = 'none'
    }
    counter.innerHTML--

    countPrice()
  })
}
