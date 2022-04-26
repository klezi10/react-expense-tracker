import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses"
import NewExpense from "./Components/NewExpenses/NewExpense";

//moved the expenses list outside of the function
const initialExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];


export default function App() {
    const [expenses, setExpenses] = useState(initialExpenses)

    //moved data one more level up - from child to parent (NewExpense to App)
    function addExpenseHandler(expense) {
        console.log(expense)
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })
    }

    return (
        <div>
            <NewExpense onAddExpenseHandler={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    )
}