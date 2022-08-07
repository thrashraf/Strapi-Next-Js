import Layout from '../components/layout';
import { formatDate } from '../helpers/formateDate';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  let featured;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/posts?populate=*`
  );
  const { data } = await res.json();

  if (data.length > 0) {
    featured = data.find((item) => item.attributes.featured);
  }

  console.log(featured);

  // Pass data to the page via props
  return { props: { data, featured } };
}

export default function Home({ data, featured }) {
  return (
    <Layout>
      <header className='header-img'>
        <img src='theblogwhite.svg' className='m-auto' />
      </header>

      <main className='hero-container'>
        <aside className='hero-left-container'>
          <img
            src={
              process.env.NEXT_PUBLIC_APIURL +
              featured.attributes.thumbnail.data.attributes.formats.large.url
            }
          />
          <p className='date'>Mei 05, 2022</p>
          <h1 className='text-[35px] font-semibold'>
            {featured.attributes.title}
          </h1>
          <p className=' text-gray-500 font-light leading-7 mt-5'>
            {featured.attributes.headline}
          </p>
        </aside>

        <aside className='hero-left-container'>
          {data.slice(1, 4).map((post) => (
            <section className='hero-row'>
              <aside className='w-[41%] pr-5 '>
                <img
                  src={
                    process.env.NEXT_PUBLIC_APIURL +
                    post.attributes.thumbnail.data.attributes.formats.small.url
                  }
                  className=' w-full h-full object-cover'
                />
              </aside>

              <aside className='w-[58%]'>
                <span className='date'>
                  {formatDate(post.attributes.createdAt)}
                </span>
                <h1 className='hero-heading'>{post.attributes.title}</h1>
              </aside>
            </section>
          ))}
        </aside>
      </main>

      <main>
        <h1 className='section-title'>Editor's pick</h1>
        <section className='grid-container'>
          {data.map((post) => (
            <section className='pb-10'>
              <aside>
                <img
                  src={
                    process.env.NEXT_PUBLIC_APIURL +
                    post.attributes.thumbnail.data.attributes.formats.small.url
                  }
                  className='w-full h-full object-cover'
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
    </Layout>
  );
}
