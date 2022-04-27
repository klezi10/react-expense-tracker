import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import "./Expenses.css"

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    function setExpensesFilterHandler(chosenYear) {
        const yearData = chosenYear
        setFilteredYear(yearData)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p className="expense-content">No expenses found.</p>
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter value={filteredYear} onSettingExpensesFilter={setExpensesFilterHandler} />
            {expenseContent}
        </Card>
    )
}