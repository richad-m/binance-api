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
  for (let i = 0; i < 200; i++) {
    dates.unshift(
      GetFormattedDate(new Date(today.getTime() - 24 * 60 * 60 * 1000))
    );
    today = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  }
}
dateArray();

function graphOverTime(datas, idDiv) {
  // Draw graph with datas along Y axe and times along X (as of today and backward)
  var ctx = document.getElementById(`${idDiv}`);
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: datas,
          label: "Price over time in €",
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

export default graphOverTime;
