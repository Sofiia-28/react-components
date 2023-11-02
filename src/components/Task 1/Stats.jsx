import {Text, Wrapper, Number} from './Stats.styled'

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <Wrapper>
      <li>
        <Text>Followers</Text>
        <Number>{followers}</Number>
      </li>
      <li>
        <Text>Views</Text>
        <Number>{views}</Number>
      </li>
      <li>
        <Text>Likes</Text>
        <Number>{likes}</Number>
      </li>
    </Wrapper>
  );
};
