/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react';
import { useGetPost } from '@/hooks/useGetPost';
import { useParams } from 'next/navigation';
import PostDetail from '@/app/components/post/PostDetail';


const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug;
  const { data, isLoading, isFetching } = useGetPost(slug);
  const post: Post = data;

  return (
    <>
      {post && (
        <main className="relative max-w-4xl mx-auto px-4 md:px-8 pb-10 pt-24">
          {post && <PostDetail post={post} />}
        </main>
      )}
    </>
  );
};

export default Page;
