import { TransactionItem } from './TransactionItem';
import {Rows, Table, Columns} from './TransactionHistory.styled'

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <Rows>
          <Columns>Type</Columns>
          <Columns>Amount</Columns>
          <Columns>Currency</Columns>
        </Rows>
      </thead>
      <TransactionItem transactions={transactions} />
    </Table>
  );
};
