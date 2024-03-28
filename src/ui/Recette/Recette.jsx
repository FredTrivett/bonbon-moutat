import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import bg from '/background.png'
import plat from '/kebab.png'
import cuisinier from '/cook.png'
import { Link } from 'react-router-dom'

export default function Recette() {
    return (
        <>
            <header className='relative bg-indigo-400 pb-10'>
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
                        La recette du jour
                    </h1>
                </div>
            </header>

            {/* <img src={bg} className='absolute w-80 h-full'/> */}
            <div className='flex flex-col mt-8 gap-4 mx-6 z-40'>
                <img src={plat} className='' />
                <h2 className=' text-2xl font-light'>L'omelette tendresse</h2>
                <h3 className=' text-base font-base'>Les ingrédients</h3>
                <ul className='font-light text-sm'>
                    <li>
                        - 2 oeufs
                    </li>
                    <li>
                        - 33,5g de lardons fumés
                    </li>
                    <li>
                        - 1 petit oignon
                    </li>
                    <li>
                        - 1/3 poivron vert
                    </li>
                    <li>
                        - 1 champignon de Paris
                    </li>
                    <li>
                        - Gruyère rapé
                    </li>
                    <li>
                        - Tomates cerises
                    </li>
                </ul>
                <h3 className='text-base font-base'>La recette</h3>
                <ul className='font-light text-sm'>
                    <li>
                        - Peler et découper l'oignon en petits bouts
                    </li>
                    <li>
                        - Découper le poivron en lamelles
                    </li>
                    <li>
                        - Faire dorer le tout à la poêle
                    </li>
                    <li>
                        - Rajouter les lardons un peu plus tard , puis les champignons finement coupés , à feu vif
                    </li>
                    <li>
                        - Lorsque la poêlée ewt grillée , battre les oeufs , et les ajouter dans la poêle , en baissant le feu
                    </li>
                    <li>
                        - Une fois l'omelette bie nprise, saupoudrer généreusement de gruyère râpé
                    </li>
                    <li>
                        - Couper en deux les tomates cerises, et les rajouter en fromant un motif... selon votre coeur
                    </li>
                </ul>
                <img src={cuisinier} />
            </div>
        </>
    )

}