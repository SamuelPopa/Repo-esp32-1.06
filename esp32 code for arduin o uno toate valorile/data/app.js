document.addEventListener('DOMContentLoaded', function () {
   // Base chart configuration for power factor charts
    var basePowerChartOptions = {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['P1WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100
        },
        series: [{
            name: 'Power',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    };

    // Creating individual power factor charts
    var powerChart1 = Highcharts.chart('container-Pf', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Puterea1'
        },
        xAxis: {
            categories: ['P1WATT']
        }
    }));

    var powerChart2 = Highcharts.chart('container2-Pf2', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Puterea2'
        },
        xAxis: {
            categories: ['P2WATT']
        }
    }));

    var powerChart3 = Highcharts.chart('container3-Pf3', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Puterea3'
        },
        xAxis: {
            categories: ['P3WATT']
        }
    }));

  // Base chart configuration for voltage gauges
    var baseVoltageGaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 300,
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Tensiune',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:15px">{y}</span><br/><span style="font-size:12px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }],
        credits: {
            enabled: false
        }
    };

    // Creating individual voltage gauges
    var voltageGauge1 = Highcharts.chart('container-voltage', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Voltaj 1'
        }
    }));

    var voltageGauge2 = Highcharts.chart('container2-voltage2', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Voltaj 2'
        }
    }));

    var voltageGauge3 = Highcharts.chart('container3-voltage3', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Voltaj 3'
        }
    }));

   // Base chart configuration for current gauges
    var baseCurrentGaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:15px">{y}</span><br/><span style="font-size:12px;opacity:0.4">A</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }],
        credits: {
            enabled: false
        }
    };

    // Creating individual current gauges
    var currentGauge1 = Highcharts.chart('container-current', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent 1'
        }
    }));

    var currentGauge2 = Highcharts.chart('container2-current2', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent 2'
        }
    }));

    var currentGauge3 = Highcharts.chart('container3-current3', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent 3'
        }
    }));

    // Power Distribution Chart (W)
    var powerDistributionChart = Highcharts.chart('containerPW', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true, // Show data labels
                    format: '<b>{point.name}</b>: {point.y}', // Display name and value
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Putere W',
            data: []
        }]
    });

    // Power Distribution Chart (VAR)
    var powerVarChart1 = Highcharts.chart('containerPVAR1', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii1(VAR)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true, // Show data labels
                    format: '<b>{point.name}</b>: {point.y}', // Display name and value
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Power (VAR)',
            data: []
        }],
        colors: ['#ff9999', '#ffcc99', '#99ff99'] // Different color palette for Power (VAR) chart
    });

    // Phase Angle Chart
    var phaseAngleChart = Highcharts.chart('containerungifaze', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Unghi dintre faze'
        },
        pane: {
            startAngle: 90,
            endAngle: 450,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // Additional pane pt marcaje 360 grade 
                background: null,
                outerRadius: '105%',
                innerRadius: '103%',
                backgroundColor: '#DDD'
            }]
        },
        yAxis: {
            min: 0,
            max: 360,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'Degrees'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // Green
            }, {
                from: 120,
                to: 240,
                color: '#DDDF0D' // Yellow
            }, {
                from: 240,
                to: 360,
                color: '#DF5353' // Red
            }]
        },
        series: [{
            name: 'Phase AB',
            data: [0],
            color: 'red',
            tooltip: {
                valueSuffix: ' degrees'
            }
        }, {
            name: 'Phase AC',
            data: [0],
            color: 'blue',
            tooltip: {
                valueSuffix: ' degrees'
            }
        }, {
            name: 'Phase BC',
            data: [0],
            color: 'green',
            tooltip: {
                valueSuffix: ' degrees'
            }
        }]
    });

