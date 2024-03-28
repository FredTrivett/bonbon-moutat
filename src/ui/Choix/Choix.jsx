import bg from '../../assets/background.png'
import React, { useState, useEffect } from 'react';
export default function Accueil(){
   
return (
    <>
   <img src={bg} className='absolute w-80 h-full'/>
<div className=' w-full h-full flex flex-col justify-center items-center px-6'>
   <div className='flex flex-col items-center gap-3'>
 <h1 className='font-bold text-indigo-500 text-xl text-center'>Bienvenue sur Bunbun tes dents</h1>
 <h2 className='font-bold text-indigo-500 text-base mb-8'>seléctionne ton âge :</h2>
 </div>
 <ul className='flex justify-center gap-10 items-center flex-wrap'>

 <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>3-5 ans</h3>
 <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>6-11 ans</h3>
 <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>12 ans ou + </h3>
 </ul>

</div>
</>
)

}