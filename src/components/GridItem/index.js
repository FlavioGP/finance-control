import React from 'react';
import PropTypes from 'prop-types';
import {
  FaTrashAlt,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from 'react-icons/fa';
import * as C from './styles';

export default function GridItem({ item, onDelete }) {
  return (
    <C.Row>
      <C.Cell>{item.desc}</C.Cell>
      <C.Cell>{item.amount}</C.Cell>
      <C.Cell alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Cell>
      <C.Cell alignCenter pointer onClick={() => onDelete(item.id)}>
        <FaTrashAlt />
      </C.Cell>
    </C.Row>
  );
}

GridItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    desc: PropTypes.string,
    amount: PropTypes.string,
    expense: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
