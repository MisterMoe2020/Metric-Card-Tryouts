import React from 'react'
import useTheme from '../styles/use-theme'
import withDefaults from '../utils/with-defaults'
import {
  defaultMetricCardProps,
  MetricCardComponentProps
} from '../metric-card/metric-card-types'
import { loadBizCharts } from '../metric-card/metric-card-utils'

import { Loading } from '@brudi/hui'

const defaultProps = {
  ...defaultMetricCardProps,
  color: "#5b8ff9",
}

const MetricCardStackedBar: React.FC<MetricCardComponentProps> = ({
  color,
  className,
  data,
  position,
}) => {
  const theme = useTheme()

  const chart = loadBizCharts(({ bizcharts }) => {
    return (
      <bizcharts.Chart height={300} padding="auto" data={data} autoFit>
        <bizcharts.Interval
          adjust={[
            {
              type: "stack",
            },
          ]}
          color={color}
          position={position}
        />
        <bizcharts.Tooltip shared />
      </bizcharts.Chart>
    )
  }, Loading)

  return (
    <div className={`bar-chart ${className}`}>
      {chart}
      <style jsx>{`
        .bar-chart :global(.g2-tooltip) {
          background-color: ${theme.palette.background} !important;
          box-shadow: ${theme.palette.accents_2} 0 0 10px !important;
          color: ${theme.palette.accents_5} !important;
        }
      `}</style>
    </div>
  )
}

const MemoCardContent = React.memo(MetricCardStackedBar)

export default withDefaults(MemoCardContent, defaultMetricCardProps)
