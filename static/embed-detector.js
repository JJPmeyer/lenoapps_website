// Detect if page should be embedded and hide navigation
;(function () {
  // Check for embed parameter in URL
  const urlParams = new URLSearchParams(window.location.search)
  const isEmbed = urlParams.get('embed') === 'true'

  if (isEmbed) {
    // Function to set up embed mode
    function setupEmbedMode() {
      // Add data attribute to body for CSS targeting
      if (document.body) {
        document.body.setAttribute('data-embed', 'true')
      }

      // Add iframe-friendly meta tags
      const meta = document.createElement('meta')
      meta.httpEquiv = 'Content-Security-Policy'
      meta.content = 'frame-ancestors *.monday.com monday.com;'
      document.head.appendChild(meta)

      // Add robots meta to prevent indexing
      const robotsMeta = document.createElement('meta')
      robotsMeta.name = 'robots'
      robotsMeta.content = 'noindex, nofollow'
      document.head.appendChild(robotsMeta)
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupEmbedMode)
    } else {
      // DOM is already loaded
      setupEmbedMode()
    }
  }
})()
