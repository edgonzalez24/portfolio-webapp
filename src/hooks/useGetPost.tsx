import { useQuery } from '@tanstack/react-query';

const fetchPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/posts?filters[slug][$eq]=${slug}&populate[image][fields][0]=url`
    );
    const { data } = await response.json();
    return data && (data[0] as Post);
  } catch (err) {
    throw new Error('No post found for the given slug');
  }
};

const useGetPost = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPostBySlug(slug),
  });
};

export { useGetPost, fetchPostBySlug}