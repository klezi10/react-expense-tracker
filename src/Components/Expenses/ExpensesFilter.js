import "./ExpensesFilter.css"

export default function ExpensesFilter(props) {

    function changeYearHandler(event) {
        const yearData = event.target.value
        props.onSettingExpensesFilter(yearData)
    }

    return (
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeYearHandler} value={props.value}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}