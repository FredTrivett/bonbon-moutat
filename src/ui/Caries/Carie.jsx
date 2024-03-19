import compte from '/line-md_account.svg'
import cloud from '/cloud.png'
import bird from '/bird.png'
import bunny from '/rond.png'
import bg from '/background.png'
import carie from '/carie.png'
import dentist from '/dentist.png'

export default function Carie(){
return (
    <>
<header className= 'bg-indigo-400 pb-10'>
    <nav className='flex justify-end mr-6 pt-5'>
    <img className=' justify-end' src={compte} alt='comptelogo' />
    </nav>
    <img className='absolute w-14 ml-10' src={cloud} alt='cloud' />
    <img className='absolute w-5 ml-60 mt-14' src={bird} alt='bird' />


    <div className='mt-24 flex border-4 items-center border-indigo-400  border-opacity-25 rounded-xl mx-7 relative'>
        <div className=''>
        <img className=' rounded-full left-0 -translate-y-2/4 -translate-x-5 w-20 absolute' src={bunny} alt='bunny' />
        </div>
        <h1 className='w-full flex justify-center text-indigo-50 text-2xl font-semibold'>
        Les caries
        </h1>
    </div>
</header>
<img src={bg} className='fixed w-80 h-full'/>
<div className='flex flex-col  mt-8 gap-4 mx-6'>
 <h2 className=' text-base font-semibold'>Qu'est-ce qu'une carie ?</h2>
 <p className='text-sm font-light'>Eh bien, c'est une petite tache ou un trou qui se forme dans une dent à cause de la nourriture que nous mangeons.</p>
 <img src={carie}/>
    <h2 className=' text-base font-semibold'>Les caries peuvent causer des douleurs si elles ne sont pas traitées à temps. Alors, comment savoir si tu as une carie ?</h2>
  <ul className=' list-decimal flex flex-col gap-4'>
    <li>
        <p className='text-sm font-light'>Si tu ressens une douleur lorsque tu mange ou boit quelque chose de chaud, de froid, ou de sucré, cela pourrait être un signe de carie.</p>
    </li>
    <li>
        <p className='text-sm font-light'>
        Parfois, tu peut voir des taches brunes ou noires sur vos dents. C'est un signe que quelque chose ne va pas et que tu dois consulter un dentiste.
        </p>
    </li>
  </ul>
  <img src={dentist}/>
  <h2 className='text-base font-semibold'>Maintenant, la bonne nouvelle, c'est que les caries peuvent être traitées. Voici ce que tu peut faire pour éviter les caries et garder tes dents en bonne santé :</h2>
  <ul className=' list-decimal flex flex-col gap-4'>
    <li>
        <p className='text-sm font-light'>Utilise une brosse à dents et du dentifrice pour nettoyer tes dents après le petit-déjeuner et avant d'aller au lit. Brosse doucement pendant au moins deux minutes.</p>
    </li>
    <li>
        <p className='text-sm font-light'>
        Utilise du fil dentaire, il aide à enlever la nourriture et la plaque entre tes dents là où t’as brosse à dents ne peut pas atteindre.
        </p>
    </li>
    <li>
        <p className='text-sm font-light'>
        Limite les aliments sucrés et collants comme les bonbons et les sodas. Opte plutôt pour des fruits, des légumes et du fromage, qui sont meilleurs pour vos dents.
        </p>
    </li>
    <li>
        <p className='text-sm font-light'>
        Il est important de rendre visite à ton dentiste au moins une fois par an pour un contrôle. Il pourra repérer les caries à un stade précoce et les traiter avant qu'elles ne deviennent un gros problème.
        </p>
    </li>
  </ul>
    </div>
</>
)

}