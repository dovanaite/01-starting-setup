import './ExpensesList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpensesList=props=>{
    if(props.items.length ===0){
      return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //prop, kuris leidžia identifikuoti Reactui individual items ir nurodyti, kur tiksliai jis turi būti. Tam naudojamas jau prieš tai sukurtas kintamasis "id".
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>

}

export default ExpensesList;


//KOMENTARAI:

// {filteredExpenses.length === 0 //naudojamas ternary operator (if neleidžiamas), jei nėra nieko, gaunama žnutė, jei yra - parodomas list'as
// ? <p>No expenses found.</p>
// : filteredExpenses.map((expense) => (
//     <ExpenseItem
//       key={expense.id} //prop, kuris leidžia identifikuoti Reactui individual items ir nurodyti, kur tiksliai jis turi būti. Tam naudojamas jau prieš tai sukurtas kintamasis "id".
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))}

//    {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//       {filteredExpenses.length > 0 && filteredExpenses.map((expense) =>...}
// galima rašyti ir šitaip (jei atitinka abi sąlygas - grąžins reikšmę, kuri parašyto po &&). Taip pat tekstą ar reikšmę, kurį turi grąžinti ternary operator,
// galima susikurti atskirai kaip kintamąjį (pvz, let expensesContent)

//       vietoj kodo apačioj mes pritaikom "map" metodą, kuris viršuj. {} rašom, nes tai yra reikšmė, kurią grąžins

//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />