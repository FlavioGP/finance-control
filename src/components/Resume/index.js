import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';
import * as C from './styles';
import ResumeItem from '../ResumeItem';

export default function Resume({ income, expense, total }) {
  return (
    <C.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem
        title="Saida"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
}

Resume.propTypes = {
  income: PropTypes.string.isRequired,
  expense: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
