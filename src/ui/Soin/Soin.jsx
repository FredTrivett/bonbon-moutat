import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import dentcarie from '/toothblank.svg'
import couvert from '/couvert.svg'
import canne from '/suttercane.svg'
import dent from '/tooth.svg'
import { Link } from 'react-router-dom'

export default function Soin(){
return (
    <>
<header className=' relative bg-indigo-400 pb-10'>
    <nav className='flex justify-end mr-6 pt-5'>
    <img className=' justify-end' src={compte} alt='comptelogo' />
    </nav>
    <img className='absolute w-14 ml-10' src={cloud} alt='cloud' />
    <img className='absolute w-5 ml-60 mt-14' src={bird} alt='bird' />


    <div className='mt-24 bg-indigo-50 flex justify-between border-4 border-indigo-400  border-opacity-25 rounded-xl mx-7 relative'>
        <div className=''>
        <img className=' rounded-full left-0 -translate-y-1/4 -translate-x-5 w-[5.2rem] absolute' src={bunny} alt='bunny' />
        </div>
        <p className='py-3 pl-2 w-screen  flex ml-16 text-sm font-light'>
        Tu souhaite te renseigner sur quoi Louise ?
        </p>
    </div>
</header>

<div className='flex flex-wrap mt-8 gap-4 mx-2'>
    <Link to="/caries">
    <div className='flex flex-col gap-4 items-center justify-start border-2 rounded-2xl px-8 py-6 cursor-pointer '>
        <img src={dentcarie} alt='chronometre icon' className='w-14'/>
        <h2 className="text-sm ">
        Les Caries
        </h2>
    </div>
    </Link>
    <Link to="/aliment_a_eviter">
    <div className='flex flex-col gap-4 items-center justify-start border-2 rounded-2xl px-4 py-4 cursor-pointer '>
        <img src={canne} alt='chronometre icon' className='w-14'/>
        <h2 className="text-sm text-wrap w-24 text-center">
        Les aliments à éviter
        </h2>
    </div>
    </Link>
    <Link to="/recette_du_jour">
    <div className='flex flex-col gap-4 items-center justify-start border-2 rounded-2xl px-4 py-4 cursor-pointer '>
        <img src={couvert} alt='chronometre icon' className='w-14'/>
        <h2 className="text-sm text-wrap w-24 text-center ">
        La recette du jour
        </h2>
    </div>
    </Link>
    <Link to="/dent_de_lait"> 
    <div className='flex flex-col gap-4 items-center justify-start border-2 rounded-2xl px-4 py-4 cursor-pointer '>
        <img src={dent} alt='chronometre icon' className='w-14'/>
        <h2 className="text-sm text-wrap w-24 text-center">
        Les dents de lait
        </h2>
    </div>
    </Link>


</div>
</>
)

}