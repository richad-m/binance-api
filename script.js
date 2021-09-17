import { getAvgPrice } from "./script/getAvgPrice.js";
import getGrowth from "./script/getGrowth.js";
import getPriceData from "./script/getPriceData.js";
import graphOverTime from "./script/graphOverTime.js";
import toCollapse from "./script/toCollapse.js";

// Retreive chosen currency DISABLED FOR NOW
let chosenFiat = "EUR";
// let fiatClick = document.getElementById("fiat-click");

// fiatClick.addEventListener("click", (e) => {
//   chosenFiat = e.target.value;
//   console.log(chosenFiat);
// });

// Fetching data every X seconds and updating results in HTML
let btcPriceData = []; // Initilazing empty price Array for BTC
let ethPriceData = []; // Initializing empty price Array for ETH
setInterval(getAvgPrice, 10000, "BTC", chosenFiat);
setInterval(getGrowth, 10000, "BTC", chosenFiat);
setInterval(getAvgPrice, 10000, "ETH", chosenFiat);
setInterval(getGrowth, 10000, "ETH", chosenFiat);
getPriceData("BTC", chosenFiat, btcPriceData);
getPriceData("ETH", chosenFiat, ethPriceData);
getAvgPrice("BTC", chosenFiat);
getGrowth("BTC", chosenFiat);
getAvgPrice("ETH", chosenFiat);
getGrowth("ETH", chosenFiat);
graphOverTime(btcPriceData, "BTCChart");
graphOverTime(ethPriceData, "ETHChart");

// Collapsing chart when clicking on crypto name
const btcButton = document.getElementById("BTCButton");
const btcChart = document.getElementById("BTCCollapse");
const ETHButton = document.getElementById("ETHButton");
const ETHChart = document.getElementById("ETHCollapse");
toCollapse(ETHButton, ETHChart);
toCollapse(btcButton, btcChart);

//Changing theme on clicking button
const btnSwitchTheme = document.querySelector(".switch");
btnSwitchTheme.addEventListener("change", () => {
  if (document.body.attributes[0].value == "light") {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});
