import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import { useState } from "react"

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    
    function handleTitle() {
        setTitle('shampoo')
        console.log(title)
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={handleTitle}>Change title</button>
        </div>
    )
}