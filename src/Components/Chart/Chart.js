import ChartBar from "./ChartBar"
import "./Chart.css"

export default function Chart(props) {
    return (
        <div className="chart">
            {props.chartPoints.map(chartPoint => <ChartBar key={chartPoint.id} />)}
        </div>
    )
}