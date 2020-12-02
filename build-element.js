const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/ang10Component/runtime.js',
'./dist/ang10Component/polyfills.js',
'./dist/ang10Component/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/custom-elements.js');
await fs.copyFile('./dist/ang10Component/styles.css', 'elements/styles.css')
// await fs.copy('./dist/ang10Component/assets/', 'display-text/assets/' )
})()