import {Rows, Columns} from './TransactionItem.styled'


export const TransactionItem = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <Rows key={id}>
            <Columns>{type}</Columns>
            <Columns>{amount}</Columns>
            <Columns>{currency}</Columns>
          </Rows>
        );
      })}
    </tbody>
  );
};
