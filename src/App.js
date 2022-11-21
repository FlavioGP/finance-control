import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyles';

import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  const data = localStorage.getItem('transactions');

  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const eExpense = amountExpense
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    const eIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const eTotal = Math.abs(eIncome - eExpense).toFixed(2);
    setExpense(eExpense);
    setIncome(eIncome);
    setTotal(eTotal);
  }, [transactionList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume
        income={`R$ ${income.toString()}`}
        expense={`R$ ${expense.toString()}`}
        total={`${Number(expense) > Number(income) ? '-' : ''}
                R$ ${total.toString()}`}
      />
      <Form
        handleAdd={handleAdd}
        transactionList={transactionList}
        setTransactionList={setTransactionList}
      />
      <GlobalStyle />
      <ToastContainer autoClose={2000} className="toast-container" />
    </>
  );
}

export default App;
