import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <Outlet />

      <div className="flex items-center justify-center w-screen h-screen bg-darkblue ">
        <div class="flex-col w-80 h-[38rem] bg-slate-50   rounded-3xl ">
          <Quizz/>
  </div>
    </div>
    </>
  );
}
