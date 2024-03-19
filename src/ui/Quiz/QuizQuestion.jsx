import React, { useState } from 'react';

export default function QuizQuestion({ question, options, id, onAnswerSelected }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const selectOption = (score, index) => {
        setSelectedOption({ score, index });
    };

    const handleButtonClick = () => {
        if (selectedOption !== null) {
            onAnswerSelected(selectedOption.score);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between relative h-full">
            <img src="/bg-gradient.png" className="absolute z-0" alt="" />
            <div className="bg-indigo-400 w-full z-10 flex align-center justify-center p-6 rounded-b-[30px] flex-col">
                <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                <h3 className="text-indigo-50 text-xl font-medium text-center">Question {id}</h3>
            </div>
            <div className="px-6 z-10">
                <h4 className="text-center text-xl font-semibold">{question}</h4>
                <ul className="flex flex-col gap-3 pt-6">
                    {Object.entries(options).map(([key, { text, score }], index) => (
                        <li key={key}>
                            <button
                                onClick={() => selectOption(score, index)}
                                className={`w-full rounded-full p-3 shadow-[0_0_50px_-30px_rgba(0,0,0,0.1)] ${selectedOption?.index === index ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-900'}`}>
                                {text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${selectedOption ? 'bg-indigo-500' : 'bg-indigo-300'} z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col`}>
                <button
                    className="font-normal text-indigo-50 text-center w-full"
                    onClick={handleButtonClick}
                    disabled={selectedOption === null}>
                    Valider
                </button>
            </div>
        </div>
    );
}
