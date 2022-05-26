import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./AllExpenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredExpenseYear] = useState("2020");

  const filterExpenseHandler = (selectedExpenseYear) => {
    console.log("expenses.js");
    console.log(selectedExpenseYear);
    setFilteredExpenseYear(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectedYearFilter={filterExpenseHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
