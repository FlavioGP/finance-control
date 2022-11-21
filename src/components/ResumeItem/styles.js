import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;

  @media (max-width: 750px) {
    span {
      font-size: 20px;
      text-align: center;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
