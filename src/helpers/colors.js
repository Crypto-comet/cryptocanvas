export const convertColorToRGB = (color) => {
  const red = Math.round(((color & 0xE0) >>> 5) / 7.0 * 255.0)
  const green = Math.round(((color & 0x1C) >>> 2) / 7.0 * 255.0)
  const blue = Math.round((color & 0x03) / 3.0 * 255.0)

  return [ red, green, blue ]
}

export const RGBToHex = function (r, g, b) {
  const bin = r << 16 | g << 8 | b
  return (function (h) {
    return new Array(7 - h.length).join('0') + h
  })(bin.toString(16).toUpperCase())
}

/**
 * Get number of pixels which are painted (have a color different than 0)
 * @param pixels {Array} - array of numbers from 0 to 255
 */
export const getNumberOfPaintedPixels = (pixels = []) => pixels.filter(color => color !== 0).length

export const getPercentOfPixelsCompleted = (pixels = []) => {
  const percent = parseInt((getNumberOfPaintedPixels(pixels) / pixels.length) * 100, 10)
  return `${percent}%`
}

export const hexPalette = [ undefined, '#ffff9e', '#ffe6A3', '#ffd9ce', '#ffc7df', '#ffb4ef', '#efb3ff', '#ccd3ff', '#d4d0ff', '#b6ecff', '#bcf8ff', '#c1fec9', '#A9ff8c', '#efffA0', '#fff3b7', '#ffd98b', '#ffffff', '#feff7d', '#ffe48c', '#ffcec1', '#ffc4ce', '#ffAAee', '#ecA5ff', '#becbff', '#c4c0ff', '#A9e3ff', '#9ff5ff', '#b5fcbe', '#99ff78', '#e3fe5f', '#fff39f', '#ffce6f', '#f1f1f1', '#fffA51', '#ffd479', '#ffbfAf', '#ffb5bc', '#ff9feb', '#e996ff', '#Acbeff', '#bcb7ff', '#91d5ff', '#7ff2ff', '#A0fAAc', '#80ff58', '#d6f151', '#feee8b', '#ffc854', '#eaeaea', '#fff51b', '#ffc45A', '#ffAf99', '#ffA6Ab', '#ff96e9', '#e689ff', '#9bb2ff', '#b3Aeff', '#75dcff', '#68f0ff', '#7bf68e', '#76f94e', '#c8e32A', '#ffe261', '#ffbf49', '#e1e1e1', '#ffe615', '#ffbd30', '#ff9f85', '#ff979b', '#ff84e6', '#e27bff', '#94A8ff', '#A8A2ff', '#67d5ff', '#40edff', '#5bf177', '#6bef42', '#bdd831', '#fAd846', '#ffb446', '#d7d7d7', '#ffd80f', '#ffb618', '#ff9274', '#ff878b', '#ff73df', '#db6dff', '#8d9fff', '#9e96ff', '#55cdff', '#00eAff', '#50e86d', '#62e738', '#b3ce22', '#f3cd20', '#ffAA43', '#d0d0d0', '#ffcf00', '#ffAA00', '#ff8260', '#ff7479', '#ff66d3', '#d264f9', '#7d8fff', '#938Aff', '#40ccff', '#00e5ff', '#43de63', '#4Ad317', '#A6c100', '#ecc60f', '#f99c38', '#c5c5c5', '#ffc300', '#ff9200', '#ff6e47', '#ff6456', '#f55bc8', '#cA5bf1', '#6e81ff', '#8b82ff', '#24b8ff', '#00e0ff', '#00d138', '#2dbe00', '#99b400', '#e4be00', '#ed8f2d', '#b8b8b8', '#ffA700', '#ff8500', '#ff633c', '#ff523A', '#e74dbA', '#bf50e6', '#6372ff', '#7c74f1', '#20A9f2', '#00d3fA', '#00bd3b', '#19b300', '#86A000', '#d6Af00', '#db8122', '#a4a4a4', '#ff8A00', '#ff7900', '#f8572f', '#ff3e21', '#dA3fAd', '#b344dA', '#5964ff', '#6e66e3', '#1f9cdf', '#00bfe2', '#00A71A', '#00A800', '#748e00', '#c7A000', '#cA7315', '#8e8e8e', '#f37400', '#f36000', '#e34113', '#ff1c00', '#c92c9d', '#A93Ad0', '#4e56f5', '#625Ad6', '#0087d5', '#00Aece', '#009500', '#009b00', '#678000', '#b08A00', '#c15f0A', '#757575', '#d06200', '#d74700', '#ce2412', '#f20000', '#b9008c', '#9f2fc6', '#4448e7', '#5950cc', '#0071cd', '#009bc3', '#008300', '#008f00', '#5b7200', '#947500', '#b74A02', '#686868', '#A44b00', '#c12d0c', '#be1d00', '#d90000', '#A20077', '#850fAd', '#2439dd', '#483fbb', '#005cb2', '#00869f', '#007800', '#007A00', '#465700', '#6f5700', '#973400', '#4e4e4e', '#7e3300', '#Ac0e12', '#A41f00', '#b60000', '#8b0061', '#6e0096', '#012Ad3', '#372eA9', '#094897', '#007086', '#006d00', '#006800', '#405300', '#564500', '#791d00', '#343434', '#5A2600', '#7b1306', '#841b00', '#7b1500', '#6f004d', '#65008d', '#0122Ac', '#231794', '#15387A', '#005e70', '#005600', '#005500', '#354500', '#4f3f00', '#5f1A00', '#000000', '#461e00', '#4A1600', '#641903', '#501200', '#500038', '#4f0070', '#011b86', '#0f007e', '#1b295d', '#004c5A', '#004A00', '#004100', '#2A3600', '#483A00', '#451700' ]