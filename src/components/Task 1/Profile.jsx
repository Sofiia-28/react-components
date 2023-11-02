import { Stats } from './Stats';
import {Avatar, Text, Wrapper, Title} from './Profile.styled'

export const Profile = ({ user: { username, tag, location, avatar,stats } }) => {
  return (
    <Wrapper>
      <div>
        <Avatar src={avatar} alt={username} width="200px"/>
        <Title $variant="main">{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>

      <Stats stats={stats} />
    </Wrapper>
  );
};
