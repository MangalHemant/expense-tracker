import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 942,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 297,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 400,
    date: new Date(2021, 5, 12),
  },
];


function App() {


  const [expenses,setExpenses]=useState(dummy_expenses)
  function addExpenseHandler(expense) {
    
    setExpenses((prevExpenses) =>{
    return [expense,...prevExpenses]})
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesDetails={expenses} />
    </div>
  );
}

export default App;
