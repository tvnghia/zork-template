// Scroll smooth
const easeInCubic = t => t * t * t

const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
  const runtime = currentTime - startTime
  let progress = runtime / duration

  progress = Math.min(progress, 1)

  const ease = easeInCubic(progress)

  window.scroll(0, startScrollOffset + (scrollEndElemTop * ease))
  if (runtime < duration) {
    requestAnimationFrame((timestamp) => {
      const currentTime = timestamp || new Date().getTime()
      scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset)
    })
  }
}

export const scrollAnchor = () => {
  const scrollElems = [...document.querySelectorAll('a[href^="#"]')]
  if (!scrollElems.length) return

  scrollElems.forEach(link => {
    link.addEventListener('click', e => {
      console.log('xxx')
      e.preventDefault()
      const scrollElemId = e.target.href.split('#')[1]
      const scrollEndElem = document.getElementById(scrollElemId)
      requestAnimationFrame(timestamp => {
        const stamp = timestamp || new Date().getTime()
        const duration = 500
        const start = stamp
        const startScrollOffset = window.pageYOffset
        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top

        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset)
      })
    })
  })
}
