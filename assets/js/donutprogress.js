function drawdonutProgress() {
  
    // Create the chart
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'container-donut',
        type: 'pie'
      },
      title: {

        text: '63%',
  
         align: 'center',
  
        verticalAlign: 'middle',
  
        y: 20
  
    },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          shadow: false,
          point: {
            events: {
              mouseOver: function(e) {
                this.originalRadius = this.graphic.r;
                this.graphic.animate({
                  r: this.originalRadius*1.07
                }, 200);
              },
              mouseOut: function(e) {
                this.graphic.animate({
                  r: this.originalRadius
                }, 200);
              }
            }
          }
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
      },
      series: [{
        name: 'Data',
        colors:["#024664","#D7F0FB"],
        data: [
          ["Nigeria", 63],
          ["B", 37],
          
        ],
        size: '100%',
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            halo: false
          }
        },
      }]
    });
    
    var circleradius = chart;
    console.log(chart);
    
    var test = chart.options.series[0].innerSize * chart.Height
    console.log(test);
  
    // Render the circle
    chart.renderer.circle('50%', '50%', 130).attr({
        fill: '#fff',
    }).add();
    
  }
