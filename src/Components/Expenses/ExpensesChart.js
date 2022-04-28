import Chart from "../Chart/Chart"

export default function ExpensesChart(props) {
    const chartPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    //looping over the filtered expenses and pulling out their month
    //attaching month against the chartPoints array and adding the amount to the value
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()
        chartPoints[expenseMonth].value += expense.amount
    }

    return <Chart chartPoints={chartPoints} />
}