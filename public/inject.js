// create script tag with source as getGlobalVars, append to page
const s = document.createElement('script');
s.src = chrome.extension.getURL('getGlobalVars.js');
s.onload = function() {
    this.remove();
};

(document.head || document.documentElement).appendChild(s);


// add event liseners to this injected script (content script) to retrieve object data
  // add object data to chrome local storage 

document.addEventListener('dataLayerFromPage', function(e) {
  chrome.storage.local.set({ dataLayer: JSON.stringify(e.detail) });
});

document.addEventListener('utag_dataFromPage', function(e) {
  chrome.storage.local.set({ utag_data: JSON.stringify(e.detail) });
});