import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // array destucturing, first element - value (props.tilte), second - function.

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItem;

//THIS IS STATELESS (DUMB/PRESENTATIONAL) COMPONENT BECAUSE IT DOESN'T HAVE ANY STATE, JUST OUTPUT DATA
