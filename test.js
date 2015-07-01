var test = require('tape')
var fileAsset = require('./')

test('basic usage', function (assert) {
  assert.equal(fileAsset('image.jpeg'), 'image', 'test .jpeg')
  assert.equal(fileAsset('file.txt'), 'text_file', 'test .txt')
  assert.equal(fileAsset('script.js'), 'file', 'test .js')
  assert.equal(fileAsset('styles.css'), 'css_file', 'test .css')
  assert.equal(fileAsset('file.dunno'), 'file', 'default to file for unknown file types')
  assert.equal(fileAsset('file.json'), 'file', 'don\'t match js in json')
  assert.equal(fileAsset('file.scss'), 'file', 'don\'t match css in scss')
  assert.end()
})
