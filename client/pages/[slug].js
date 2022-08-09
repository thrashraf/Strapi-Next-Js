import React from 'react';
import Layout from '../components/layout';
import { formatDate } from '../helpers/formateDate';
import ReactMarkdown from 'react-markdown';

export async function getServerSideProps({ params }) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/posts?filters[slug][$eq]=${params.slug}&populate=thumbnail,author.avatar`
  );

  const post = await req.json();

  return {
    props: { post: post.data[0] },
  };
}

function Details({ post }) {
  console.log(post);
  return (
    <Layout>
      <section className=' md:px-20 mt-10'>
        <header className='flex mb-20 '>
          <aside className='mr-10'>
            <img
              src={
                process.env.NEXT_PUBLIC_APIURL +
                post.attributes.author.data.attributes.avatar.data.attributes
                  .url
              }
              className='md:w-16 md:h-16 rounded-full object-cover'
            />
          </aside>

          <aside>
            <h1 className='font-bold'>
              {post.attributes.author.data.attributes.name}
            </h1>
            <p className='text-slate-400 my-2'>
              {post.attributes.author.data.attributes.job}
            </p>
            <p className='text-slate-400 '>
              Posted on {formatDate(post.attributes.createdAt)}
            </p>
          </aside>
        </header>

        <main>
          <article>
            <img
              src={
                process.env.NEXT_PUBLIC_APIURL +
                post.attributes.thumbnail.data.attributes.formats.small.url
              }
              className='m-auto rounded-md'
            />

            <article className='mt-20 '>
              <ReactMarkdown
                children={post.attributes.content}
                className='markdown'
              />
            </article>
          </article>
        </main>
      </section>
    </Layout>
  );
}

export default Details;
