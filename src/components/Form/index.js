import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as C from './styles';

import Grid from '../Grid';

export default function Form({
  handleAdd,
  transactionList,
  setTransactionList,
}) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc && !amount) {
      toast.error('Informe a descrição e o valor!');
      return;
    }
    if (!desc) {
      toast.error('Informe a descrição!');
      return;
    }
    if (!amount) {
      toast.error('Informe o valor');
    }
    if (amount < 1) {
      toast.error('O valor precisa ser um numero positivo');
      return;
    }

    const transaction = {
      id: generateID(),
      desc,
      amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount('');
  };

  return (
    <>
      <C.Container id="form">
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            name="group1"
            defaultChecked
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saida</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADCIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionList} setItens={setTransactionList} />
    </>
  );
}

Form.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  transactionList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTransactionList: PropTypes.func.isRequired,
};
