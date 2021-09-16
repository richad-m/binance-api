import { formatPrice, getAvgPrice } from "./script/getAvgPrice.js";
import getGrowth from "./script/getGrowth.js";
import getPriceData from "./script/getPriceData.js";
import graphOverTime from "./script/graphOverTime.js";
import toCollapse from "./script/toCollapse.js";

let btcPriceData = []; // Initilazing empty price Array for BTC
let ethPriceData = []; // Initializing empty price Array for ETH

setInterval(getAvgPrice, 10000, "BTC", "EUR");
setInterval(getGrowth, 10000, "BTC", "EUR");
setInterval(getAvgPrice, 10000, "ETH", "EUR");
setInterval(getGrowth, 10000, "ETH", "EUR");
getPriceData("BTC", "EUR", btcPriceData);
getPriceData("ETH", "EUR", ethPriceData);
getAvgPrice("BTC", "EUR");
getGrowth("BTC", "EUR");
getAvgPrice("ETH", "EUR");
getGrowth("ETH", "EUR");

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
const btnToggle = document.querySelector(".switch-label");
btnSwitchTheme.addEventListener("change", () => {
  if (document.body.attributes[0].value == "light") {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});
