import React from 'react';

export default function QuizAnswer({ feedback, onClose }) {
    // Assuming feedback is a string based on the usage context provided.
    // If feedback is indeed an object with a 'correct' property, adjust accordingly.

    return (
        <div className="flex flex-col items-center justify-between relative h-full">
            <img src="/bg-gradiant.png" className="absolute z-0" alt="" />
            <div className="bg-indigo-400 w-full z-10 flex align-center justify-center p-6 rounded-b-[30px] flex-col">
                <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                {/* Removed the line that displayed the question ID since it doesn't seem needed here */}
            </div>

            {/* Display the feedback directly */}
            <p className="text-center text-indigo-50 text-xl font-medium p-6">{feedback}</p>

            <div className='bg-indigo-500 z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col'>
                <button className="font-normal text-indigo-50 text-center w-full" onClick={onClose}>
                    Close
                </button>
            </div>

        </div>
    );
}
