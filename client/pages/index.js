import Layout from '../components/layout';
import MyApp from './_app';

export default function Home() {
  return (
    <Layout>
      <header className='header-img'>
        <img src='theblogwhite.svg' className='m-auto' />
      </header>

      <main className='hero-container'>
        <aside className='hero-left-container'>
          <img src='thumb_features.jpg' />
          <p className='date'>Mei 05, 2022</p>
          <h1 className='text-[35px] font-semibold'>
            Dear UI Designer, Let's learn about UX
          </h1>
          <p className=' text-gray-500 font-light leading-7 mt-5'>
            Lupakan sejenak Lorem Ipsum. Buat copy mu sendiri. Buat rekan kerja
            UX Writer lebih happy saat bekerja Belajar membuat copy dimulai dari
            menuliskan konteks dan informasi.
          </p>
        </aside>

        <aside className='hero-left-container'>
          <section className='hero-row'>
            <aside className='w-[41%] pr-5 '>
              <img
                src='thumb_article11.jpg'
                className=' w-full h-full object-cover'
              />
            </aside>

            <aside className='w-[58%]'>
              <span className='date'>Mei 05, 2022</span>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section>

          {/* <section className='hero-row'>
            <aside className='w-[41%] pr-5 '>
              <img
                src='thumb_article15.jpg'
                className=' w-full h-full object-cover'
              />
            </aside>

            <aside className='w-[58%]'>
              <span className='date'>Mei 05, 2022</span>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section> */}

          {/* <section className='hero-row'>
            <aside className='w-[41%] pr-5 '>
              <img
                src='thumb_article34.jpg'
                className=' w-full h-full object-cover'
              />
            </aside>

            <aside className='w-[58%]'>
              <span className='date'>Mei 05, 2022</span>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section> */}
        </aside>
      </main>

      <main>
        <h1 className='section-title'>Editor's pick</h1>
        <section className='grid-container'>
          <section className='pb-10'>
            <aside>
              <img
                src='thumb_article11.jpg'
                className='w-full h-full object-cover'
              />
            </aside>

            <aside className=''>
              <p className='date'>Mei 05, 2022</p>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section>

          {/* <section className='pb-10'>
            <aside>
              <img
                src='thumb_article11.jpg'
                className='w-full h-full object-cover'
              />
            </aside>

            <aside className=''>
              <p className='date'>Mei 05, 2022</p>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section>

          <section className='pb-10'>
            <aside>
              <img
                src='thumb_article11.jpg'
                className='w-full h-full object-cover'
              />
            </aside>

            <aside className=''>
              <p className='date'>Mei 05, 2022</p>
              <h1 className='hero-heading'>
                Ketika kamu bingung mengisi konten pada eksplorasi design mu
              </h1>
            </aside>
          </section> */}
        </section>
      </main>
    </Layout>
  );
}
