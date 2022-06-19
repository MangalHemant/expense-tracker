import { useState } from 'react'

import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
function Expenses(props) {


  const [filteredYear,setFilteredYear]=useState('2020');

  function filterChangeHandler(selectedYear)
  {
   
    setFilteredYear(selectedYear);
  }
  return (
    
      
    <Card className="expenses">
    <ExpensesFilter onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.expensesDetails[0].title}
        amount={props.expensesDetails[0].amount}
        date={props.expensesDetails[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesDetails[1].title}
        amount={props.expensesDetails[1].amount}
        date={props.expensesDetails[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesDetails[2].title}
        amount={props.expensesDetails[2].amount}
        date={props.expensesDetails[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesDetails[3].title}
        amount={props.expensesDetails[3].amount}
        date={props.expensesDetails[3].date}
      ></ExpenseItem>
    </Card>
    
  );
}

export default Expenses;
