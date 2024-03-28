import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Accueil() {

  return (
    <>
      <div className=' w-full h-full flex flex-col justify-center items-center px-6'>
        <div className='flex flex-col items-center gap-3'>
          <div className='flex flex-col gap-0'>
            <h1 className='font-bold text-indigo-400 text-xl text-center'>Bienvenue sur </h1>
            <h2 className='font-bold text-indigo-500 text-3xl text-center'>Bunbun tes dents</h2>
          </div>
          <h2 className='font-bold text-indigo-900 text-base mb-4 pt-16'>seléctionne ton âge :</h2>
        </div>
        <ul className='flex justify-center gap-5 items-center flex-wrap'>

          <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>3-5 ans</h3>
          <Link to="/home">
            <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>6-11 ans</h3>
          </Link>
          <h3 className='z-40 cursor-pointer active:scale-90 text-xl py-4 px-4 border-4 border-indigo-500 rounded-xl bg-indigo-50'>12 ans ou + </h3>
        </ul>

      </div>
    </>
  )

}