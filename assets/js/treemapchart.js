function drawtreeMap(){
    Highcharts.chart('container-tree', {
      
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.value}%</b>',
            enabled:true
        },

        plotOptions: {
            treemap: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                   
                     format: '{point.name}'
                },
               
            }
        },
       
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            clip: false,
            
            data: [{
                name: 'Angola',
                value: 45,
                color:'#f68954'
            }, {
                name: 'Botswana',
                value: 20,
                color:'#f8a37a'
            }, {
                name: 'Madagascar',
                value: 15,
                color:'#fabda0'
            }, {
                name: 'Malawi',
                value: 10,
                color: '#fcd7c6'
            }, {
                name: ' Mauritius',
                value: 10,
                color: '#fef1ec'
            }, ]
        }],
        title: {
            text: ''
        },
        credits: {
            enabled: false
          },
          
    });
}