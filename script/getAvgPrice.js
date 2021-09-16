function formatPrice(price) {
  // Format Price in international 3,400.350€
  var nf = Intl.NumberFormat();
  return nf.format(price);
}

function getAvgPrice(crypto, fiat) {
  // Display average Price of a crypto in fiat
  let priceDiv = document.getElementById(`${crypto}-price`);
  priceDiv.innerHTML = "";
  priceDiv.classList.add("loader");
  fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      priceDiv.classList.remove("loader");
      let cryptoPrice = `${formatPrice(data.price)}€`;
      priceDiv.innerHTML = cryptoPrice;
    });
}

export { formatPrice, getAvgPrice };
