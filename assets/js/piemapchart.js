Highcharts.chart('container-pie', {
    chart: {
       
        plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    
           
    },
     title: {
    style: {
            //  fontWeight: 'bold',
             color:'black' ,
             size:'20%'
            },
        text: ''
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            slicedOffset:'0'
            
    }
},
   /* subtitle: {
      text: 'Data Source: <a href="https://fdoh.maps.arcgis.com/apps/opsdashboard/index.html#/8d0de33f260d444c852a615dc7837c86">Florida Department of Health, Division of Disease Control and Health Protection</a>',
      floating: false,
      align: 'left',
      x: 10,
      verticalAlign: 'bottom',
      y: 2,
      style: {
        fontSize: '9px',
        color: '#014363',
        fontWeight: 'bold'
      }
    },*/
    
   tooltip: {
   useHTML: true,
   headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
        pointFormat: ': <b>{point.y}</b>',
        shared: true
    },
    accessibility: {
        point: {
            valueSuffix: ''
        }
    },
   
    series: [{
        type: 'pie',
        name: '',
        // innerSize: '80',
        
    
        data: [{
            name: 'High regular',
            y: 9,
            color: '#AD5E59'
            //sliced: true,
            //selected: true
        }, {
            name: 'High epidemic',
            y: 6,
            color: '#E7786F'
        },
        {
            name: 'Medium',
            y: 4,
            color: '#ECA877'
        },
        {
            name: 'Low',
            y: 4,
            color: '#F9E1A3'
        },
         {
            name: 'No case',
            y: 8,
            color: '#C4C9D1'
        }
       
        
        ]
    }],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        symbolHeight: 11,
    symbolWidth: 11,
    symbolRadius: 0
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
            style: {
        fontSize: '13px',
       // color: 'white',
        // fontWeight: 'bold'
      },
            distance: -50,
							/*x:50,
							y:50,*/
            format: '<b>{point.y}</b>',
                enabled: true
            },
            showInLegend: true
        }
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