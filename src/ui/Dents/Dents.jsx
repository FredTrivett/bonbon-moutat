import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import tooths from '/tooths.png'
import mouse from '/mouse.png'
import mouth from '/mouth.png'
import { Link } from 'react-router-dom'

export default function Dents() {
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
                    <div>
                        <img className=' rounded-full left-0 -translate-y-2/4 -translate-x-5 w-20 absolute' src={bunny} alt='bunny' />
                    </div>
                    <h1 className='w-full flex justify-center text-indigo-50 text-2xl font-semibold ml-16'>
                        Les dents de lait
                    </h1>
                </div>
            </header>
            <div className='flex flex-col  mt-8 gap-4 mx-4 z-40 mb-10'>
                <img src={mouth} alt="mouth" />
                <p className='font-light text-sm'> Tu sais que quelque chose de super cool se passe dans ta bouche quand tu grandis ? Tu perds tes dents de lait pour laisser la place à tes dents définitives ! C'est comme un spectacle secret que ta bouche organise pour toi.</p>
                <img src={tooths} alt="tooths" />
                <p className='font-light text-sm'> Imagine ça comme une fête dans ta bouche. Tes dents de lait reçoivent leurs invitations à partir et à faire de la place pour les dents définitives. Elles se déplacent doucement, une par une, et c'est là que tu ressens parfois un petit picotement ou une sensation étrange quand elles bougent.</p>

                <p className='font-light text-sm'> Mais ne t'inquiète pas, c'est tout à fait normal ! Et quand une dent de lait tombe, tu peux la mettre sous ton oreiller et deviner quoi ? La petite souris viendra la chercher et te laissera une surprise en échange !</p>
                <img src={mouse} alt="mouse" />
            </div>
        </>
    )

}