chrome.storage.local.get('config',function(LocalMapper){
  $('#original_file_url').val(LocalMapper.config.OriginalFileURL);
  $('#inject_file_url').val(LocalMapper.config.InjectFileURL);
});


// Called when user saves his changes to the original_file_url
$(".lm-clear-data").click(function() {
    var CLStorage = chrome.storage.local;
    CLStorage.set({
      "config": {
        "OriginalFileURL": $('#original_file_url').val(),
        "InjectFileURL": $('#inject_file_url').val()
      }
    });
    var textMessage = ($(this).attr('type') == 'reset') ? 'Off' : 'On';
    chrome.browserAction.setBadgeText ( { text: textMessage } );
    window.close();
});