function drawpieChart(){
    // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
// Data retrieved from https://netmarketshare.com
// Highcharts.chart('container-pie', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: '',
//         align: 'left'
//     },
   
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//         colors: [
//      			'#36b9CC',
//           '#4e73df',
//           '#1cc88a',
//           '#0b3d70',
//           '#4e73df',
//           '#f6c23e',
//           '#36b9cc',
//    			],
//         allowPointSelect: true,
//         cursor: 'pointer',
//             dataLabels: {
//                 enabled: false,
//             },
//             showInLegend: true
            
//         }
//     },
//     credits: {
//     enabled: false
//   },
//     series: [{
//         name: '',
//         colorByPoint: true,
//         data: [{
//             name: 'Yes',
//             y: 55,
//             color: '#5B8874'
//         }, {
//             name: 'No',
//             y: 30,
//             color:'#B07F40'
//         },  {
//             name: 'In Progress',
//             y: 10,
//             color:'#833B2B'
//         }, {
//             name: 'NA',
//             y: 5,
//             color: '#a9acb1'
//         },
//        ]
//     }]
// });
Highcharts.chart('container-pie', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: '',
        align: 'left'
    },
   
    subtitle: {
        text: '' ,
        align: 'left'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
            enabled: false
          },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        enabled:false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
               
                 format: '{point.y}%'
            },
            showInLegend: true,
        }
    },
    series: [{
        type: 'pie',
        name: '',
        data: [
             {
               name: 'Completed',
              y: 55,
              color: '#5B8874'
              
            },
            {
                name: 'Not Started',
                y: 30,
                color:'#B07F40'
            },
            {
                name: 'Work In Progress',
                y: 10,
                color:'#833B2B',
                sliced: true,
                selected: true
            },
            {
               name: 'N/A',
              y: 5,
              color: '#a9acb1'
            },
            
        ]
    }]
});


}