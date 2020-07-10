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
    <div class="card card--horizontal u-text-highlight u-mb-10 u-pb-10 js-product">
      <img src="${item.querySelector('.js-img').src}" width="70" height="80" alt="">
      <div>
        <p class="u-prl-10 u-mb-10 u-text-bold-700">${item.querySelector('.js-product-name').innerHTML}</p>
        <small class="u-prl-10 js-product-price">${item.querySelector('.js-price').innerHTML}d</small>
        <btn data-btn="${item.querySelector('.js-btn-cart').dataset.id}" class="card__action--right btn btn--orange btn--circle u-text-centered js-btn-remove">X</btn>
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

export const handleCart = () => {
  const cardItem = [...document.querySelectorAll('.js-card')]
  const badge = document.querySelector('.js-badge')
  if (!cardItem.length || !badge) return

  cardItem.forEach(item => {
    item.querySelector('.js-btn-cart').addEventListener('click', e => {
      badge.innerHTML++

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
  const badge = document.querySelector('.js-badge')

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
    badge.innerHTML--

    countPrice()
  })
}
