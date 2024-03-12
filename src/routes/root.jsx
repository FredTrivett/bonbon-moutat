import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>

      <div className="flex items-center justify-center w-screen h-screen bg-darkblue">
        <div className="flex-col w-80 h-[38rem] bg-white rounded-3xl overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
}
