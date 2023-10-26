/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import PostContent from './PostContent';

interface Props {
  post: Post
}
const PostDetail = ({ post }: Props) => {
  return (
    <div className="bg-secondary px-8 py-10 rounded-md border border-gray-500">
      <h1 className="text-4xl font-bold">
        <span>{post?.attributes.title}</span>
      </h1>
      <div className="my-5">
        <img
          className="rounded-md"
          src={`${process.env.NEXT_PUBLIC_STRAPI}${post.attributes.image.data[0].attributes.url}`}
          alt={post?.attributes.title}
        />
      </div>
      <span className="text-xs">
        <b>Published:</b>{' '}
        {moment(post.attributes.publishedAt).format('MMMM DD, YYYY ● h:mm A')}
      </span>
      <div className="mt-10">
        <PostContent content={post.attributes.content} />
      </div>
    </div>
  );
}

export default PostDetail;