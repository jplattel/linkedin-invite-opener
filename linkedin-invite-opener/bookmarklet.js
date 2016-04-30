( function(){ 

	// Get all invite urls
	var urls = [];
	$('a.bt-reply').each(function(){
		urls.push($(this).attr('href'))
	})
	
	// Get unique urls
	urls = $.unique(urls);
	urls = urls.slice(0,10);

	// Open 10 new tabs for answering
	for (var i = urls.length - 1; i >= 0; i--) {
		console.log('Opening tab for: ' + urls[i])
		chrome.runtime.sendMessage({"message": "open_new_tab", "url": urls[i]});
	}
})();
