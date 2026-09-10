import './style.css'
import { renderHome } from './pages/home.js'
import { renderAbout } from './pages/about.js'

const app = document.getElementById('app')

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '')
  if (!raw) return { route: '/', anchor: null }
  const parts = raw.split('#')
  const route = parts[0] || '/'
  const anchor = parts[1] || null
  return { route: route.startsWith('/') ? route : '/' + route, anchor }
}

function render() {
  const { route, anchor } = parseHash()

  if (route.startsWith('/a-propos')) {
    renderAbout(app)
  } else {
    renderHome(app)
  }

  if (anchor) {
    setTimeout(() => {
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  } else {
    window.scrollTo(0, 0)
  }
}

window.addEventListener('hashchange', render)
render()
