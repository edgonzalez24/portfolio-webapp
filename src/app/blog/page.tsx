'use client'

import { QueryClient, useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

const Page = () => {
  const params = 'fields[0]=title&fields[1]=preview&fields[2]=slug&fields[3]=publishedAt&populate[image][fields][0]=url';
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: async() => {
      const { data : { data } } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/posts?${params}`);
      return data as Post[];
    }
  });

  return (
    <main className="relative mx-auto max-w-screen-2xl px-4 md:px-8 pb-10 pt-24">
      <h1>Blog</h1>
      {data && <PostList posts={data} />}
    </main>
  );
}


export default Page;