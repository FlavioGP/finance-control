import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
`;
export const Head = styled.thead``;
export const Body = styled.tbody``;
export const Row = styled.tr``;
export const Header = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? `${props.width}%` : 'auto')};
`;
