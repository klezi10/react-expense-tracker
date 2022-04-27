import React, { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesList from "./ExpensesList"

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    function setExpensesFilterHandler(chosenYear) {
        const yearData = chosenYear
        setFilteredYear(yearData)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter 
                value={filteredYear} 
                onSettingExpensesFilter={setExpensesFilterHandler} 
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}