import Container from '@/src/components/element/container';
import HeaderUpper from '../upper/page';
import style from './SubHeader.module.css';

export default function SubHeader(props: { title: string }) {
  return (
    <section className='bg-white'>
      <Container>
        <div className={`px-6 pt-24 ${style.hero}`}>
          <div className={style.bg1} aria-hidden='true'>
            <div className={style.icon} />
          </div>
          <div className='mx-auto py-24 sm:py-36'>
            {/* <HeaderUpper /> */}
            <div className='text-center mt-4'>
              <h1 className={style.h1}>{props.title}</h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
