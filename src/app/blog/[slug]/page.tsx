/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { useGetPost } from '@/hooks/useGetPost';
import { useParams } from 'next/navigation';
import PostDetail from '@/app/components/post/PostDetail';
import Link from 'next/link';


const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug;
  const { data, isLoading, isFetching } = useGetPost(slug);
  const post: Post = data;

  return (
    <>
      {post && (
        <main className="relative max-w-4xl mx-auto px-4 md:px-8 pb-10 pt-24">
          <div className="mb-5">
            <Link href="/blog" className="inline-flex transition duration-500 ease-in-out hover:text-gray-400 tex-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Go Back
            </Link>
          </div>
          {post && <PostDetail post={post} />}
        </main>
      )}
    </>
  );
};

export default Page;
