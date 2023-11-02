import styled from 'styled-components';

const getBgColor = props => {
  switch (props.$variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'grey';
  }
};

export const Item = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 0 12px;
  padding: 8px 0;

  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;
export const Status = styled.span`
  margin: auto 0 auto 8px;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background: ${getBgColor};
`