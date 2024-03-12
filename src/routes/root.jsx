import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <Outlet />

      <section className='dark:bg-neutral-700'>

      </section>
    </>
  );
}
