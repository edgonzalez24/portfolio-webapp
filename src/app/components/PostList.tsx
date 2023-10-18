import React from 'react';
import PostCard from './PostCard';
interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {

  let content;
  if(posts && posts.length > 0 ) {
    content = posts.map((post) => <PostCard key={post.id} post={post} />)
  }
  return <div className='mt-10 max-w-3xl mx-auto'>{content}</div>;
};

export default PostList;