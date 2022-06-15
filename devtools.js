const styles = ['dist/style.css', 'dist/gutterStyle.css'];
const fonts = ['dist/fonts.css'];

console.log('devtools.js loaded');

function applyStyle(paths) {
  for (const path of paths) {
    const x = new XMLHttpRequest();
    x.open('GET', path);
    x.onload = () => chrome.devtools.panels.applyStyleSheet(x.responseText);
    x.send();
  }
  console.log('stylesApplied', paths);
}

applyStyle([...styles, ...fonts]);

chrome.devtools.panels.sources.onSelectionChanged.addListener(() => {
  applyStyle([styles[1]]);
});
