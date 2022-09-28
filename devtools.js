const styles = [
  '/style/style.css',
  '/style/gutterStyle.css',
]
const fonts = [
  '/style/fonts.css',
]

console.log('devtools.js loaded')

function applyStyle(paths) {
  for (const path of paths) {
    const req = new XMLHttpRequest()
    req.open('GET', path)
    req.onload = () => chrome.devtools.panels.applyStyleSheet(req.responseText)
    req.send()
  }

  console.log('stylesApplied', paths)
}

applyStyle([...styles, ...fonts])

chrome.devtools.panels.sources.onSelectionChanged.addListener(() => applyStyle([styles[1]]))
