var test = require('tape')
var fileAsset = require('./')

test('basic usage', function (assert) {
  assert.equal(fileAsset('image.jpeg'), 'image')
  assert.equal(fileAsset('file.txt'), 'text_file')
  assert.equal(fileAsset('file.dunno'), 'file')
  assert.end()
})
