const s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('globalVars.js');
s.onload = function() {
    this.remove();
};

(document.head || document.documentElement).appendChild(s);


document.addEventListener('dataLayerFromPage', function(e) {

  console.log('dataLayer: ', JSON.stringify(e.detail));

  chrome.storage.local.set({ dataLayer: JSON.stringify(e.detail) });
});

document.addEventListener('utag_dataFromPage', function(e) {

  console.log('utag_data: ', JSON.stringify(e.detail));

  chrome.storage.local.set({ utag_data: JSON.stringify(e.detail) });
});