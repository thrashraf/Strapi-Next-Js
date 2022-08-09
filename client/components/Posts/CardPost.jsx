import { formatDate } from '../../helpers/formateDate';

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
              <h1 className='hero-heading'>{post.attributes.title}</h1>
            </aside>
          </section>
        ))}
      </section>
    </main>
  );
}

export default CardPost;
