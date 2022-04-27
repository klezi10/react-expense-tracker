import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

export default function NewExpense(props) {
    const [loaded, setLoaded] = useState(false)

    //saving the data one level up from child to parent - calling the function in child component
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
        setLoaded(false)
    }

    function handleNewExpense(event) {
        setLoaded(true)
    }

    function cancelForm() {
        setLoaded(false)
    }

    return (
        loaded ?
        <div className="new-expense">
            <ExpenseForm 
                onCancel={cancelForm} 
                onSaveExpenseData={saveExpenseDataHandler} />
        </div>
        :
        <div className="new-expense">
            <button onClick={handleNewExpense}>Add new expense</button>
        </div>
    )
}