import ChartBar from "./ChartBar"
import "./Chart.css"

export default function Chart(props) {
    const chartPointsValues = props.chartPoints.map(chartPoint => chartPoint.value)
    const totalMax = Math.max(...chartPointsValues)

    return (
        <div className="chart">
            {props.chartPoints.map(chartPoint => 
                <ChartBar 
                    key={chartPoint.label}
                    value={chartPoint.value} 
                    maxValue={totalMax}
                    label={chartPoint.label}
                />)}
        </div>
    )
}