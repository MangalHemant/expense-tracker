import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const [formDisplay, isFormDisplay] = useState(false);

  function formDisplayHandler() {
    isFormDisplay(true);
  }

  function buttonDisplay()
  {
    isFormDisplay(false);
  }

  let forms = <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={buttonDisplay} />;

  if (formDisplay === false) {
    forms = <button onClick={formDisplayHandler}>Add Expense</button>;
  }

  return <div className="new-expense">{forms}</div>;
}

export default NewExpense;
