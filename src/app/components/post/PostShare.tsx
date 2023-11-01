import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
import { ShareIcon } from '@heroicons/react/24/outline';

interface Props {
  slug: string;
  title: string;
}

const PostShare = ({slug, title}: Props) =>  {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <span className='inline-flex items-center text-sm'>
        <ShareIcon className="h-4 w-4 mr-1 text-white" aria-hidden="true" />
        Share
      </span>
      <FacebookShareButton
        url={`${window.location.origin}/blog/${slug}`}
        quote={'next-share is a social share buttons for your next React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={`${window.location.origin}/blog/${slug}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={`${window.location.origin}/blog/${slug}`}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}

export default PostShare;