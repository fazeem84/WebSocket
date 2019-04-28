
function onLoad(){
var ctx = $('#canvas');
var lineChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'My First dataset',
//				borderColor: window.chartColors.red,
//				backgroundColor: window.chartColors.red,
				fill: false,
				data: [
					1,
					2,
					3,
					4
				],
				yAxisID: 'y-axis-1',
			}, {
				label: 'My Second dataset',
//				borderColor: window.chartColors.blue,
//				backgroundColor: window.chartColors.blue,
				fill: false,
				data: [
					5,
                    6,
                    7,
                    8
				],
				yAxisID: 'y-axis-2'
			}]
		};

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: lineChartData,
      options: {
      					responsive: true,
      					hoverMode: 'index',
      					stacked: false,
      					title: {
      						display: true,
      						text: 'Chart.js Line Chart - Multi Axis'
      					},
      					scales: {
      						yAxes: [{
      							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      							display: true,
      							position: 'left',
      							id: 'y-axis-1',
      						}, {
      							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      							display: true,
      							position: 'right',
      							id: 'y-axis-2',
      							// grid line settings
      							gridLines: {
      								drawOnChartArea: false, // only want the grid lines for one axis to show up
      							},
      						}],
      					}
      				}
  });
}