function drawlineChart(){
    // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
// Data retrieved from https://netmarketshare.com
Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});
Highcharts.chart('container-line', {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
  /*  subtitle: {
        text: 'Data Source: ',
         floating: false,
         useHTML: true,
      align: 'left',
      x: 10,
      verticalAlign: 'bottom',
      y: 15,
      style: {
        fontSize: '9px',
        color: '#014363',
        fontWeight: 'bold',
      }
    },*/
    xAxis: {
    labels: {
           style: {
       
        fontWeight: 'bold',
      }},
        categories: [
            'Jan',
            '',
            '',
            '',
            'Feb',
            'Mar',
            'Apr',
            'May',
           
        ],
        crosshair: true
    },
    yAxis: {
    labels: {
           style: {
       
        fontWeight: 'bold',
      }},
        min: 0,
        title: {
            text: '<b>No of Patients</b>',
            
        }
    },
    credits: {
     enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:blue;padding:0"><b></b>: </td>' +
            '<td style="padding:0"><b>{point.y:,.0f}<a style="font-size:8px">-</a> {point.q}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
       line: {
       pointPadding: 0.1,
        borderWidth: 0.2,
      //pointWidth:20,
        dataLabels: {
                enabled: true,
              //rotation: 90,
 	      align: 'center',
        //color:'white',
        y: 30,
        //distance: 150,
       format: '{point.q}',
       style: {
                //fontSize: 8,
                //fontFamily: 'Verdana, sans-serif'
                
            },
            }
      }
    },
    series: [
   
    {
        name: 'Days & Months',
        data: [
        {y:2300, q:'D1'}, 
        {y:2000, q:'D2'},
        {y:1900, q:'D3'},
        {y:1500, q:'D4'},
        {y:1200, q:'D9'},
        {y:1000, q:'D34'},
        {y:900, q:'D64'},
        {y:800, q:'D94'}
        ],
        
        color:'#4472C4',
      
       //sign:'<a style="font-size:6px">%</a>'     

    }, 
    ],
    
    legend: {
        enabled: true,
        symbolRadius: 0
    },
    
    
    
     exporting: {
            buttons: {
                contextButton: {
                 text: '',
                  symbol: 'url(/sites/all/themes/fastrackcities/images/download-icon.png)',
                    symbolStrokeWidth: 1,
                    symbolFill: '#bada55',
                    symbolStroke: '#330033'
                }
            }
        },
});

}