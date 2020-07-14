import * as Cart from './Cart'
import * as MenuMobile from './MenuMobile'
import * as SlideImages from './SlideShowImageList'
import * as Header from './Header'
import * as HandleTabs from './HandleTabs'
import * as Smooth from './Smooth'
import * as ScrollPage from './ScrollPage'

window.addEventListener('DOMContentLoaded', function () {
  MenuMobile.toggleCollapse()
  MenuMobile.toggleSubCollapse()

  SlideImages.showSlides()
  SlideImages.test()

  Header.scrollPage()
  Header.searchBar()
  Header.closeModal()

  Cart.handleCart()
  Cart.removeProduct()

  HandleTabs.hoverTabs()
  HandleTabs.handleTabsLink()

  Smooth.scrollAnchor()

  ScrollPage.scrollPage()
})
