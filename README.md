# node-matrix-file-types

Map files via file extention to a Squiz Matrix file assets

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Example

```js
var fileAsset = require('node-matrix-file-type')

fileAsset('image.jpg') // 'image'
fileAsset('styles.css') // 'css_file'
fileAsset('scripts.js') // 'js_file'
fileAsset('file.txt') // 'text_file'
fileAsset('unknown.file') // 'file'

// etc

```

## API

### var fileAsset = require('node-matrix-file-types')

### fileAsset(file)

The `file` argument accepts a String representing the the file you wish to retrieve
an appropriate file asset type code for. Returns `'file'` by default.

## Licence

MIT
