import { FriendListItem } from './FriendListItem';
import {Wrapper} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </Wrapper>
  );
};
