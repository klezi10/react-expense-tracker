import React, { useState } from "react"
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
    const [titleChange, setTitleChange] = useState('')
    const [amountChange, setAmountChange] = useState('')
    const [dateChange, setDateChange] = useState('')

    function titleChangeHandler(event) {
        setTitleChange(event.target.value)
    }

    function amountChangeHandler(event) {
        setAmountChange(event.target.value)
    }

    function dateChangeHandler(event) {
        setDateChange(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        //+amountChange so that it fixes the bug of amounts being added as strings - but as numbers instead
        const expenseData = {
            title: titleChange,
            amount: +amountChange,
            date: new Date(dateChange)
        }
        props.onSaveExpenseData(expenseData)
        setTitleChange('')
        setAmountChange('')
        setDateChange('')
       
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleChange} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amountChange} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31" value={dateChange} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}