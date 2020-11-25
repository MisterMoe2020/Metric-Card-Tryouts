# Metric-Card-Tryouts
my first repository with an adaption of bizcharts

I used metric-card-bar-chart.tsx from HUI as a base, which is not in repo anymore, the file metric-card-stacked-bar.tsx has to be adopted to the directory

https://github.com/brudi/brudi/blob/main/packages/hui/components/metric-card

as following:

1. Add following code to file https://github.com/brudi/brudi/blob/main/packages/hui/components/metric-card/index.ts:

MetricCard.StackedBar = StackedBar

2. Add following code to the "type MemoCardComponent<P>" in file https://github.com/brudi/brudi/blob/main/packages/hui/components/metric-card/metric-card.tsx:

StackedBar: typeof StackedBar

3. Not sure: Change the file https://github.com/MisterMoe2020/Metric-Card-Tryouts/blob/main/metric-card-stacked-bar.tsx, so that it works in the new system without bizcharts?

