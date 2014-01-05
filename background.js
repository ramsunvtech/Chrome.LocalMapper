
chrome.storage.local.get('config',function(LocalMapper){
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if(LocalMapper.config.OriginalFileURL != '' && LocalMapper.config.InjectFileURL != '') {
        if( details.type = 'script' && details.url == LocalMapper.config.OriginalFileURL ) {
          return {redirectUrl:LocalMapper.config.InjectFileURL};
        }
      }
  },
    {urls: ["<all_urls>"]},
    ["blocking"]);
});