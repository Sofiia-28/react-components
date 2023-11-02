import { Profile } from './Task 1/Profile';
import { Statistics } from './Task 2/Statistics';
import { FriendList } from './Task 3/FriendList';
import { TransactionHistory } from './Task 4/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import userData from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </div>
  );
};
