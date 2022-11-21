import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GridItem from '../GridItem';
import * as C from './styles';

export default function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
    toast.success('Excluido com sucesso!');
  };
  return (
    <C.Table>
      <C.Head>
        <C.Row>
          <C.Header width={40}>Descrição</C.Header>
          <C.Header width={40}>Valor</C.Header>
          <C.Header width={10} alignCenter>
            Tipo
          </C.Header>
          <C.Header width={10} />
        </C.Row>
      </C.Head>
      <C.Body>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Body>
    </C.Table>
  );
}

Grid.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setItens: PropTypes.func.isRequired,
};
