import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import "./Expenses.css"

export default function Expenses(props) {
    const [yearChange, setYearChange] = useState('2020')

    function setExpensesFilterHandler(chosenYear) {
        const yearData = chosenYear
        console.log(yearData)
        setYearChange(yearData)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter value={yearChange} onSettingExpensesFilter={setExpensesFilterHandler} />
            {props.items.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
            
            {/* what it looked like hardcoded before map */}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    )
}