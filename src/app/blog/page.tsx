'use client'
import React from 'react';
import PostList from '../components/PostList';
import { useGetPostList } from '@/hooks/useGetPostList';

const Page = () => {
  
  const { data, isPending, isError } = useGetPostList();

  return (
    <main className="relative max-w-4xl mx-auto px-4 md:px-8 pb-10 pt-24">
      <h1>Blog</h1>
      {data && <PostList posts={data} />}
    </main>
  );
}


export default Page;