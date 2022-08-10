import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import CardPost from '../components/Posts/CardPost';
import FeaturedPost from '../components/Posts/FeaturedPost';
import { formatDate } from '../helpers/formateDate';

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from Strapi
  const endPoint = [
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/posts?populate=*`),
    fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/api/posts?filters[featured][$eq]=true&populate=*`
    ),
  ];

  const {
    resPosts,
    resFeatured,
    isError = false,
  } = await Promise.all(endPoint).then(async ([postsData, featuredData]) => {
    if (!postsData.ok || !featuredData.ok) return { isError: true };

    return {
      resPosts: await postsData.json(),
      resFeatured: await featuredData.json(),
    };
  });

  const posts = resPosts.data;
  const featured = resFeatured.data;

  // Pass data to the page via props
  return { props: { posts, featured } };
}

export default function Home({ posts: initialPosts, featured }) {
  const [blogPost, setPosts] = useState(initialPosts);

  console.log(blogPost);
  return (
    <Layout>
      <header className='header-img'>
        <img src='theblogwhite.svg' className='m-auto' />
      </header>

      {/* featured post section */}
      <FeaturedPost featured={featured[0]} posts={blogPost} />

      {/* card post section */}
      <CardPost posts={blogPost} />
    </Layout>
  );
}
