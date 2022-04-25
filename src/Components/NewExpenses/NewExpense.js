import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

export default function NewExpense(props) {

    //saving the data one level up from child to parent - calling the function in child component
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}