var phaseAngleChartI = Highcharts.chart('containerungifazecurenti', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Unghi Curenti'
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{}, {}, {}, {}] //arrays goale ca  background-ul default sa nu mai fie
    },
    yAxis: {
        min: 0,
        max: 360,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Degrees'
        },
        plotBands: [] // Remove colored plot bands
    },
    series: [{
        name: 'I1-I2',
        data: [0],
        color: '#FF0000', // Red
        dial: {
            backgroundColor: '#FF0000',
            baseWidth: 5, // Slimmer needle
            topWidth: 1,
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'I1-I3',
        data: [0],
        color: '#00FF00', // Green
        dial: {
            backgroundColor: '#00FF00',
            baseWidth: 5, // Slimmer needle
            topWidth: 1, 
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'I2-I3',
        data: [0],
        color: '#0000FF', // Blue
        dial: {
            backgroundColor: '#0000FF',
            baseWidth: 5, // Slimmer needle
            topWidth: 1, //  needle - a more modern look
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
    }]
});


 var temperatureChart = Highcharts.chart('container-temperature', {
        chart: {
            type: 'bar',
            inverted: true,
        },
        title: {
            text: 'Temperatura'
        },
        xAxis: {
            categories: ['DSP']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: ''
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y} °C',
                    inside: true,
                    color: '#000000',
                    style: {
                        textOutline: 'none'
                    }
                }
            }
        },
        series: [{
            name: '',
            data: [{
                y: 0,
                color: '#00ff00'
            }], // Initial value with color
        }],
        credits: {
            enabled: false
        }
    });


     
    var realtimePlot = Highcharts.chart('realtime-plot', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, 
            marginRight: 10,
            events: {
                load: function () {
                    // Functie pt date updatate
                    var series = this.series;
                    setInterval(function () {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send('get_data'); // Request new data from server
                        }
                    }, 5000); // freq cu Arduino data tx trimise
                }
            }
        },
        title: {
            text: 'Valori efective'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: true
        },
        series: [{
            name: 'V1rms',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
        },
        
        {
            name: 'V2rms',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'V3rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'I1rms ',
            data: (function () {
               
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'I2rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        {
            name: 'I3rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'Inull ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'P1kW ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'P2kW ',
            data: (function () {
                // generate an array of initial data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        {
            name: 'P3kW ',
            data: (function () {
                // generate an array of initial data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P1kVAR ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P2kVAR ',
            data: (function () {
                // generate an array of initial data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P3kVAR',
            data: (function () {
                // generate an array of initial data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random() * (0.9 - 0) + 0
                        });
                        }
                return data;
            }())
        }]
    });

    // chart pentru small gauges
    var smallGaugeOptions = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: '#FFFFFF',
            width: 350,
            height: 270
        },
        title: {
            text: ''
        },
        pane: {
            center: ['35%', '50%'],
            startAngle: -90,
            endAngle: 90,
            background: null
        },
        yAxis: {
            min: 0,
            max: 270,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: ''
            },
            plotBands: []
        },
        series: [{
            name: 'Angle',
            data: [0],
            tooltip: {
                valueSuffix: ' degrees'
            }
        }]
    };

    // V1-I1 Gauge
    var gaugeV1I1 = Highcharts.chart('container_angle_V1_I1', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'V1-I1',
            
        }
    }));

    // V2-I2 Gauge
    var gaugeV2I2 = Highcharts.chart('container_angle_V2_I2', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'V2-I2'
        }
    }));

    // V3-I3 Gauge
    var gaugeV3I3 = Highcharts.chart('container_angle_V3_I3', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'V3-I3'
        }
    }));

   var ws = new WebSocket('ws://' + window.location.hostname + '/ws');
    

    const standardCurrentInput = document.getElementById('standardCurrent');
    const percentageDifferences = [];

    function updatePercentageDifference(standardCurrent, currentValue) {
        const percentageDifference = ((currentValue / standardCurrent) - 1) * 100;
        return percentageDifference.toFixed(2);
    }


    // Conexiunea WebSocket si data update
    var ws = new WebSocket('ws://' + window.location.hostname + '/ws');
    ws.onmessage = function (event) {
        var data = JSON.parse(event.data);
        
        document.getElementById('ID').textContent = data.ID;
        document.getElementById('CTR').textContent = data.CTR;
        document.getElementById('fHz').textContent = data.fHz + ' Hz';
        document.getElementById('InullA').textContent = data.InullA;
        document.getElementById('Isum').textContent = data.Isum;
        document.getElementById('temperature').textContent = data.TbC;


        const standardCurrent = parseFloat(standardCurrentInput.value);

        const currentValue1 = data.I1rmsA;
        const percentage1 = updatePercentageDifference(standardCurrent, currentValue1);
        document.getElementById('percentage1').textContent = percentage1;
        percentageDifferences[0] = parseFloat(percentage1);

        const currentValue2 = data.I2rmsA;
        const percentage2 = updatePercentageDifference(standardCurrent, currentValue2);
        document.getElementById('percentage2').textContent = percentage2;
        percentageDifferences[1] = parseFloat(percentage2);

        const currentValue3 = data.I3rmsA;
        const percentage3 = updatePercentageDifference(standardCurrent, currentValue3);
        document.getElementById('percentage3').textContent = percentage3;
        percentageDifferences[2] = parseFloat(percentage3);

        const maxPercentage = Math.max(...percentageDifferences);
        document.getElementById('maxPercentage').value = maxPercentage.toFixed(2);

        
        //  Tensiune Gauges Update
        voltageGauge1.series[0].points[0].update(parseFloat(data.V1rmsV));
        voltageGauge2.series[0].points[0].update(parseFloat(data.V2rmsV));
        voltageGauge3.series[0].points[0].update(parseFloat(data.V3rmsV));

        //  Current Gauges Update
        currentGauge1.series[0].points[0].update(parseFloat(data.I1rmsA));
        currentGauge2.series[0].points[0].update(parseFloat(data.I2rmsA));
        currentGauge3.series[0].points[0].update(parseFloat(data.I3rmsA));

        //  Power Factor Charts Update
        powerChart1.series[0].setData([parseFloat(data.P1WATT)]);
        powerChart2.series[0].setData([parseFloat(data.P2WATT)]);
        powerChart3.series[0].setData([parseFloat(data.P3WATT)]);

        // Update Power Distribution Charts
        powerDistributionChart.series[0].setData([
            { name: 'P1', y: data.P1WATT },
            { name: 'P2', y: data.P2WATT },
            { name: 'P3', y: data.P3WATT }
        ]);
        powerVarChart1.series[0].setData([
            { name: 'P1', y: data.P1VAR },
            { name: 'P2', y: data.P2VAR },
            { name: 'P3', y: data.P3VAR }
        ]);

        // Update Phase Angle Chart
        phaseAngleChart.series[0].setData([data.uUab]);
        phaseAngleChart.series[1].setData([data.uUac]);
        phaseAngleChart.series[2].setData([data.uUbc]);

        //Update Phase Current Angle Chart
        phaseAngleChartI.series[0].setData([data.uIab]);
        phaseAngleChartI.series[1].setData([data.uIac]);
        phaseAngleChartI.series[2].setData([data.uIbc]);

        // Update angle gauges V-I
        gaugeV1I1.series[0].setData([parseFloat(data.uUIa)]);
        gaugeV2I2.series[0].setData([parseFloat(data.uUIb)]);
        gaugeV3I3.series[0].setData([parseFloat(data.uUIc)]);

        // Temperature Bar Chart  Update
        //temperatureChart.series[0].setData([parseFloat(data.TbC)]);

        // Determine color based on temperature value
        var temperatureValue = parseFloat(data.TbC);
        var color;
        if (temperatureValue <= 30) {
            color = '#00ff00'; // Green
        } else if (temperatureValue <= 70) {
            color = '#ffff00'; // Yellow
        } else {
            color = '#ff0000'; // Red
        }

        // Update Temperature Bar Chart
        temperatureChart.series[0].setData([{
            y: temperatureValue,
            color: color
        }]);
        
        // Update real-time plot with voltage and current data
        var currentTime = new Date(); //  local time
        var x = currentTime.getTime(); // time in milliseconds 
        
       

        realtimePlot.series[0].addPoint([x, parseFloat(data.V1rmsV)], true, true);
        realtimePlot.series[1].addPoint([x, parseFloat(data.V2rmsV)], true, true);
        realtimePlot.series[2].addPoint([x, parseFloat(data.V3rmsV)], true, true);
        realtimePlot.series[3].addPoint([x, parseFloat(data.I1rmsA)], true, true);
        realtimePlot.series[4].addPoint([x, parseFloat(data.I2rmsA)], true, true);
        realtimePlot.series[5].addPoint([x, parseFloat(data.I3rmsA)], true, true);
        realtimePlot.series[6].addPoint([x, parseFloat(data.InullA)], true, true);
        realtimePlot.series[7].addPoint([x, parseFloat(data.P1WATT)], true, true);
        realtimePlot.series[8].addPoint([x, parseFloat(data.P2WATT)], true, true);
        realtimePlot.series[9].addPoint([x, parseFloat(data.P3WATT)], true, true);
        realtimePlot.series[10].addPoint([x, parseFloat(data.P1VAR)], true, true);
        realtimePlot.series[11].addPoint([x, parseFloat(data.P2VAR)], true, true);
        realtimePlot.series[12].addPoint([x, parseFloat(data.P3VAR)], true, true);



        // Update date and time display
        document.getElementById('currentDateTime').textContent = currentTime.toLocaleString();
    };

    const initialCurrentValue = parseFloat(document.getElementById('I1rmsA').textContent);
    const initialStandardCurrent = parseFloat(standardCurrentInput.value);
    updatePercentageDifference(initialStandardCurrent, initialCurrentValue);

   
    //Call-ul initial ca sa afisez data si timpul imediat
    document.getElementById('currentDateTime').textContent = new Date().toLocaleString();
});

