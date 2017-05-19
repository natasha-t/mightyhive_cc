console.log('DATALAYER BOI: ', window.dataLayer);

document.dispatchEvent(new CustomEvent('dataLayerFromPage', {
  detail: window.dataLayer
}))

document.dispatchEvent(new CustomEvent('utag_dataFromPage', {
  detail: window.utag_data
}))