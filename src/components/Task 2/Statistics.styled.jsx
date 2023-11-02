import styled from 'styled-components';

const getBgColor = props => {
  switch (props.$variant) {
    case 'id-1':
      return getRandomHexColor();
    case 'id-2':
      return getRandomHexColor();
    case 'id-3':
      return getRandomHexColor();
    case 'id-4':
      return getRandomHexColor();
    case 'id-5':
      return getRandomHexColor();
    default:
      return 'blue';
  }
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Wrapper = styled.section`
  background-color: white;
  text-align: center;
  width: 300px;
  margin-left: 40px;
`;
export const Title = styled.h2`
  padding-top: 16px;
  margin: 0px;
  color: grey;
  text-transform: uppercase;
  font-size: 20px;
`;
export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 16px 0 0 0;
`;
export const Item = styled.li`
  flex-basis: calc(100% / 5);
  background-color: ${getBgColor};
  color: white;
`;
export const Text = styled.span`
  display: block;
  font-size: 14px;
`;
export const Number = styled.span`
  display: block;
  font-size: 24px;
`;
