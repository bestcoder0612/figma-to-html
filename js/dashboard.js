  var ts2 = 1484418600000;
  var dates = [];
  var spikes = [5, -5, 3, -3, 8, -8]
  for (var i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr)
  }
  var options = {
    series: [{
        name: 'Transfer volume',
        data: dates
      }],
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
          borderColor: "#555",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false
            }
          }
      },
      markers: {
        size: 0,
      },
      title: {
        text: '',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: ''
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var options = {
      series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
      }],
      chart: {
          height: 150,
          type: 'line',
          toolbar: {
              show: false
          },
          zoom: {
              enabled: false
          },
      },
      grid: {
          borderColor: "#555",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false
            }
          }
      },
      colors:['#000000'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      yaxis: {
        max: 150,
        labels: {
          formatter: function (val) {
            return '';
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
  };
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
  chart1.render();
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
  chart2.render();
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  chart3.render();
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
  chart4.render();
  var chart5 = new ApexCharts(document.querySelector("#chart5"), options);
  chart5.render();
  var chart6 = new ApexCharts(document.querySelector("#chart6"), options);
  chart6.render();
  var chart7 = new ApexCharts(document.querySelector("#chart7"), options);
  chart7.render();
  var chart8 = new ApexCharts(document.querySelector("#chart8"), options);
  chart8.render();