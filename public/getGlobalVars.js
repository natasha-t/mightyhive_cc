// script to injected into page, creates events to send out dataLayer and utag_data object values

document.dispatchEvent(new CustomEvent('dataLayerFromPage', {
  detail: window.dataLayer
}))

document.dispatchEvent(new CustomEvent('utag_dataFromPage', {
  detail: window.utag_data
}))