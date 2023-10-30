/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import moment from 'moment';

interface Props {
  post: Post
}
const PostCard = ({ post }: Props) => {
  return (
    <div className="grid mb-10">
      <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row bg-secondary border-gray-500">
        <Link
          href={`/blog/${post.attributes.slug}`}
          className="group relative block h-48 w-full shrink-0 self-start overflow-hidden md:h-full md:w-32 lg:w-48"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI}${post.attributes.image.data[0].attributes.url}`}
            loading="lazy"
            alt={post.attributes.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            width='100%'
            height='100%'
          />
        </Link>

        <div className="flex flex-col w-full md:gap-2 p-4 lg:p-6">
          <span className="text-sm text-gray-200">
            {moment(post.attributes.publishedAt).format(
              'MMMM DD, YYYY ● h:mm A'
            )}
          </span>

          <h2 className="text-xl font-bold">
            <Link
              href={`/blog/${post.attributes.slug}`}
              className="transition duration-500 ease-in-out hover:opacity-75 title-post"
            >
              <span>{post.attributes.title}</span>
            </Link>
          </h2>

          <p className="text-gray-300">{post.attributes.preview}</p>

          <div>
            <Link
              href={`/blog/${post.attributes.slug}`}
              className="font-semibold text-white transition duration-500 ease-in-out hover:text-gray-400 underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
