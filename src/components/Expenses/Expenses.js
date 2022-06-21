import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expensesDetails.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
 
  let expenseContent=<p>No Expenses Found</p>;

  if(filteredExpenses.length >0)
  {
    expenseContent=filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
