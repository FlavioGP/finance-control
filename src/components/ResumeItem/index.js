import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function ResumeItem({ title, Icon, value }) {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
};
