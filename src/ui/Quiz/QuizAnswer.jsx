import React from 'react';

export default function QuizAnswer({ feedback, onClose, id, question }) {
    // Determine the image based on feedback indicating a correct or incorrect answer.
    // This example uses the presence of "Bravo" or "Exact" as an indicator of correct feedback.
    // You might adjust this logic based on your actual feedback text or by passing a new prop.
    const isCorrect = feedback.includes("Bravo") || feedback.includes("Exact") || feedback.includes("C'est ça !");
    const imageSrc = isCorrect ? "/truth_bunny_happy.png" : "/truth_bunny_sad.png";

    return (
        <div className="flex flex-col items-center justify-between relative h-full">
            <img src="/bg-gradiant.png" className="absolute z-0" alt="" />
            <div className="bg-indigo-400 w-full z-10 flex align-center p-6 rounded-b-[30px] flex-col">
                <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                <h3 className="text-indigo-50 text-xl font-medium text-center">Question {id}</h3>
            </div>

            <div className="px-6 z-10 flex justify-between flex-col h-full pt-6 pb-2">
                <h4 className="text-center text-xl font-semibold">{question}</h4>

                <div className='flex justify-center items-center relative'>
                    <img className='w-48' src={imageSrc} alt="" />
                    <div className='absolute top-0 h-[9em] flex justify-center w-40 items-center'>
                        <p className="text-center text-md font-light">{feedback}</p>
                    </div>
                </div>
            </div>

            <div className='bg-indigo-500 z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col'>
                <button className="font-normal text-indigo-50 text-center w-full" onClick={onClose}>
                    Question Suivante
                </button>
            </div>
        </div>
    );
}
