const stylePaths = ['dist/style.css', 'dist/fonts.css',];
const applyStyle = () => {
    for (const path of stylePaths) {
        const x = new XMLHttpRequest();
        x.open('GET', path);
        x.onload = () => chrome.devtools.panels.applyStyleSheet(x.responseText);
        x.send();
    }
    console.log('stylesApplied');
}

applyStyle()
console.log('chrome', chrome);
// devtools.panels.sources.onSelectionChanged.addListener(applyStyle)
