var path = require('path')

var FILE_MAP = {
  '\\.css': 'css_file',
  'xls': 'excel_doc',
  'flv': 'flv_file',
  'jpg|jpeg|png|gif': 'image',
  'js\b': 'js_file',
  'mp3': 'mp3_file',
  'pdf': 'pdf_file',
  'ppt': 'powerpoint_doc',
  'rtf': 'rtf_file',
  'txt': 'text_file',
  'mp4': 'video_file',
  'doc|dot': 'word_doc',
  'xml': 'xml_file',
  'xsl': 'xsl_file'
}
var SEARCH = Object.keys(FILE_MAP)

module.exports = function fileAsset (file) {
  var ext = path.extname(file)

  for (var i = 0, re, match; i < SEARCH.length; i++) {
    re = new RegExp(SEARCH[i])
    if (re.test(ext)) {
      match = SEARCH[i]
      break
    }
  }

  return FILE_MAP[match] || 'file'
}
