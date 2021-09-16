function getPriceData(crypto, fiat, array) {
  // Fills array btcPriceData with values of a crypto in fiat
  fetch(
    `https://api.binance.com/api/v3/klines?symbol=${crypto}${fiat}&interval=1d&limit=200`
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((day) => {
        array.push(day[3]);
      });
    });
}

export default getPriceData;
