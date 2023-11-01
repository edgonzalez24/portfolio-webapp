/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import PostContent from './PostContent';
import PostShare from './PostShare';

interface Props {
  post: Post
}
const PostDetail = ({ post }: Props) => {
  return (
    <div className="bg-secondary md:px-8 px-5 py-10 rounded-md border border-gray-500 fade-in">
      <h1 className="text-4xl font-bold">
        <span>{post?.attributes.title}</span>
      </h1>
      <div className="my-5">
        <img
          className="rounded-md"
          src={`${process.env.NEXT_PUBLIC_STRAPI}${post.attributes.image.data[0].attributes.url}`}
          alt={post?.attributes.title}
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <span className="text-xs mb-5 sm:mb-0">
          <b>Published:</b>{' '}
          {moment(post.attributes.publishedAt).format('MMMM DD, YYYY ● h:mm A')}
        </span>
        <PostShare
          title={post?.attributes.title}
          slug={post?.attributes.slug}
        />
      </div>
      <div className="mt-10">
        <PostContent content={post.attributes.content} />
      </div>
    </div>
  );
}

export default PostDetail;