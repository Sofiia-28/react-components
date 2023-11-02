import {Item, Status} from './FriendListItem.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
  <Item>
      <Status $variant={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  )
};
