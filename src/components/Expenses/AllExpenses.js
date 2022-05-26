import React, { useState } from "react";
import Card from "../UI/Card";
import "./AllExpenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredExpenseYear] = useState("2020");

  const filterExpenseHandler = (selectedExpenseYear) => {
    console.log(selectedExpenseYear);
    setFilteredExpenseYear(selectedExpenseYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //grąžina true, jei sutampa pasirinkti metai su metais, kurie yra "filtered year". Tada tuos filteredExpenses map'inam 29*oj eilutėj

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectedYearFilter={filterExpenseHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
