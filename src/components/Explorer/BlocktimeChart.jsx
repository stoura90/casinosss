import React from 'react'
// var Highcharts = require("highcharts/highstock");
import ReactHighstock from 'react-highcharts/dist/ReactHighstock'
import { takeRight } from 'lodash'
import counterpart from 'counterpart'

class BlocktimeChart extends React.Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (nextProps.blockTimes.length < 19) {
      return false
      // eslint-disable-next-line react/prop-types
    } else if (this.props.blockTimes.length === 0) {
      return true
    }

    // eslint-disable-next-line react/no-string-refs
    let chart = this.refs.chart ? this.refs.chart.chart : null
    if (chart) {
      let { blockTimes, colors } = this._getData(nextProps)
      let series = chart.series[0]
      let finalValue = series.xData[series.xData.length - 1]

      if (series.xData.length) {
        // console.log(chart, "series:", series.data, "finalValue:", finalValue);
        blockTimes.forEach((point) => {
          if (point[0] > finalValue) {
            series.addPoint(point, false, series.xData.length >= 30)
          }
        })

        chart.options.plotOptions.column.colors = colors

        chart.redraw()
        return false
      }
    }

    return (
      // eslint-disable-next-line react/prop-types
      nextProps.blockTimes[nextProps.blockTimes.length - 1][0] !==
        // eslint-disable-next-line react/prop-types
        this.props.blockTimes[this.props.blockTimes.length - 1][0] ||
      // eslint-disable-next-line react/prop-types
      nextProps.blockTimes.length !== this.props.blockTimes.length
    )
  }

  _getData() {
    // eslint-disable-next-line react/prop-types
    let { blockTimes, head_block } = this.props

    // eslint-disable-next-line react/prop-types
    blockTimes.filter((a) => {
      return a[0] >= head_block - 30
    })

    // eslint-disable-next-line react/prop-types
    if (blockTimes && blockTimes.length) {
      blockTimes = takeRight(blockTimes, 30)
    }

    // eslint-disable-next-line react/prop-types
    let colors = blockTimes.map((entry) => {
      if (entry[1] <= 5) {
        return '#50D2C2'
      } else if (entry[1] <= 10) {
        return '#A0D3E8'
      } else if (entry[1] <= 20) {
        return '#FCAB53'
      } else {
        return '#deb869'
      }
    })

    return {
      blockTimes,
      colors,
    }
  }

  render() {
    let { blockTimes, colors } = this._getData(this.props)

    let tooltipLabel = counterpart.translate('explorer.blocks.block_time')

    let config = {
      chart: {
        type: 'column',
        backgroundColor: 'rgba(255, 0, 0, 0)',
        spacing: [0, 0, 5, 0],
        height: 100,
      },
      title: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      rangeSelector: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      tooltip: {
        shared: false,
        formatter: function () {
          return tooltipLabel + ': ' + this.point.y + 's'
        },
      },
      series: [
        {
          name: 'Block time',
          data: blockTimes,
          color: '#50D2C2',
        },
      ],
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
        currentPriceIndicator: {
          enabled: false,
        },
      },
      plotOptions: {
        column: {
          animation: true,
          minPointLength: 3,
          colorByPoint: true,
          colors: colors,
          borderWidth: 0,
        },
      },
    }

    // eslint-disable-next-line react/no-string-refs
    return blockTimes.length ? <ReactHighstock ref="chart" config={config} /> : null
  }
}

export default BlocktimeChart
