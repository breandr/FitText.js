const DEFAULT_SETTINGS = {
    minFontSize: Number.NEGATIVE_INFINITY,
    maxFontSize: Number.POSITIVE_INFINITY
}

export default function(element, compressor = 1, settings) {
    const finalSettings = Object.assign({}, DEFAULT_SETTINGS, settings)
    element.style.fontSize = Math.max(Math.min(element.offsetWidth / (compressor*10), parseFloat(finalSettings.maxFontSize)), parseFloat(finalSettings.minFontSize))
}
