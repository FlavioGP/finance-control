import styled from 'styled-components';

export const Row = styled.tr``;
export const Cell = styled.td`
  padding-top: 10px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
    cursor: ${(props) => props.pointer && 'pointer'};
  }
`;
