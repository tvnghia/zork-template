import * as Cart from './Cart'
import * as MenuMobile from './MenuMobile'
import * as SlideImages from './SlideShowImageList'
import * as Modal from './Modal'
import * as HandleTabs from './HandleTabs'
import * as Smooth from './Smooth'
import * as ScrollPage from './ScrollPage'

window.addEventListener('DOMContentLoaded', function () {
  MenuMobile.toggleCollapse()
  MenuMobile.toggleSubCollapse()

  SlideImages.showSlides()
  SlideImages.test()

  // Modal.scrollPage()
  Modal.searchBar()
  Modal.closeModal()

  Cart.handleCart()
  Cart.removeProduct()

  HandleTabs.hoverTabs()
  HandleTabs.handleTabsLink()

  Smooth.scrollAnchor()

  ScrollPage.scrollPage()
})
