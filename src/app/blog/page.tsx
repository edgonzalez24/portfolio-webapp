'use client'
import React from 'react';
import PostList from '../components/post/PostList';
import { useGetPostList } from '@/hooks/useGetPostList';

const Page = () => {
  
  const { data, isPending, isError } = useGetPostList();

  return (
    <main className="relative max-w-4xl mx-auto px-4 md:px-8 pb-10 pt-24">
      <h1 className="text-4xl font-bold sm:text-5xl md:mb-8 xl:text-6xl">
        <span>Blog</span>
      </h1>
      <p>
        Welcome to my programming corner, where I share my knowledge,
        experiences and advice about the fascinating world of programming.
      </p>
      {isPending && <p className='mt-10'>Loading...</p>}
      {!isPending && data && <PostList posts={data} />}
      {!isPending && !data && (
        <p className="mt-10">At the moment there are no posts published...</p>
      )}
    </main>
  );
}


export default Page;