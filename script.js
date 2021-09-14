function formatPrice(price) {
  // Format Price in international 3,400.350€
  var nf = Intl.NumberFormat();
  return nf.format(price);
}

function getAvgPrice(crypto, fiat) {
  // Display average Price of a crypto in fiat
  let priceDiv = document.getElementById(`${crypto}-price`);
  fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${crypto}${fiat}`)
    .then((response) => response.json())
    .then((data) => {
      let cryptoPrice = `${formatPrice(data.price)}€`;
      priceDiv.insertAdjacentHTML("beforeend", cryptoPrice);
    });
}

function getGrowth(crypto, fiat) {
  // Display day growth of a crypto in %
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
          : `${data.priceChangePercent}%`;
      growthDiv.insertAdjacentHTML("beforeend", cryptoGrowth);
    });
}

let priceDatas = []; // Initilazing empty price Array
function getPriceData(crypto, fiat) {
  // Fills array PriceDatas with values of a crypto in fiat
  fetch(
    `https://api.binance.com/api/v3/klines?symbol=${crypto}${fiat}&interval=1m`
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((day) => {
        priceDatas.push(day[3]);
      });
    });
}

getPriceData("BTC", "EUR");
getAvgPrice("BTC", "EUR");
getGrowth("BTC", "EUR");
getAvgPrice("ETH", "EUR");
getGrowth("ETH", "EUR");

//constructing date array in JS

function GetFormattedDate(date) {
  // format date in DD/MM/YYYY
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

let dates = []; // Initializing date Array for X axe
function dateArray() {
  let today = new Date();
  for (let i = 0; i < 500; i++) {
    dates.unshift(
      GetFormattedDate(new Date(today.getTime() - 24 * 60 * 60 * 1000))
    );
    today = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  }
}
dateArray();

function graphOverTime(datas) {
  // Draw graph with datas along Y axe and times along X (as of today and backward)
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: datas,
          label: "Price",
          borderColor: "red",
          fill: false,
        },
      ],
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Price",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Days",
            },
          },
        ],
      },
    },
  });
}

graphOverTime(priceDatas);
