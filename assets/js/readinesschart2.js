// Data retrieved from https://www.ssb.no/energi-og-industri/olje-og-gass/statistikk/sal-av-petroleumsprodukt/artikler/auka-sal-av-petroleumsprodukt-til-vegtrafikk
function drawChart(){
Highcharts.chart('container-chart2', {
    title: {
        text: 'iHR Score Per Capacity AFRO Nigeria 2021',
        align: 'center'
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5' ,'6' ,'7' ,'8' ,'9' ,'10' ,'11' ,'12']
    },
    yAxis: {
        title: {
            text: 'unit'
        }
    },
    labels: {
        items: [{
            html: '',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }],
    series: { colorByPoint: true,                
    colors: ['#2f7ed8'],           
    },    
    },
    legend:{ enabled:false },
    series: [{
    color:"#024664",
        type: 'column',
       
        data: [420, 430, 690, 410,490,420,490,590,610, 400,600,590]
    }, {
        type: 'spline',
        name: '',
        color:"#D7F0FB",
        data: [120, 430, 280,680,300,320, 900, 500,790,200,800,590],
        marker: {
            lineWidth: 2,
            lineColor: "#D7F0FB",
            fillColor: '#3BB346'
        }
    }]
});
}
