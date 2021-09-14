console.log("je suis dans le fichier js");

function getAvgPrice(crypto, fiat) {
  let priceDiv = document.getElementById(`${crypto}-price`);
  fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      let cryptoPrice = `${data.price}€`;
      priceDiv.insertAdjacentHTML("beforeend", cryptoPrice);
    });
}

function getGrowth(crypto, fiat) {
  let growthDiv = document.getElementById(`${crypto}-growth`);
  fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.priceChangePercent > 0) {
        growthDiv.classList.toggle("positive");
      } else {
        growthDiv.classList.toggle("negative");
      }
      let cryptoGrowth =
        data.priceChangePercent > 0
          ? `+${data.priceChangePercent}%`
          : `-${data.priceChangePercent}%`;
      growthDiv.insertAdjacentHTML("beforeend", cryptoGrowth);
    });
}

getAvgPrice("BTC", "EUR");
getGrowth("BTC", "EUR");
getAvgPrice("ETH", "EUR");
getGrowth("ETH", "EUR");
