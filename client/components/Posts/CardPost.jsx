import { formatDate } from '../../helpers/formateDate';
import Link from 'next/link';

function CardPost({ posts }) {
  return (
    <main>
      <h1 className='section-title'>Editor's pick</h1>
      <section className='grid-container'>
        {posts.map((post) => (
          <section className='card-post'>
            <aside>
              <img
                src={
                  process.env.NEXT_PUBLIC_APIURL +
                  post.attributes.thumbnail.data.attributes.formats.small.url
                }
                className='w-full h-[250px] object-cover rounded-md'
              />
            </aside>

            <aside className=''>
              <p className='date'>{formatDate(post.attributes.createdAt)}</p>
              <Link href={post.attributes.slug}>
                <h1 className='hero-heading'>{post.attributes.title}</h1>
              </Link>

              <p className='text-gray-500 font-light leading-7 mt-5'>
                {post.attributes.headline}
              </p>
            </aside>
          </section>
        ))}
      </section>
    </main>
  );
}

export default CardPost;
