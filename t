[1mdiff --git a/index.html b/index.html[m
[1mindex b839c09..978286f 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -29,7 +29,7 @@[m
       </label>[m
       <!-- end of trying button -->[m
       <!-- Trying radio button for currency -->[m
[31m-      <div[m
[32m+[m[32m      <!-- <div[m
         class="btn-group btn-group-toggle"[m
         data-toggle="buttons"[m
         id="fiat-click"[m
[36m@@ -57,7 +57,7 @@[m
           />[m
           Dollar $[m
         </label>[m
[31m-      </div>[m
[32m+[m[32m      </div> -->[m
       <!-- ending radio button -->[m
       <div class="">[m
         <div class="crypto-title">[m
[1mdiff --git a/script.js b/script.js[m
[1mindex 6cbb8b2..a708a52 100644[m
[1m--- a/script.js[m
[1m+++ b/script.js[m
[36m@@ -4,15 +4,14 @@[m [mimport getPriceData from "./script/getPriceData.js";[m
 import graphOverTime from "./script/graphOverTime.js";[m
 import toCollapse from "./script/toCollapse.js";[m
 [m
[31m-// Retreive chosen currency[m
[32m+[m[32m// Retreive chosen currency DISABLED FOR NOW[m
 let chosenFiat = "EUR";[m
[32m+[m[32m// let fiatClick = document.getElementById("fiat-click");[m
 [m
[31m-let fiatClick = document.getElementById("fiat-click");[m
[31m-[m
[31m-fiatClick.addEventListener("click", (e) => {[m
[31m-  chosenFiat = e.target.value;[m
[31m-  console.log(chosenFiat);[m
[31m-});[m
[32m+[m[32m// fiatClick.addEventListener("click", (e) => {[m
[32m+[m[32m//   chosenFiat = e.target.value;[m
[32m+[m[32m//   console.log(chosenFiat);[m
[32m+[m[32m// });[m
 [m
 // Fetching data every X seconds and updating results in HTML[m
 let btcPriceData = []; // Initilazing empty price Array for BTC[m
[1mdiff --git a/style.css b/style.css[m
[1mindex 1aecc79..345fb43 100644[m
[1m--- a/style.css[m
[1m+++ b/style.css[m
[36m@@ -12,8 +12,6 @@[m
   font-family: Poppins;[m
 }[m
 [m
[31m-@value color: #a5afcc;[m
[31m-[m
 html {[m
   background-color: var(--color1);[m
 }[m
[36m@@ -51,6 +49,10 @@[m [mbody[data-theme="dark"] {[m
   align-items: center;[m
   cursor: pointer;[m
 }[m
[32m+[m
[32m+[m[32m.crypto-logo {[m
[32m+[m[32m  font-size: 1.2em;[m
[32m+[m[32m}[m
 .growth {[m
   margin-left: 8px;[m
   color: red;[m
