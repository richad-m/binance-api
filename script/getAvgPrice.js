function formatPrice(price) {
  // Format Price in international 3,400.350€
  var nf = Intl.NumberFormat();
  return nf.format(price);
}

function getAvgPrice(crypto, fiat) {
  // Display average Price of a crypto in fiat
  console.log(`la fiat qui est passee est ${fiat}`);
  let priceDiv = document.getElementById(`${crypto}-price`);
  fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      let cryptoPrice = `${formatPrice(data.price)}€`;
      priceDiv.innerHTML = cryptoPrice;
    });
}

export { formatPrice, getAvgPrice };
