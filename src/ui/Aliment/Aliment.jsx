import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import bg from '/background.png'
import chips from '/chips.png'
import bonbon from '/bonbon.png'
import { Link } from 'react-router-dom'

export default function Aliment() {
    return (
        <>
            <header className=' relative bg-indigo-400 pb-10'>
                <Link to="/soin_des_dents" className='absolute top-4 left-3' > <img src="/arrow_back_white.png" alt="back" /> </Link>

                <nav className='flex justify-end mr-6 pt-5'>
                    <img className=' justify-end' src={compte} alt='comptelogo' />
                </nav>
                <img className='absolute w-14 ml-10' src={cloud} alt='cloud' />
                <img className='absolute w-5 ml-60 mt-14' src={bird} alt='bird' />


                <div className='mt-24 flex border-4 items-center border-indigo-400  border-opacity-25 rounded-xl mx-7 relative'>
                    <div className=''>
                        <img className=' rounded-full left-0 -translate-y-2/4 -translate-x-5 w-20 absolute' src={bunny} alt='bunny' />
                    </div>
                    <h1 className='w-full flex justify-center text-indigo-50 text-2xl font-semibold ml-16'>
                        Les aliments à éviter
                    </h1>
                </div>
            </header>
            <div className='flex flex-col  mt-8 gap-4 mx-4 z-40 mb-10'>
                <h3 className='text-base font-base'>La recette</h3>
                <p className='font-light text-sm'> Tu sais, il y a certains aliments qui peuvent être vraiment mauvais pour tes dents. Par exemple, les bonbons collants comme les caramels peuvent se coller à tes dents et causer des caries.</p>
                <img src={bonbon} alt="bonbon" />
                <p className='font-light text-sm'> Les boissons sucrées comme les sodas peuvent également être nocives pour tes dents, car le sucre nourrit les bactéries qui attaquent l'émail de tes dents.</p>
                <p className='font-light text-sm'> Il est également important de limiter ta consommation d'aliments riches en amidon comme les chips et les biscuits, car ils peuvent se transformer en sucres simples dans ta bouche, ce qui favorise la croissance des bactéries responsables des caries.</p>
                <img src={chips} alt="chips" />
                <p className='font-light text-sm'> Les boissons sucrées comme les sodas peuvent également être nocives pour tes dents, car le sucre nourrit les bactéries qui attaquent l'émail de tes dents.</p>
                <p className='font-light text-sm'> Il est également important de limiter ta consommation d'aliments riches en amidon comme les chips et les biscuits, car ils peuvent se transformer en sucres simples dans ta bouche, ce qui favorise la croissance des bactéries responsables des caries.</p>
            </div>
        </>
    )

}