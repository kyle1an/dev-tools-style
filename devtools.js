const styles = [
  '/style/style.css',
  '/style/sourceFiles.css',
  '/style/elements.css',
]
const fonts = [
  '/style/fonts.css',
]

console.log('devtools.js loaded')

function applyStyles(paths) {
  for (const path of paths) {
    applyStyle(path)
  }

  console.log('stylesApplied', paths)
}

function applyStyle(path) {
  const req = new XMLHttpRequest()
  req.open('GET', path)
  req.onload = () => chrome.devtools.panels.applyStyleSheet(req.responseText)
  req.send()
}

applyStyles([...styles, ...fonts])

chrome.devtools.panels.sources.onSelectionChanged.addListener(() => applyStyle(styles[1]))
chrome.devtools.panels.elements.onSelectionChanged.addListener(() => applyStyle(styles[2]))
