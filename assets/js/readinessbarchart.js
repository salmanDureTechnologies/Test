function drawBar(){
Highcharts.chart('container-barchart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Result' ,
        align:'left'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Completed', 'Not ready', 'In progress', 'Not applicable'],
        title: {
            text: null
        }
    },
    yAxis: {
       
    min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        value: 'false'
       
    },
    legend:{ enabled:false },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        },
        series: {
				colorByPoint: true,
				colors: ['#7FBF69', '#E2735A', '#F2D486', '' ],
                enabled:false
			},
    },
    
    credits: {
        enabled: false
    },
    series: [{
        data: [28, 6, 20 , 0]
        
    }]
});
}
