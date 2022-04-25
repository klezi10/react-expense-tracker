import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

export default function NewExpense() {

    //saving the data one level up from child to parent
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}