function getGrowth(crypto, fiat) {
  // Display day growth of a crypto in %
  let growthDiv = document.getElementById(`${crypto}-growth`);
  growthDiv.innerHTML = "";
  growthDiv.classList.add("loader");
  fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      if (
        data.priceChangePercent >= 0 &&
        !growthDiv.classList.contains("positive")
      ) {
        growthDiv.classList.toggle("positive");
      }
      growthDiv.classList.remove("loader");
      let cryptoGrowth =
        data.priceChangePercent > 0
          ? `+${data.priceChangePercent}%`
          : `${data.priceChangePercent}%`;
      growthDiv.innerHTML = cryptoGrowth;
    });
}

export default getGrowth;
