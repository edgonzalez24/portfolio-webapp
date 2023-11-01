import React from 'react';
import PostCard from '../PostCard';
import { useTransition, animated } from '@react-spring/web';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {

  const transition = useTransition(posts, {
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
  });

  return (
    <div className="my-10">
      {transition((style, item) => (
        <animated.div style={style} key={item.id}>
          <PostCard post={item} />
        </animated.div>
      ))}
    </div>
  );
};

export default PostList;