import { useQuery } from '@tanstack/react-query';

const fetchPostList = async() => {
  const params = 'fields[0]=title&fields[1]=preview&fields[2]=slug&fields[3]=publishedAt&populate[image][fields][0]=url';

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/posts?${params}`
    );
    const { data } = await response.json();
    return data as Post[];
  } catch (error) {
      throw new Error('No posts');
  }
}

const useGetPostList = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPostList(),
  });
};

export { useGetPostList, fetchPostList };