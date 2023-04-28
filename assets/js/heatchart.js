function drawHeatchart(){
var chart = AmCharts.makeChart( "heatdiv", {
    "type": "serial",
    "theme": "light",
    
    "dataProvider": [ {
      "x": 1,
      "y": 1,
    
     
      "value3": 0,
      
      "color1": "#8EC24A",
      "color2": "#8EC24A",
      "color3": "#8EC24A",
      "color4": "#8EC24A",
      "color5": "#8EC24A"
    }, {
      "x": 2,
      "y": 1,
  
  
      "value3" :0,
      "value4": 0,
      
      "color1": "#6AA142",
      "color2": "#8EC24A",
      "color3": "#8EC24A",
      "color4": "#EFD800",
      "color5": "#EFD800"
    }, {
      "x": 3,
      "y": 1,
      
      "value3" :0,
      "value4" : 0,
      "color1": "#6AA142",
      "color2": "#8EC24A",
      "color3": "#EFD800",
      "color4": "#FFBA00",
      "color5": "#FFBA00"
    }, {
      "x": 4,
      "y": 1,
  
      "value2": 0,
      "value3": 1,
      "value4" :0,
       "value5" :0 ,
      "color1": "#8EC24A",
      "color2": "#e1d92d",
      "color3": "#FFBA00",
      "color4": "#FFBA00",
      "color5": "#ca0101"
    }, {
      "x": 5,
      "y": 1,
      "value2" : "0",
      "value3" :"0" ,
      "value4" : "0" ,
      "value5" : "0" ,
       "color1": "#8EC24A",
      "color2": "#EFD800",
      "color3": "#FFBA00",
      "color4": "#ca0101",
      "color5": "#ca0101"
    } ],
    "graphs": [ {
      "fontSize": 15,
      "fillAlphas": 1,
      "lineAlpha": 1,
      "lineColor": "#fff",
      "lineThickness": 2,
      "cornerRadiusTop": 6,
      "cornerRadiusBottom": 6,
      "fillColorsField": "color1",
      "type": "column",
      "valueField": "y",
      "labelText": "[[value1]]",
      "balloonText": "[[value1]]",
      "labelPosition": "middle"
    }, {
      "fontSize": 15,
      "fillAlphas": 1,
      "lineAlpha": 1,
      "lineColor": "#fff",
      "lineThickness": 2,
      "cornerRadiusTop": 6,
      "cornerRadiusBottom": 6,
      "fillColorsField": "color2",
      "type": "column",
      "valueField": "y",
      "labelText": "[[value2]]",
      "balloonText": "[[value2]]",
      "labelPosition": "middle"
    }, {
      "fontSize": 15,
      "fillAlphas": 1,
      "lineAlpha": 1,
      "lineColor": "#fff",
      "lineThickness": 2,
      "cornerRadiusTop": 6,
      "cornerRadiusBottom": 6,
      "fillColorsField": "color3",
      "type": "column",
      "valueField": "y",
      "labelText": "[[value3]]",
      "balloonText": "[[value3]]",
      "labelPosition": "middle"
    }, {
      "fontSize": 15,
      "fillAlphas": 1,
      "lineAlpha": 1,
      "lineColor": "#fff",
      "lineThickness": 2,
      "cornerRadiusTop": 6,
      "cornerRadiusBottom": 6,
      "fillColorsField": "color4",
      "type": "column",
      "valueField": "y",
      "labelText": "[[value4]]",
      "balloonText": "[[value4]]",
      "labelPosition": "middle"
    }, {
      "fontSize": 15,
      "fillAlphas": 1,
      "lineAlpha": 1,
      "lineColor": "#fff",
      "lineThickness": 2,
      "cornerRadiusTop": 6,
      "cornerRadiusBottom": 6,
      "fillColorsField": "color5",
      "type": "column",
      "valueField": "y",
      "labelText": "[[value5]]",
      "balloonText": "[[value5]]",
      "labelPosition": "middle"
    } ],
    "columnWidth": 1,
    "categoryField": "x",
    "categoryAxis": {
      "axisAlpha": 0,
      "labelsEnabled": false,
      "guides": [{
        "category": 1,
        "label": ""
      }, {
        "category": 2,
        "label": ""
      }, {
        "category": 3,
        "label": ""
      }, {
        "category": 4,
        "label": ""
      }, {
        "category": 5,
        "label": ""
      }]
    },
    "valueAxes": [ {
      "axisAlpha": 0,
      "stackType": "regular",
      "labelsEnabled": false,
      "gridAlpha": 0,
      "tickLength": 0,
      "maximum": 5,
      "label": "Impact",
      "guides": [{
        "value": 0.5,
        "label": "Negligible"
      }, {
        "value": 1.5,
        "label": "Severe"
      }, {
        "value": 2.5,
        "label": "Moderate"
      }, {
        "value": 3.5,
        "label": "Minor"
      }, {
        "value": 4.5,
        "label": "Critical"
      }]
    } ]
  } );
}
  