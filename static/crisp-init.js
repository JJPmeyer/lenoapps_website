;(function () {
  try {
    var params = new URLSearchParams(window.location.search)
    var isEmbed = params.get('embed') === 'true'
    // Do not load Crisp inside the embed view
    if (isEmbed) return
  } catch (e) {
    // ignore
  }
  window.$crisp = []
  window.CRISP_WEBSITE_ID = 'fde3100b-48b0-47e8-95f1-cf6bef7762eb'
  var d = document
  var s = d.createElement('script')
  s.src = 'https://client.crisp.chat/l.js'
  s.async = 1
  d.getElementsByTagName('head')[0].appendChild(s)
})()
