import compte from '../../assets/line-md_account.svg'
import cloud from '../../assets/cloud.png'
import bird from '../../assets/bird.png'
import bunny from '../../assets/rond.png'
import chronometre from '../../assets/chronomètre.svg'

export default function Header(){
return (
    <>
<header className='bg-lightblue pb-10'>
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
        <p className='flex justify-end text-end text-sm'>
        Comment tu vas <br></br> aujourd'hui
        </p>
        </div>
    </div>
</header>

<div className='flex flex-col flex-wrap  mt-8 gap-5'>
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8'>
        <img src={chronometre} alt='chronometre icon' className='w-8'/>
       
        <h2>
        Chronomètre
        </h2>
    </div>
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8'>
        <img src={chronometre} alt='chronometre icon' className='w-8'/>
       
        <h2>
        Chronomètre
        </h2>
    </div>
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8'>
        <img src={chronometre} alt='chronometre icon' className='w-8'/>
       
        <h2>
        Chronomètre
        </h2>
    </div>
    <div className='flex gap-4 items-center justify-start border-2 rounded-2xl px-4 py-1 mx-8'>
        <img src={chronometre} alt='chronometre icon' className='w-8'/>
       
        <h2>
        Chronomètre
        </h2>
    </div>


</div>
</>
)

}