chrome.windows.onCreated.addListener(function(window){
	if(chrome.extension.inIncognitoContext){
		chrome.tabs.getCurrent(function(tab){
			chrome.tabs.create({url: "emma.html", active: true},function() {
				chrome.tabs.query({active: false},  function (tabs) {
				    for (var i = 0; i < tabs.length; i++) {
				        chrome.tabs.remove(tabs[i].id);
    				}
    			});
			});
		});
	}
});

