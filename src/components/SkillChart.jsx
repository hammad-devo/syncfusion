import React, { useState } from 'react'
import Chart from 'react-apexcharts'
var series = 
{
  "monthDataSeries1": {
    "prices": [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      2340.7,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries2": {
    "prices": [
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      6487.7,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries3": {
    "prices": [
      7114.25,
      7126.6,
      7116.95,
      7203.7,
      7933.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries4": {
    "prices": [
      7514.25,
      7116.6,
      4116.95,
      9203.7,
      7283.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries5": {
    "prices": [
      7234.25,
      7476.6,
      8126.95,
      4203.7,
      4233.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries6": {
    "prices": [
      1114.25,
      9126.6,
      3116.95,
      2203.7,
      5233.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries7": {
    "prices": [
      4114.25,
      6126.6,
      2116.95,
      4203.7,
      1233.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  },
  "monthDataSeries8": {
    "prices": [
      4114.25,
      3126.6,
      6116.95,
      5203.7,
      3233.75,
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
    ]
  }
}
const SkillChart = () => {
    const [chartoptions,setChartOptions]=useState({
          
      series: [{
        name:'python',
        data: series.monthDataSeries1.prices
      },
      {
        name:"javascript",
        data:series.monthDataSeries2.prices
      },
      {
        name:'typescript',
        data:series.monthDataSeries3.prices
      },
      
      {
        name:'c',
        data:series.monthDataSeries4.prices
      },
      
      {
        name:'c++',
        data:series.monthDataSeries5.prices
      },
      
      {
        name:'java',
        data:series.monthDataSeries6.prices
      },
      
      {
        name:'php',
        data:series.monthDataSeries7.prices
      },
      
      {
        name:'react',
        data:series.monthDataSeries8.prices
      }
    ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2'
        },
        annotations: {
        
         
          points: [ {
            x: new Date(series.monthDataSeries1.dates[series.monthDataSeries1.dates.length-1]).getTime(),
            y: series.monthDataSeries1.prices[series.monthDataSeries1.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/python.png'
            },
          
          },
          {
            x:new Date(series.monthDataSeries2.dates[series.monthDataSeries2.dates.length-1]).getTime(),
            y: series.monthDataSeries2.prices[series.monthDataSeries2.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/javascript.png'
            },
           
          }, {
            x: new Date(series.monthDataSeries3.dates[series.monthDataSeries3.dates.length-1]).getTime(),
            y: series.monthDataSeries3.prices[series.monthDataSeries3.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/typescript.png'
            },
          
          },
          {
            x: new Date(series.monthDataSeries4.dates[series.monthDataSeries4.dates.length-1]).getTime(),
            y: series.monthDataSeries4.prices[series.monthDataSeries4.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/c.png'
            },
          
          },
          {
            x: new Date(series.monthDataSeries5.dates[series.monthDataSeries5.dates.length-1]).getTime(),
            y: series.monthDataSeries5.prices[series.monthDataSeries5.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/c++.png'
            },
          
          },
          {
            x: new Date(series.monthDataSeries6.dates[series.monthDataSeries6.dates.length-1]).getTime(),
            y: series.monthDataSeries6.prices[series.monthDataSeries6.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/java.png'
            },
          
          },
          {
            x: new Date(series.monthDataSeries7.dates[series.monthDataSeries7.dates.length-1]).getTime(),
            y: series.monthDataSeries7.prices[series.monthDataSeries7.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/php.png'
            },
          
          },
          {
            x: new Date(series.monthDataSeries8.dates[series.monthDataSeries8.dates.length-1]).getTime(),
            y: series.monthDataSeries8.prices[series.monthDataSeries8.prices.length-1],
            marker: {
              size: 0
            },
            image: {
              path: '/assets/react.png'
            },
          
          },

          
        ]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        title: {
          text: 'Line with Annotations',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
      },
    
    
    })    
  return (
    <Chart options={chartoptions.options} series={chartoptions.series} type="line" width={'100%'} height={520}/>
  )
}

export default SkillChart