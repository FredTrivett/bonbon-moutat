import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import chronometre from '/chronomètre.svg'
import calendrier from '/calendar.svg'
import soin from '/health.svg'
import dent from '/tooth.svg'
import { Link } from 'react-router-dom'

export default function Accueil(){
return (
    <>
<header className=' bg-indigo-400 pb-10'>
    <nav className='flex justify-end mr-6 pt-5'>
    <img className=' justify-end' src={compte} alt='comptelogo' />
    </nav>
    <img className='absolute w-14 ml-10' src={cloud} alt='cloud' />
    <img className='absolute w-5 ml-60 mt-14' src={bird} alt='bird' />


    <div className='mt-24 bg-indigo-50 flex justify-between border-4 border-indigo-400  border-opacity-25 rounded-xl mx-7 relative'>
        <div className=''>
        <img className=' rounded-full left-0 -translate-y-1/4 -translate-x-5 w-20 absolute' src={bunny} alt='bunny' />
        </div>
        <div className='flex flex-col items-center mr-10'>
        <h2 className='font-bold'>
        Salut, Louise !
        </h2>
        <p className='flex justify-end text-end text-xs'>
        Comment tu vas <br></br> aujourd'hui
        </p>
        </div>
    </div>
</header>

<div className='flex flex-col flex-wrap  mt-8 gap-5'>
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8 cursor-pointer'>
        <img src={calendrier} alt='chronometre icon' className='w-8'/>
       
        <h2 className="text-xs">
        Mon calendrier de suivi
        </h2>
    </div>
    <Link to="/timer">
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8 cursor-pointer'>
        <img src={chronometre} alt='chronometre icon' className='w-8'/>
       
        <h2 className="text-xs">
        Mon chronomètre
        </h2>
    </div>
    </Link>
    <Link to="/soin_des_dents">
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8 cursor-pointer'>
        <img src={soin} alt='chronometre icon' className='w-8'/>
       
        <h2 className="text-xs">
       Prendre soin de mes dents
        </h2>
    </div>
    </Link>
    <Link to="/quiz">
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8 cursor-pointer'>
        <img src={dent} alt='chronometre icon' className='w-8'/>
       
        <h2 className="text-xs">
        Le quizz des dents
        </h2>
    </div>
    </Link>

</div>
</>
)

}