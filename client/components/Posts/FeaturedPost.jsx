import { formatDate } from '../../helpers/formateDate';
import Link from 'next/link';

function FeaturedPost({ featured, posts }) {
  console.log(featured);
  return (
    <main className='hero-container'>
      <article className='hero-left-container cursor-pointer'>
        <img
          src={
            process.env.NEXT_PUBLIC_APIURL +
            featured.attributes.thumbnail.data.attributes.formats.large.url
          }
          className='w-full object-cover rounded-md'
        />
        <p className='date'>{formatDate(featured.attributes.createdAt)}</p>
        <Link href={featured.attributes.slug}>
          <h1 className='text-[35px] font-semibold hover:underline'>
            {featured.attributes.title}
          </h1>
        </Link>
        <p className=' text-gray-500 font-light leading-7 mt-5'>
          {featured.attributes.headline}
        </p>
      </article>

      <aside className='hero-left-container'>
        {posts.slice(1, 4).map((post) => (
          <article className='hero-row'>
            <aside className='w-[41%] pr-5 '>
              <img
                src={
                  process.env.NEXT_PUBLIC_APIURL +
                  post.attributes.thumbnail.data.attributes.formats.small.url
                }
                className='w-full h-full object-cover rounded-md'
              />
            </aside>

            <aside className='w-[58%]'>
              <span className='date'>
                {formatDate(post.attributes.createdAt)}
              </span>
              <Link href={post.attributes.slug}>
                <h1 className='hero-heading'>{post.attributes.title}</h1>
              </Link>
            </aside>
          </article>
        ))}
      </aside>
    </main>
  );
}

export default FeaturedPost;
