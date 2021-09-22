<template>
    <div class="flex flex-col h-screen">
        <h1>Mood Ring</h1>
        <div id="chartdiv" class="chartdiv flex-1"></div>
    </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import '@amcharts/amcharts4/charts';
import spotifyService from "@/model/spotifyService.js";

export default {
    mounted: async function() {
        this.data = await spotifyService.getMoodRing();
        console.log(this.data);
        this.renderChart();
    },
    data: function() {
        return {
            chart: null,
            data: []
        }
    },
    methods: {
        renderChart: function() {
            if (this.chart) {
                this.chart.dispose();
            }
            this.chart = am4core.create("chartdiv", am4charts.XYChart);

            this.chart.xAxes.push(new am4charts.DateAxis());
            this.chart.yAxes.push(new am4charts.ValueAxis());

            const series = this.chart.series.push(new am4charts.LineSeries());
            series.stroke = am4core.color("#ff0000"); // red
            series.strokeWidth = 3; // 3px
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.data = this.data.map(dataPoint => {
                return {
                    date: dataPoint.date,
                    value: dataPoint.feature.danceability
                }
            })

            const series2 = this.chart.series.push(new am4charts.LineSeries());
            series2.stroke = am4core.color("#0000ff"); // blue
            series2.strokeWidth = 3; // 3px
            series2.dataFields.dateX = "date";
            series2.dataFields.valueY = "value";
            series2.data = this.data.map(dataPoint => {
                return {
                    date: dataPoint.date,
                    value: dataPoint.feature.danceabilitySmooth
                }
            })

            let scrollbar = new am4charts.XYChartScrollbar();
            scrollbar.height = 100;
            // scrollbar.background.fill = am4core.color(config.theme.mediumColor);
            // scrollbar.startGrip.background.fill = am4core.color(config.theme.mediumColor);
            // scrollbar.endGrip.background.fill = am4core.color(config.theme.mediumColor);
            this.chart.scrollbarX = scrollbar;
            this.chart.scrollbarX.parent = this.chart.bottomAxesContainer; // move it below the chart
            // = am4core.createFromConfig(
            //     // IMPORTANT: for performance considerations amCharts performs some 
            //     // operations directly on the passed configuration object. For this
            //     // reason, in cases when you need the configuration to remain intact
            //     // after rendering a chart, you should never pass a chart configuration
            //     // object directly to am4core.createFromConfig and pass a copy instead.
            //     JSON.parse(JSON.stringify(chartConfiguration)), 
            //     'chartdiv'
            // );
        }
    },
    unmounted: function() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
}
</script>
