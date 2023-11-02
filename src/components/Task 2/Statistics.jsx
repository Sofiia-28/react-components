import {Text, Wrapper, Title, List, Number, Item} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {stats.map(format => {
          return (
            <Item $variant={format.id} key={format.id}>
              <Text>{format.label}</Text>
              <Number>{format.percentage}%</Number>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
